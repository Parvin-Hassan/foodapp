import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Background from './Background';
import auth from '@react-native-firebase/auth';

export default function DetailsScreen() {
  const user = auth().currentUser;
  if (user) {
    console.log('User email: ', user.email);
  }
  return (
    <Background>
      <View style={[styles.marginHorizontal, styles.marginVertical]}>
        <Text style={[styles.white, styles.fontSize]}>
          Welcome, {user.email}
        </Text>
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  white: {
    color: 'white',
  },
  fontSize: {
    fontSize: 20,
  },
  marginHorizontal: {
    marginHorizontal: 40,
  },
  marginVertical: {
    marginVertical: 100,
  },
});
