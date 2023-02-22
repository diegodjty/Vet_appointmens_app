import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {formatDate} from '../helpers';

const Patient = ({
  item,
  setShowModal,
  editPatient,
  deletePatient,
  setPatientModal,
  setPatient,
}) => {
  const {patient, date, id} = item;

  return (
    <Pressable
      onLongPress={() => {
        setPatientModal(true);
        setPatient(item);
      }}>
      <View style={styles.container}>
        <Text style={styles.label}>Patient:</Text>
        <Text style={styles.text}>{patient}</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>

        <View style={styles.btnContainer}>
          <Pressable
            onLongPress={() => {
              setShowModal(true);
              editPatient(id);
            }}
            style={[styles.btn, styles.editBtn]}>
            <Text style={styles.textBtn}>Edit</Text>
          </Pressable>
          <Pressable
            onLongPress={() => deletePatient(id)}
            style={[styles.btn, styles.deleteBtn]}>
            <Text style={styles.textBtn}>Delete</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94A3B8',
    borderBottomWidth: 1,
  },
  label: {
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  date: {
    color: '#374151',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteBtn: {
    backgroundColor: '#EF4444',
  },
  editBtn: {
    backgroundColor: '#F59E0B',
  },
  textBtn: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF',
  },
});

export default Patient;
