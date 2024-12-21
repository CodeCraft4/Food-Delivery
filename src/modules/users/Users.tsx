import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styele';
import {CommonButtons, Spacer} from '@commons';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {
  BackArrow,
  CrossIcon,
  GreenCorrect,
  HeartAquaIcon,
  HomeOutlined,
  WhiteArrowRight,
} from '@assets';
import {useNavigation} from '@react-navigation/native';

const Users = ({route}: any) => {
  const {item} = route.params || {};
  const navigation = useNavigation();

  const [add, setAdd] = useState(2);

  const handleIncrease = () => {
    setAdd(add + 1);
  };

  const handleDecrease = () => {
    if (add > 2) {
      setAdd(add - 1);
    }
  };

  return (
    <ScrollView style={styles().container}>
      <Spacer height={hp(4)} />
      <View style={styles().page}>
        <View style={styles().list}>
          <HomeOutlined />
          <Spacer width={wp(3)} />
          <View>
            <Text style={styles().title}>Home</Text>
            <Text style={styles().descrip}>
              21-42-34, Banjara Hills, Hyder....
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREEN.USER_DETAILS)}>
          <HeartAquaIcon />
        </TouchableOpacity>
      </View>
      <Spacer height={hp(3)} />
      <View style={styles().perform}>
        {item?.poster}
        <View style={styles().inerSide}>
          <View>
            <Text style={styles().title2}>{item?.title}</Text>
            <Text style={styles().descrip2}>{item?.user}</Text>
            <Spacer height={hp(2)} />
            <Text style={styles().descrip2}>{item?.description}</Text>
          </View>
          <View>
            {item?.logo}
            <View style={styles().btnText}>
              <WhiteArrowRight />
              <Spacer width={wp(1)} />
              <Text style={styles().btnText}>{item?.btnText}</Text>
            </View>
          </View>
        </View>
      </View>
      <Spacer height={hp(3)} />
      <TouchableOpacity
        style={styles().prefer}
        onPress={() => navigation.navigate(SCREEN.HOME)}>
        <BackArrow width={wp(4)} height={hp(5)} />
        <Text style={styles().prefer}>Your Preferences</Text>
      </TouchableOpacity>
      <Spacer height={hp(3)} />
      <View style={styles().maximun}>
        <Text style={styles().set}>Set maximum user:</Text>
        <View style={styles().counter}>
          <TouchableOpacity onPress={handleDecrease}>
            <Text style={styles().text}>-</Text>
          </TouchableOpacity>
          <Text style={styles().text}>{add}</Text>
          <TouchableOpacity onPress={handleIncrease}>
            <Text style={styles().text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Spacer height={hp(2)} />

      <Spacer />
      <Text style={styles().set}>Select active users for current order:</Text>
      <Spacer height={hp(3)} />

      {[1, 2].map((_, i) => (
        <View key={i} style={styles().userManage}>
          <Text style={styles().text}>User {i + 1}</Text>
          <TouchableOpacity>
            <GreenCorrect />
          </TouchableOpacity>
        </View>
      ))}

      {Array.from({length: add - 2}).map((_, i) => (
        <View key={i + 2} style={styles().userManage}>
          <Text style={styles().text}>User {i + 3}</Text>
          <TouchableOpacity onPress={() => setAdd(add - 1)}>
            <CrossIcon />
          </TouchableOpacity>
        </View>
      ))}

      <CommonButtons title="Save Changes" bgcolor={COLORS.secondary} onPress={()=>navigation.navigate(SCREEN.HOME)} />
      <Spacer height={hp(14)} />
    </ScrollView>
  );
};

export default Users;
