import React, {useState} from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
const Form = ({showModal, setShowModal, setPatients, patients}) => {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [date, setDate] = useState(new Date());

  const handlApptm = () => {
    if ([patient, owner, email, symptoms, date].includes('')) {
      Alert.alert('Error', 'All fields are required', []);

      return;
    }

    const newPatient = {
      id: Date.now(),
      patient,
      owner,
      email,
      symptoms,
      date,
    };

    setPatients([...patients, newPatient]);
    setShowModal(!showModal);

    setPatient('');
    setOwner('');
    setEmail('');
    setNumber('');
    setSymptoms('');
    setDate(new Date());
  };

  return (
    <Modal animationType="slide" visible={showModal}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            New <Text style={styles.boldTitle}>Appointment</Text>
          </Text>
          <Pressable
            onLongPress={() => setShowModal(false)}
            style={styles.cancelBtn}>
            <Text style={styles.cancelTxt}>X Cancel</Text>
          </Pressable>
          <View style={styles.field}>
            <Text style={styles.label}>Pacient Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Pacient Name"
              placeholderTextColor={'#666'}
              value={patient}
              onChangeText={setPatient}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Owner Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner Name"
              placeholderTextColor={'#666'}
              value={owner}
              onChangeText={setOwner}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor={'#666'}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholder="Phone Number"
              placeholderTextColor={'#666'}
              value={number}
              onChangeText={setNumber}
              maxLength={10}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Date</Text>
            <View style={styles.dateContainer}>
              <DatePicker
                date={date}
                mode="date"
                // eslint-disable-next-line no-shadow
                onDateChange={date => setDate(date)}
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>symptoms</Text>
            <TextInput
              style={[styles.input, styles.symptomsInput]}
              placeholder="Symptoms"
              placeholderTextColor={'#666'}
              value={symptoms}
              onChangeText={setSymptoms}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <Pressable onPress={handlApptm} style={styles.newApptmBtn}>
            <Text style={styles.newApptmTxt}>Add Patient</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#6D28D9', flex: 1},
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
  cancelBtn: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  cancelTxt: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  field: {marginTop: 10, marginHorizontal: 30, marginBottom: 10},
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
  symptomsInput: {height: 100},
  dateContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  newApptmBtn: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  newApptmTxt: {
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16,
  },
});
export default Form;
