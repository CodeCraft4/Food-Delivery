import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {ArrowLeft, FavoriteIcon, PlusIcons} from '@assets';
import {AddBookMarkModal, Spacer} from '@commons';
import {hp, SCREEN, wp} from '@enums';
import {useNavigation} from '@react-navigation/native';
import {useModal} from '@hooks';

const BookMarks = () => {
  const navigation = useNavigation();
  const {
    open: isBookmarkModal,
    closeModal: closeBookmarkModa,
    openModal: openBookmarkModal,
  } = useModal();
  return (
    <View style={styles().container}>
      <View style={styles().personal}>
        <TouchableOpacity
          style={styles().personal}
          onPress={() => navigation.navigate(SCREEN.PROFILE)}>
          <ArrowLeft />
          <Spacer width={wp(3)} />
          <Text style={styles().title}>All bookmarks</Text>
        </TouchableOpacity>
      </View>
      <View style={styles().container2}>
        <View style={styles().shown}>
          <FavoriteIcon />
          <Text>Nothing here yet...</Text>
        </View>
        <Spacer />
        <Text>Add you favorite places</Text>
        <Spacer height={hp(6)} />
        <TouchableOpacity style={styles().add} onPress={openBookmarkModal}>
          <PlusIcons />
          <Spacer />
          <Text style={styles().text}>Add Places</Text>
        </TouchableOpacity>
      </View>

      {isBookmarkModal && (
        <AddBookMarkModal open={isBookmarkModal} onClose={closeBookmarkModa} />
      )}
    </View>
  );
};

export default BookMarks;
