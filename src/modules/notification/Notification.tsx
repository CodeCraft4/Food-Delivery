import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {ArrowLeft, Logo} from '@assets';
import {Spacer} from '@commons';
import {hp, SCREEN} from '@enums';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation()
  const notifications = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor consequuntur eligendi veritatis quisquam laborum doloremque',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor consequuntur eligendi veritatis quisquam laborum doloremque',
  ];

  const handlePress = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles().container}>
      <View style={styles().personal}>
        <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.PROFILE)}>
        <ArrowLeft />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles().editBtn}>Marked as read</Text>
        </TouchableOpacity>
      </View>
      <Spacer height={hp(3)} />
      <Text style={styles().title}>Notifications</Text>
      <Spacer height={hp(3)} />
      <View>
        {notifications.map((notification, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles().notify,
              activeIndex === index && styles().activeNotify,
            ]}
            onPress={() => handlePress(index)}
          >
            <Logo />
            <Text style={styles().desc}>{notification}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Notification;
