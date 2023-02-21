import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <Text style={styles.title}> Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
});

export default App;
