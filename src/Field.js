import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {blue} from './constant';

export default function Field(props) {
  return <TextInput {...props} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
    color: blue,
    width: '78%',
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    paddingHorizontal: 10,
  },
});
