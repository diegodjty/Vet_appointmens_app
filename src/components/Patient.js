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
    <View>
      <Text>{patient}</Text>
      <Text>{formatDate(date)}</Text>
    </View>
  );
};

export default Patient;
