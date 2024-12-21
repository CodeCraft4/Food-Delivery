import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SCREEN} from '@enums';
import {useNavigation} from '@react-navigation/native';

const EditAccount = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(SCREEN.PROFILE)}>
        <Text style={styles.text}>Edit Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: COLORS.black,
  },
});
