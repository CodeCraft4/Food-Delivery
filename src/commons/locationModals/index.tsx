import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Spacer} from '../spacer';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {ArrowLeft, EditIcon, HomeOutlined, MapImg} from '@assets';
import {styles} from './style';
import {CommonButtons} from '../button';
import {useModal} from '@hooks';
import {DeliveryModal} from '../deliveryModal';
import {useNavigation} from '@react-navigation/native';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const LocationModals = (props: Props) => {
  const {open, onClose} = props || {};

  const navigation = useNavigation();

  const {
    open: isDeliveryModal,
    closeModal: closeDeliveryModal,
    openModal: openDeliveryModal,
  } = useModal();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}>
      <Spacer height={hp(10)} />
      <View style={styles().modalContainer}>
        <TouchableOpacity style={styles().deliver} onPress={openDeliveryModal}>
          <ArrowLeft />
          <Spacer width={wp(3)} />
          <Text style={styles().deliverText}>Deliver to</Text>
        </TouchableOpacity>
        <View style={styles().map}>
          <MapImg
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </View>
        <View style={styles().insideContainer}>
          <Spacer height={hp(4)} />
          <TouchableOpacity style={styles().editsBtn}>
            <EditIcon />
          </TouchableOpacity>
          <Spacer height={hp(2)} />
          <TouchableOpacity style={styles().list} onPress={()=>navigation.navigate('Bottom_tab',{screen:SCREEN.HOME})}>
            <HomeOutlined />
            <Spacer width={wp(5)} />
            <View>
              <Text style={styles().title}>Satya Nilayam</Text>
              <Text style={styles().descrip}>
                21-42-34, Banjara Hills, Hyderabad, 500072
              </Text>
            </View>
          </TouchableOpacity>
          <Spacer height={hp(3)} />
          <View style={styles().confirmLocation}>
            <CommonButtons
              title="Confirm Location"
              bgcolor={COLORS.primary}
              onPress={() => navigation.navigate('Bottom_tab', { screen: SCREEN.HOME })}
            />
          </View>
        </View>
        <Spacer height={hp(4)} />
      </View>
      {isDeliveryModal && (
        <DeliveryModal open={isDeliveryModal} onClose={closeDeliveryModal} />
      )}
    </Modal>
  );
};
