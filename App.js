import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';

import Form from './src/components/Form';
import Patient from './src/components/Patient';
function App() {
  const [showModal, setShowModal] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const editPatient = id => {
    const patientToEdit = patients.filter(patient => patient.id === id);
    setPatient(patientToEdit[0]);
  };

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

      {patients.length === 0 ? (
        <Text style={styles.noPatients}>No Patients</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={patients}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Patient
              item={item}
              setShowModal={setShowModal}
              editPatient={editPatient}
            />
          )}
        />
      )}

      <Form
        showModal={showModal}
        setShowModal={setShowModal}
        patients={patients}
        setPatients={setPatients}
      />
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
  noPatients: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  list: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
