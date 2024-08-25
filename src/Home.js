import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Background from './Background';

const Home = props => {
  return (
    <Background>
      <View style={[styles.marginHorizontal, styles.marginVertical]}>
        <Text style={[styles.white, styles.fontSize]}>Dessert Hub</Text>
        <TouchableOpacity
          style={styles.loginbutton}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.white}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpbutton}
          onPress={() => props.navigation.navigate('Signup')}>
          <Text style={styles.white}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  loginbutton: {
    width: 300,
    backgroundColor: '#0077b6',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
  signUpbutton: {
    width: 300,
    backgroundColor: '#ffd60a',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 10,
  },
  white: {
    color: 'white',
  },
  fontSize: {
    fontSize: 54,
  },
  marginHorizontal: {
    marginHorizontal: 40,
  },
  marginVertical: {
    marginVertical: 300,
  },
});

export default Home;
