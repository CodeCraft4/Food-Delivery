import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Spacer} from '../spacer';
import {hp, SCREEN, wp} from '@enums';
import {
  ArrowLeft,
  EditIcon,
  HomeContained,
  HomeOutlined,
  LocationPin,
  LookUpMap,
  Profile,
  Search,
} from '@assets';
import {CustomInputs} from '../CustomInputs';
import {useNavigation} from '@react-navigation/native';
import {FormProvider, useForm} from 'react-hook-form';

type Props = {
  open: boolean;
  onClose: () => void;
};
export const DeliveryModal = (props: Props) => {
  const {open, onClose} = props || {};
  const navigation = useNavigation();
  const methods = useForm();

  const List = [
    {
      icons: <HomeOutlined />,
      title: 'Satya Nilayam',
      description: '21-42-34, Banjara Hills, Hyderabad, 500072',
    },
    {
      icons: <LocationPin />,
      title: 'Current Location',
      description: '21-42-34, Banjara Hills, Hyderabad, 500072',
    },
    {
      icons: <LookUpMap />,
      title: 'Look up the map',
    },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}>
      <Spacer height={hp(10)} />
      <View style={styles().modalContainer}>
        <View style={styles().insideContainer}>
          <Spacer height={hp(3)} />
          <TouchableOpacity style={styles().deliver} onPress={onClose}>
            <ArrowLeft />
            <Spacer width={wp(3)} />
            <Text style={styles().deliverText}>Deliver to</Text>
          </TouchableOpacity>
          <Spacer height={hp(3)} />
          <FormProvider {...methods}>
            <TouchableOpacity style={styles().search}>
              <CustomInputs
                placeholder="Search Location"
                icons={<Search />}
                bgcolor={'#E5E4E2'}
                name="search"
                type={'search'}
              />
            </TouchableOpacity>
          </FormProvider>
          <Spacer height={hp(5)} />
          {List.map((e, i) => (
            <View>
              <TouchableOpacity
                style={styles().list}
                key={i}
                onPress={() =>
                  navigation.navigate('Bottom_tab', {screen: SCREEN.HOME})
                }>
                {e.icons}
                <Spacer width={wp(5)} />
                <View>
                  <Text style={styles().title}>{e.title}</Text>
                  <Text style={styles().descrip}>{e.description}</Text>
                </View>
              </TouchableOpacity>
              <Spacer height={hp(3)} />
            </View>
          ))}
        </View>
        <Spacer height={hp(4)} />
        <View style={styles().address}>
          <Text style={styles().addressTitle}>Saved Addresses</Text>
          <Spacer width={wp(30)} />
          <TouchableOpacity style={styles().edits}>
            <Text>Edit</Text>
            <Spacer width={wp(2)} />
            <EditIcon />
          </TouchableOpacity>
        </View>
        <Spacer height={hp(4)} />
        <View style={styles().btnContainer}>
          <TouchableOpacity
            style={styles().button}
            onPress={() =>
              navigation.navigate('Bottom_tab', {screen: SCREEN.HOME})
            }>
            <HomeContained />
            <Text style={styles().text}>Home</Text>
          </TouchableOpacity>
          <Spacer width={wp(12)} />
          <TouchableOpacity
            style={styles().button}
            onPress={() =>
              navigation.navigate('Bottom_tab', {screen: SCREEN.PROFILE})
            }>
            <Profile />
            <Text style={styles().text}>Office</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
