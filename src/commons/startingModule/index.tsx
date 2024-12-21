import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {BackgroundImage} from '@assets';

export const StartingModule = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <BackgroundImage />
      </View>
      <View style={styles.content}>
        <Text>Helow</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
