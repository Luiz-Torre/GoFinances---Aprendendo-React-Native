import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dashboard } from './src/Components/screens/DashBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard title = "oie"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
