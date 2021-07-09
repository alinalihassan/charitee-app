/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { MaterialIcons } from '@expo/vector-icons';
import React, { Dispatch, SetStateAction } from 'react';

import {
  View, TouchableOpacity, Text, Dimensions, StyleSheet, SafeAreaView, FlatList, Pressable,
} from 'react-native';
import Modal from 'react-native-modal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Colors from '../Styles/Colors';
import { Theme } from '../Utils/Interfaces';

type FilterModalProps = {
  visible: boolean,
  setVisibility: Dispatch<SetStateAction<boolean>>,
  themes: CheckedTheme[],
  setThemes: Dispatch<SetStateAction<CheckedTheme[]>>
}

interface CheckedTheme extends Theme {
  checked: boolean;
}

const FilterModal = ({
  visible, setVisibility, themes, setThemes,
}: FilterModalProps) => {
  const initialThemes = JSON.parse(JSON.stringify(themes));

  const setCheckedTheme = (item: CheckedTheme) => {
    const objIndex = themes.findIndex(((obj) => obj.id === item.id));
    themes[objIndex].checked = !themes[objIndex].checked;
    setThemes(themes);
  };

  const renderItem = ({ item }: {item: CheckedTheme}) => (
    <BouncyCheckbox
      size={25}
      fillColor={Colors.appHeaderColor}
      style={styles.categoryContent}
      unfillColor="#FFFFFF"
      text={item.name}
      textStyle={[{
        textDecorationLine: 'none',
      }, styles.checkBoxText]}
      textContainerStyle={{}}
      isChecked={item.checked}
      iconStyle={{ borderColor: Colors.appHeaderColor }}
      onPress={() => setCheckedTheme(item)}
    />
  );

  return (
    <Modal
      onSwipeComplete={() => setVisibility(false)}
      swipeDirection="down"
      propagateSwipe
      isVisible={visible}
      style={styles.modelContainer}
    >
      <TouchableOpacity
        style={{
          backgroundColor: 'transparent',
          height: 100,
        }}
        onPress={() => setVisibility(false)}
      />
      <View style={styles.modelContainerWrapper}>
        <View style={styles.mainHeader}>
          <View />
          <Text style={styles.headerText}>Filters</Text>
          <TouchableOpacity onPress={() => {
            setThemes(initialThemes);
            setVisibility(false);
          }}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.mainContentText}>Regions</Text>
        {/* Add Regions/Countries Dropdown here */}
        <Text style={styles.mainContentText}>Category</Text>
        <FlatList
          showsVerticalScrollIndicator
          style={styles.categoryList}
          data={themes}
          renderItem={renderItem}
          keyExtractor={(theme) => theme.id}
        />

        <SafeAreaView style={styles.bottomButtonWrapper}>
          <TouchableOpacity
            onPress={() => {
              themes.forEach((theme) => theme.checked = false);
              setVisibility(false);
            }}
            style={styles.resetFilterButton}
          >
            <Text style={styles.resetFilterText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.applyFilterButton}
            onPress={() => setVisibility(false)}
          >
            <Text style={styles.applyFilterText}>Show 20 projects</Text>
            <MaterialIcons name="chevron-right" size={24} color="white" style={styles.rightArrowStyle} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  modelContainer: {
    height: '100%',
    margin: 0,
  },
  modelContainerWrapper: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    height: Dimensions.get('screen').height - 100,
  },
  mainHeader: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  cancelText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#4890F0',
    marginTop: 4,
  },
  mainContentText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#6D7E92',
    marginTop: 32,
    marginBottom: 8,
  },
  categoryContent: {
    paddingLeft: 8,
    padding: 16,
  },
  categoryList: {
    marginBottom: 114,
  },
  checkBoxText: {
    color: '#05263D',
    fontSize: 18,
    fontWeight: '500',
  },
  applyFilterButton: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    height: 48,
    width: widthScreen * 0.65 - 24,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 16,
    marginLeft: 8,
  },
  resetFilterButton: {
    width: widthScreen * 0.35 - 16,
    height: 48,
    paddingHorizontal: 24,
    backgroundColor: '#FFEAF0',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    borderRadius: 12,
    marginLeft: 16,
  },
  resetFilterText: {
    color: Colors.appHeaderColor,
    fontSize: 16,
    fontWeight: '500',
  },
  applyFilterText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonWrapper: {
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    width: widthScreen,
    backgroundColor: 'white',
  },
  rightArrowStyle: {
    marginTop: 2,
  },
});

export default FilterModal;
