import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, hp, wp} from '@enums';
import {AddToCart} from '@assets';
import {OrderModal} from '@commons';

const UserDropdown = (props: any) => {
  const {item,object} = props || {};
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Poineer');
  const options = ['Poineer', 'Chinese', 'Japanese'];
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = value => {
    setSelectedValue(value);
    setIsDropdownOpen(false);
  };

  const handleLessZero = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    setIsModalOpen(true);
    if (item || object) {
      const newItem = {
        id: item?.id || object?.id,
        title: item?.title || object?.name,
        price: item?.price || object?.price,
        quantity: quantity,
        category: selectedValue || object?.type,
        poster: item?.poster || object?.poster,
      };

      setCartItems(prevItems => [...prevItems, newItem]);
      setIsModalOpen(true);
    }
  };

  return (
    <View>
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Text style={styles.add}>Addition</Text>
          <Text style={styles.buttonText}>
            <Text style={styles.select}>{selectedValue}</Text>
          </Text>
        </TouchableOpacity>

        {isDropdownOpen && (
          <ScrollView>
            <FlatList
              data={options}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        )}

        <View style={styles.counter}>
          <Text style={styles.button}>${item?.price * quantity || object?.price * quantity || 40}</Text>
          <View style={styles.count}>
            <TouchableOpacity onPress={handleLessZero}>
              <Text style={styles.button}>-</Text>
            </TouchableOpacity>
            <Text style={styles.button}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.button}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.cart} onPress={handleAddToCart}>
            <AddToCart />
          </TouchableOpacity>
        </View>
      </View>

      {/* Order Modal */}
      <OrderModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={cartItems}
      />
    </View>
  );
};

export default UserDropdown;

const styles = StyleSheet.create({
  container2: {
    width: wp(100),
    marginTop: hp(2),
  },
  dropdownButton: {
    padding: hp(2),
    borderRadius: 4,
  },
  buttonText: {
    padding: hp(0.5),
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  dropdownItem: {
    padding: hp(1),
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    marginBottom: wp(1),
    width: wp(90),
    justifyContent: 'center',
    margin: 'auto',
  },
  itemText: {
    fontSize: 16,
  },
  select: {
    fontSize: 16,
    fontWeight: '300',
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: hp(1),
    backgroundColor: COLORS.primary,
    width: wp(90),
    margin: 'auto',
    borderRadius: 30,
    alignItems: 'center',
  },
  count: {
    flexDirection: 'row',
    width: wp(40),
    justifyContent: 'space-around',
    margin: 'auto',
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 30,
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.white,
    padding: hp(0.5),
  },
  cart: {
    padding: hp(0.5),
    backgroundColor: COLORS.white,
    borderRadius: 50,
  },
  add: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '600',
    padding: hp(0.5),
  },
});
