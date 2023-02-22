import React from 'react';
import {Text, SafeAreaView, View, Pressable, StyleSheet} from 'react-native';
import {formatDate} from '../helpers';

const PatientInfo = ({patient, setPatientModal, setPatient}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Patient <Text style={styles.boldTitle}>Information</Text>
      </Text>
      <View>
        <Pressable
          style={styles.closeBtn}
          onLongPress={() => {
            setPatientModal(false);
            setPatient({});
          }}>
          <Text style={styles.closeTxt}>Close</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.field}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{patient.patient}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Owner:</Text>
          <Text style={styles.value}> {patient.owner}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>email:</Text>
          <Text style={styles.value}>{patient.email}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{patient.phone}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}> Date:</Text>
          <Text style={styles.value}>{formatDate(patient.date)}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Symptoms:</Text>
          <Text style={styles.value}>{patient.symptoms}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  boldTitle: {
    fontWeight: '900',
  },
  closeBtn: {
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  closeTxt: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  content: {
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  field: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '700',
    fontSize: 12,
  },
  value: {
    fontWeight: '700',
    fontSize: 22,
    color: '#334155',
  },
});

export default PatientInfo;
