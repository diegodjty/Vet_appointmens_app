import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const Patient = ({item, setShowModal, editPatient}) => {
  const {patient, date, id} = item;

  // eslint-disable-next-line no-shadow
  const formatDate = date => {
    const newDate = new Date(date);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return newDate.toLocaleDateString('en-US', options);
  };

  console.log(formatDate(date));

  return (
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
        <Pressable style={[styles.btn, styles.deleteBtn]}>
          <Text style={styles.textBtn}>Delete</Text>
        </Pressable>
      </View>
    </View>
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
