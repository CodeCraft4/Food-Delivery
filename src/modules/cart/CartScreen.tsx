import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  BackArrow,
  FoodMeal1,
  HeartContained,
  HeartOutlined,
  StarIcon,
} from '@assets';
import {styles} from './style';
import {Spacer, OrderModal} from '@commons';
import {hp, SCREEN, wp} from '@enums';
import {Ingredients, UserDropdown} from './components';
import {useModal} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {NUTRATION_DATA} from '@constants';

const CartScreen = ({route}: any) => {
  const {object, item} = route?.params || {};
  const navigation = useNavigation();
  const [like, setLike] = useState<any>();

  const likeFnBtn = () => {
    setLike(<HeartContained />);
  };

  const [cartItem, setCartItem] = useState(null);
  const breakfast = item?.poster;

  const imageWidth = wp(100);
  const imageHeight = hp(40);

  const {
    open: isOrderModal,
    openModal: openOrderModal,
    closeModal: closeOrderModal,
  } = useModal();

  // Function to handle adding an item to the cart
  const handleAddToCart = (selectedItem: any) => {
    setCartItem(selectedItem);
    openOrderModal();
  };

  return (
    <ScrollView style={styles().container}>
      <View style={styles().img}>
        {object?.poster || breakfast ? (
          React.cloneElement(object?.poster || breakfast, {
            width: imageWidth,
            height: imageHeight,
          })
        ) : (
          <FoodMeal1 />
        )}
        <View style={styles().rating}>
          <Text style={styles().rate}>4.5</Text>
          <StarIcon />
        </View>
        <TouchableOpacity
          style={styles().back}
          onPress={() => navigation.navigate(SCREEN.HOME)}>
          <BackArrow />
        </TouchableOpacity>
        <View style={styles().foodName}>
          <Text style={styles().name}>
            {object?.name?.slice(0, 10) || item?.title
              ? object?.name || item?.title
              : 'Fried Rice'}
          </Text>
          <TouchableOpacity style={styles().heart} onPress={likeFnBtn}>
            {like ? (
              React.cloneElement(like, {width: wp(10), height: hp(4)})
            ) : (
              <HeartOutlined width={wp(10)} height={hp(4)} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles().insideContainer}>
        <Spacer height={hp(2)} />
        <View style={styles().info}>
          <View>
            <Text style={styles().desc}>Description</Text>
            <Text style={styles().desc2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              aspernatur eum ex provident fugit mollitia officiis molestiae? Ab,
              voluptates architecto.
            </Text>
          </View>
          {item ? (
            <Text style={styles().price}>${item.price}</Text>
          ) : (
            <View>
              <Text style={styles().value}>Nutritional Value</Text>
              {NUTRATION_DATA.map((e, i) => (
                <View style={styles().nutrate} key={i}>
                  <Text style={styles().vlaue1}>{e.nutrat}</Text>
                  <Text style={styles().vlaue2}>{e.value}g</Text>
                </View>
              ))}
              <Spacer />
              <View style={styles().totalCol}>
                <Text style={styles().total}>145 col</Text>
                <Text style={styles().totalValue}>Daily value</Text>
              </View>
            </View>
          )}
        </View>
        <Ingredients />
        <Spacer />
        <UserDropdown
          openOrderModal={() => handleAddToCart(item)}
          item={item}
          object={object}
        />
      </View>

      {isOrderModal && (
        <OrderModal
          open={isOrderModal}
          onClose={closeOrderModal}
          item={cartItem}
          objectArray={object}
        />
      )}
    </ScrollView>
  );
};

export default CartScreen;
