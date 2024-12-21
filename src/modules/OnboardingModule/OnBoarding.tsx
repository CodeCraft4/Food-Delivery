import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {hp, SCREEN, wp} from '@enums';
import {CommonButtons, Spacer} from '@commons';
import {
  Logo,
  RigthArrow,
} from '@assets';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import { ONBOARDING_SCREEN } from '@constants';


const OnboardingModule = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const navigation = useNavigation();

  const handleScroll = (event: any) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    setCurrentScreen(index);
  };

  const Slide = ({item}: any) => {
    const svgWidth = wp(100);
    const svgHeight = hp(50);

    return (
      <View style={styles().slide}>
        <Spacer width={wp(100)} />
        <TouchableOpacity
          style={styles().skip}
          onPress={() => navigation.navigate(SCREEN.AUTH)}>
          <Text style={styles().skipText}>Skip</Text>
          <RigthArrow />
        </TouchableOpacity>
        <View style={styles().logo}>
          <Logo />
        </View>
        <Text style={styles().title}>{item?.name}</Text>
        {item?.image(svgWidth, svgHeight)}
      </View>
    );
  };

  // Dots stepper
  const Stepper = () => {
    return (
      <View style={styles().stepperContainer}>
        {ONBOARDING_SCREEN.map((_, index) => (
          <View
            key={index}
            style={[
              styles().dot,
              index === currentScreen
                ? styles().activeDot
                : styles().inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles().container}>
      <FlatList
        data={ONBOARDING_SCREEN}
        renderItem={({item}) => <Slide item={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      {currentScreen === 2 ? (
        <View style={styles().start}>
          <CommonButtons
            title="Get Started"
            onPress={() => navigation.navigate(SCREEN.AUTH)}
          />
          <Spacer height={hp(1)} />
        </View>
      ) : (
        <Stepper />
      )}
    </View>
  );
};

export default OnboardingModule;
