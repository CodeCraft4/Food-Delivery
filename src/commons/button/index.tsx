import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Spacer} from '../spacer';
import {wp} from '@enums';

type Props = {
  title?: string;
  icons?: any;
  bgcolor?: string;
  onPress?: () => void | boolean;
};
export const CommonButtons = (props: Props) => {
  const {title, icons, bgcolor, onPress} = props;
  return (
    <View>
      <TouchableOpacity style={styles({bgcolor}).button} onPress={onPress}>
        {icons}
        {icons && <Spacer width={wp(2)} />}
        <Text style={styles({bgcolor}).buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
