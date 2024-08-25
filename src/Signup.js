import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import Background from './Background';
import Field from './Field';
import {blue, yellow} from './constant';
import auth from '@react-native-firebase/auth';

export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User Account Created');
      })
      .catch(err => {
        Alert.alert('Error:', err.message);
      });
  };

  return (
    <Background>
      <View style={[styles.alignItems, styles.pageWidth]}>
        <Text style={styles.loginTitle}>Register</Text>
      </View>
      <View style={styles.loginBackground}>
        <Text style={styles.welcomeText}>Create a new account</Text>
        <Field
          placeholder="Email/ Username"
          value={this.email}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
        />
        <Field
          placeholder="Password"
          value={this.password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[styles.alignItems, styles.loginBtn]}
          onPress={() => signUp()}>
          <Text style={styles.white}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.accountView}>
          <Text style={styles.accountContent}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.signupBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  alignItems: {
    alignItems: 'center',
  },
  pageWidth: {
    width: 400,
  },
  white: {
    color: 'white',
  },
  loginTitle: {
    color: 'white',
    fontSize: 54,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  loginBackground: {
    backgroundColor: yellow,
    height: 900,
    width: 430,
    borderTopLeftRadius: 130,
    paddingTop: 100,
    alignItems: 'center',
  },
  welcomeText: {
    color: blue,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    width: '78%',
    paddingRight: 16,
    marginBottom: 200,
  },
  forgotPasswordText: {
    color: blue,
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginBtn: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
    color: blue,
    width: 330,
    backgroundColor: blue,
    borderColor: '#ffffff',
    justifyContent: 'center',
  },
  accountView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupBtn: {
    color: blue,
    fontWeight: 'bold',
    fontSize: 16,
  },
  accountContent: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
