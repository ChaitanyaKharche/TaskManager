import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, serverTimestamp, query, where } from 'firebase/firestore';
import { db, auth } from '../config/firebaseConfig';

const TaskScreen = ({ navigation }) => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchTasks = async () => {
      if (user) {
        const q = query(collection(db, 'tasks'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        setTasks(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      }
    };
    fetchTasks();
  }, [user]);

  const addTask = async () => {
    if (!newTask.trim()) return;
    await addDoc(collection(db, 'tasks'), { text: newTask, completed: false, timestamp: serverTimestamp(), userId: user.uid });
    setNewTask('');
    // Fetch updated tasks list
    const q = query(collection(db, 'tasks'), where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    setTasks(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const markComplete = async (id, completed) => {
    const taskDoc = doc(db, 'tasks', id);
    await updateDoc(taskDoc, { completed: !completed, completionTime: serverTimestamp() });
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !completed } : task)));
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter new task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text onPress={() => markComplete(item.id, item.completed)}>
              {item.text} {item.completed ? '✓' : ''}
            </Text>
            <Button title="Delete" onPress={() => deleteTask(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Button title="View Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default TaskScreen;
