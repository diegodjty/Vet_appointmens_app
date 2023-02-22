import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Patient = ({item}) => {
  const {patient, date} = item;

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
});

export default Patient;
