import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './style';
import {Spacer} from '../spacer';
import {wp} from '@enums';
import {Controller, useFormContext} from 'react-hook-form';

type Props = {
  placeholder: string;
  icons?: React.ReactNode;
  bgcolor?: string;
  onFocus?: () => void;
  name: string;
  type?: any;
};

export const CustomInputs: React.FC<Props> = ({
  placeholder,
  icons,
  bgcolor,
  onFocus,
  name,
  type,
}) => {

  const {control} = useFormContext();

  return (
    <View style={styles({bgcolor}).inputContainer}>
      <Spacer width={wp(2)} />
      {icons}
      <Spacer width={wp(2)} />
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <View>
            <TextInput
              placeholder={placeholder}
              onFocus={onFocus}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={type === 'password'}
              keyboardType={type === 'email' ? 'email-address' : 'default'}
            />
            {error && (
              <Text style={styles({bgcolor}).error}>{error.message}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
};
