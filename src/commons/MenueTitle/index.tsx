import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Spacer} from '../spacer';
import {BlackArrowRight} from '@assets';

type Props = {
  title: string;
  description: string;
  color?: any;
};

export const MenueTitle = (props: Props) => {
  const {description, title, color} = props;

  return (
    <View>
      <View style={styles({color}).user}>
        <Text style={styles({color}).title}>{title}</Text>
        <TouchableOpacity style={styles({color}).edits}>
          <Text style={styles({color}).allBtn}>All</Text>
          <Spacer />
          <BlackArrowRight />
        </TouchableOpacity>
      </View>
      <Text style={styles({color}).description}>{description}.</Text>
    </View>
  );
};
