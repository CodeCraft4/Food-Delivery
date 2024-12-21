import React from 'react';
import {HappyLogo1, OfferImg1, OfferLunch1, OfferLunch2} from '@assets';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Spacer} from '@commons';
import {hp, wp} from '@enums';

const DealsCards = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles().container}
        onPress={() => Alert.alert('new dynamic page is here')}>
        <OfferImg1 />
        <View style={styles().absolute}>
          <View>
            <Spacer height={hp(2)} />
            <Text style={styles().title}>Rescued Food</Text>
            <Text style={styles().subTitle}>Saving food and hunger.</Text>
            <Spacer height={hp(3)} />
            <Text style={styles().desc}>
              Left over food and supplies are gathered from food venders and
              chefs, and are sold for 50% off!
            </Text>
          </View>
          <Spacer />
          <HappyLogo1 width={wp(45)} />
        </View>
      </TouchableOpacity>
      <Spacer height={hp(2)} />
      <View style={styles().lunch}>
        <TouchableOpacity>
          <OfferLunch1 />
        </TouchableOpacity>
        <Spacer width={wp(3)} />
        <TouchableOpacity>
          <OfferLunch2 />
        </TouchableOpacity>
      </View>
      <Text style={styles().line}></Text>
    </View>
  );
};

export default DealsCards;
