import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Kalen is awesome ......</Text>
      <Text>Kalen is great when he's part of a team</Text>
      <Text>I'm Blue da ba de </Text>
      <Text>da ba de dab a dee</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
