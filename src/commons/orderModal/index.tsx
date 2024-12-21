import React from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AddToCart, CloseArrow, FoodMeal1} from '@assets';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {CommonButtons} from '../button';
import {Spacer} from '../spacer';
import {useNavigation} from '@react-navigation/native';

export const OrderModal = ({open, onClose, items}: any) => {
  const navigation = useNavigation();
  const deliveryCharge = 45;
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const grandTotal = totalPrice + deliveryCharge;

  return (
    <Modal visible={open} onRequestClose={onClose} animationType="slide">
      <View style={styles.bgImg}>
        <FoodMeal1 />
      </View>
      <ScrollView style={styles.insideContainer}>
        <Spacer />
        <View style={styles.header}>
          <TouchableOpacity style={styles.order}>
            <Text style={styles.title}>Your Order</Text>
            <AddToCart />
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <CloseArrow />
          </TouchableOpacity>
        </View>

        <Spacer height={hp(2)} />

        {/* Map through the array of items */}
        {items.map((item, index) => (
          <View key={index} style={styles.orderMap}>
            <View style={styles.leftSide}>
              {item?.poster &&
                React.cloneElement(item.poster, {width: 70, height: 70})}
              <View style={styles.result}>
                <View>
                  <Text style={styles.name}>{item?.title.slice(0, 20)}</Text>
                  <Text>{item?.category}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.price}>${item?.price * item.quantity}</Text>
          </View>
        ))}

        <Spacer height={hp(4)} />

        <View style={styles.promoCode}>
          <TextInput
            placeholder="   Enter promo code"
            style={styles.input}
            keyboardType="number-pad"
          />
          <View style={styles.apply}>
            <CommonButtons title="Apply" bgcolor={COLORS.primary} />
          </View>
        </View>
        <Spacer height={hp(4)} />

        {/* Display total price and delivery charge */}
        <View style={styles.totalPrice}>
          <View style={styles.result}>
            <Text style={styles.resutlTitle}>Subtotal</Text>
            <Text style={styles.resutlTitle}>${totalPrice}</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.resutlTitle}>Delivery</Text>
            <Text style={styles.resutlTitle}>${deliveryCharge}</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>${grandTotal}</Text>
          </View>
        </View>

        <Spacer height={hp(2)} />
        <View style={styles.pay}>
          <CommonButtons
            title="Payment"
            bgcolor={COLORS.primary}
            onPress={() => navigation.navigate(SCREEN.PAYMENTS)}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

// Styles remain the same as your original code.
const styles = StyleSheet.create({
  insideContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: COLORS.white,
    padding: wp(3),
    position: 'absolute',
    top: hp(20),
    height: hp(100),
    width: wp(100),
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(2),
  },
  order: {
    flexDirection: 'row',
    gap: wp(6),
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.black,
  },
  bgImg: {
    opacity: 0.7,
    backgroundColor: COLORS.black,
  },
  orderMap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1),
    width: wp(90),
    alignItems: 'center',
  },
  leftSide: {
    flexDirection: 'row',
    gap: wp(2),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '600',
  },
  promoCode: {
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: COLORS.gray,
    borderRadius: 30,
    elevation: 2,
    shadowColor: COLORS.lightGray,
    flex: 1,
  },
  price: {
    fontWeight: '800',
    color: COLORS.secondary,
    fontSize: 25,
  },
  input: {
    width: wp(60),
  },
  apply: {
    width: wp(35),
  },

  totalPrice: {
    height: hp(12),
    borderWidth: 0.4,
    borderColor: COLORS.gray,
    borderRadius: 20,
    padding: wp(4),
  },

  result: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resutlTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
  },
  total: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.black,
  },
  pay: {
    width: wp(35),
    marginTop: hp(2),
  },
});
