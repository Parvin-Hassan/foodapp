import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import Background from './Background';
import Field from './Field';
import {blue, yellow} from './constant';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const login = async () => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Succesfully Login!');
        navigation.navigate('Details');
      })
      .catch(err => {
        Alert.alert('Error:', err.message);
      });
  };
  return (
    <Background>
      <View style={[styles.alignItems, styles.pageWidth]}>
        <Text style={styles.loginTitle}>Login</Text>
      </View>
      <View style={styles.loginBackground}>
        <Text style={styles.welcomeTitle}>Welcome Back</Text>
        <Text style={styles.welcomeText}>Login to your account</Text>
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
        <View style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </View>
        <TouchableOpacity
          style={[styles.alignItems, styles.loginBtn]}
          onPress={() => login()}>
          <Text style={styles.white}>Login</Text>
        </TouchableOpacity>
        <View style={styles.accountView}>
          <Text style={styles.accountContent}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.signupBtn}>Signup</Text>
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
    PaddingTop: 300,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 40,
    color: 'white',
    marginTop: 80,
    alignItems: 'center',
    fontWeight: 'bold',
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
