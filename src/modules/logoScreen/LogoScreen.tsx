import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, hp, wp} from '@enums';
import {Logo, LogoBg, StartLogo} from '@assets';

const LogoScreen = () => {
  return (
    <View style={styles.container}>
      <LogoBg height={hp(100)} />
      <View style={styles.logo}>
        <StartLogo />
      </View>
      <View style={styles.logo2}>
        <Logo width={wp(60)} height={hp(60)} />
      </View>
    </View>
  );
};

export default LogoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    flexDirection: 'column',
  },
  logo2: {
    position: 'absolute',
    left: wp(25),
  },
});
