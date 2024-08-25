import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground
        source={require('./assets/images/home-bg.jpg')}
        style={styles.height}
      />
      <View style={styles.bgPosition}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  height: {
    height: '100%',
  },
  bgPosition: {
    position: 'absolute',
  },
});

export default Background;
