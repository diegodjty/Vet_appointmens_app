import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';

import Form from './src/components/Form';
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {' '}
        Appointment Manager {'\n'}
        <Text style={styles.boldTitle}>Vet</Text>
      </Text>
      <Pressable style={styles.newApptBtn} onPress={() => setShowModal(true)}>
        <Text style={styles.apmtTextBtn}>New Appointment</Text>
      </Pressable>
      <Form showModal={showModal} setShowModal={setShowModal} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  boldTitle: {
    fontWeight: '900',
    color: '#6d28d9',
  },
  newApptBtn: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  apmtTextBtn: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;
