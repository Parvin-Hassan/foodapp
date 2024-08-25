import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Background from './Background';

export default function DetailsScreen() {
  return (
    <Background>
      <View style={[styles.marginHorizontal, styles.marginVertical]}>
        <Text style={[styles.white, styles.fontSize]}>
          Welcome to Home Page!
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
    fontSize: 64,
  },
  marginHorizontal: {
    marginHorizontal: 40,
  },
  marginVertical: {
    marginVertical: 100,
  },
});
