import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/Components/screens/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome title = "oie"/>
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
