import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {MenueTitle, Spacer} from '@commons';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {styles} from './style';
import {BlackArrowRight, DisscountLogo} from '@assets';
import {RESTOURENT_LIST} from '@constants';
import { useNavigation } from '@react-navigation/native';

const Category = [
  {
    id: 1,
    type: 'Free Delivery',
  },
  {
    id: 2,
    type: 'Rescued',
  },
  {
    id: 3,
    type: 'Offer',
  },
];
const ListRestourent = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const [isFilter, setIsFilter] = useState(false);
  
  const navigation = useNavigation();

  console.log(isFilter);
  const selectedCategory = Category.find(
    category => category.id === selectedCategoryId,
  )?.type;

  const filter = RESTOURENT_LIST;
  const filterItems = filter.filter(i => i.deliver === selectedCategory);

  const handleCategorySelect = (id: any) => {
    if (id === 1) {
      setIsFilter(true);
    } else {
      setIsFilter(true);
    }
    setSelectedCategoryId(id);
  };

  return (
    <View>
      <MenueTitle
        title="All Restourents"
        description="256 Restaurants near you"
      />
      <Spacer height={hp(3)} />
      <View style={styles().buttons}>
        {Category.map(({id, type}) => (
          <TouchableOpacity
            key={id}
            style={styles().buttons}
            onPress={() => handleCategorySelect(id)}>
            <Text
              style={[
                styles().tabs,
                {
                  backgroundColor:
                    selectedCategoryId === id ? COLORS.primary : COLORS.gray,
                },
              ]}
              key={id}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Spacer height={hp(5)} />
      {(filterItems && filterItems.length > 0
        ? filterItems
        : RESTOURENT_LIST.sort(() => Math.random() - 0.5)
      )
        .slice(0, 4)
        .map((item, index) => (
          <View style={styles().restourent} key={index}>
            <View style={styles().logo}>
              {item.logo}
              <Spacer width={wp(3)} />
              <View>
                <Text style={styles().title}>{item.title}</Text>
                <Text style={styles().desc}>{item.menue}</Text>
                <Spacer height={hp(2)} />
                <View style={styles().active}>
                  <Text style={styles().delivery}>{item.deliver}</Text>
                </View>
                <Spacer height={hp(3)} />
                {index === 0 || index === 2 ? (
                  <Text style={styles().disscount}>
                    {' '}
                    <DisscountLogo />
                    <Spacer />
                    50% OFF
                  </Text>
                ) : null}
              </View>
            </View>
          </View>
        ))}
      <Spacer />
      <TouchableOpacity style={styles().arrowBtn} onPress={()=>navigation.navigate(SCREEN.ORDERS)}>
        <Text style={styles().viewTitle}>VIEW ALL RESTOURENTS</Text>
        <Spacer width={wp(10)} />
        <BlackArrowRight />
      </TouchableOpacity>
      <Spacer height={hp(4)} />
    </View>
  );
};

export default ListRestourent;
