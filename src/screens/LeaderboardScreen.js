import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

const LeaderboardScreen = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const q = query(
          collection(db, 'tasks'),
          where('completed', '==', true),
          orderBy('completionTime', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const leaderData = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));

        // Group by userId and count completed tasks
        const leaderMap = {};
        leaderData.forEach(task => {
          if (leaderMap[task.userId]) {
            leaderMap[task.userId].count += 1;
          } else {
            leaderMap[task.userId] = { userId: task.userId, count: 1 };
          }
        });

        // Fetch user names
        const leaderArray = await Promise.all(
          Object.values(leaderMap).map(async (leader) => {
            const userDoc = await getDocs(doc(db, 'users', leader.userId));
            return {
              userId: leader.userId,
              count: leader.count,
              email: userDoc.exists() ? userDoc.data().email : 'Unknown User'
            };
          })
        );

        // Sort by count
        const sortedLeaders = leaderArray.sort((a, b) => b.count - a.count);
        setLeaders(sortedLeaders);
      } catch (error) {
        console.error("Error fetching leaderboard: ", error);
      }
    };

    fetchLeaders();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaders}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.email} - Tasks Completed: {item.count}</Text>
          </View>
        )}
        keyExtractor={item => item.userId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default LeaderboardScreen;
