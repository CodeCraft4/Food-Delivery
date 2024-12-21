import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  WhiteArrowRight,
} from '@assets';
import {Spacer} from '@commons';
import {hp, SCREEN, wp} from '@enums';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import { PERFORMANCE_CARDS } from '@constants';

const PerformanceCard = () => {
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
    return (
      <TouchableOpacity
        style={styles().perform}
        onPress={() => navigation.navigate(SCREEN.USER_DETAILS,{item})}>
        {item.poster}
        <View style={styles().inerSide}>
          <View>
            <Text style={styles().title}>{item.title}</Text>
            <Text style={styles().user}>{item.user}</Text>
            <Spacer height={hp(2)} />
            <Text style={styles().descrip}>{item.description}</Text>
          </View>
          <View>
            {item.logo}
            <TouchableOpacity style={styles().btnText}>
              <WhiteArrowRight />
              <Spacer width={wp(1)} />
              <Text style={styles().btnText}>{item.btnText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Stepper = () => {
    return (
      <View style={styles().stepperContainer}>
        {PERFORMANCE_CARDS.map((_, index) => (
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
    <View>
      <FlatList
        data={PERFORMANCE_CARDS}
        renderItem={({item}) => <Slide item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      <Stepper />
    </View>
  );
};

export default PerformanceCard;
