import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Square = ({ color, label }) => {
  return (
    <View style={[styles.square, { backgroundColor: color }]}>
      <Text style={styles.squareText}>{label}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Square color="#fe2b" label="Square I" />
        <Square color="#ad1a" label="Square II" />
        <Square color="#1cec" label="Square III" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 10,
  },
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});