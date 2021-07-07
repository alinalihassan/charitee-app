import { MaterialIcons } from '@expo/vector-icons';
import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';

import {
  View, TouchableOpacity, Text, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView, FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import { Checkbox } from 'react-native-paper';
import Colors from '../Styles/Colors';
import Images from '../Styles/Images';
import { ManyDataResponse, Theme } from '../Utils/Interfaces';

type FilterModalProps = {
  visible: boolean,
  setVisibility: Dispatch<SetStateAction<boolean>>,
}

const FilterModal = ({ visible, setVisibility }: FilterModalProps) => {
  const [themes, setThemes] = useState<Theme[]>([]);

  useEffect(() => {
    fetch('https://www.charit.ee/api/themes')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<ManyDataResponse<Theme>>;
      })
      .then((json) => {
        setThemes(json.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }: {item: Theme}) => (
    <View key={item.id} style={styles.categoryContent}>
      <Checkbox
        color={Colors.appHeaderColor}
        status="checked"
      />
      <Text style={styles.checkBoxText}>{item.name}</Text>
    </View>
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
          <TouchableOpacity onPress={() => setVisibility(false)}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.mainContentText}>Regions</Text>
        {/* Add Regions/Countries Dropdown here */}
        <Text style={styles.mainContentText}>Category</Text>
        <FlatList
          showsVerticalScrollIndicator
          data={themes}
          renderItem={renderItem}
          keyExtractor={(theme) => theme.id}
        />
        {/* <ScrollView>
          {themes.map((theme) => (
            <View key={theme.id} style={styles.categoryContent}>
              <Checkbox
                color={Colors.appHeaderColor}
                status="checked"
              />
              <Text style={styles.checkBoxText}>{theme.name}</Text>
            </View>
          ))}
        </ScrollView> */}

        <SafeAreaView style={styles.bottomButtonWrapper}>
          <TouchableOpacity
            onPress={() => setVisibility(false)}
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
    marginTop: 30,
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkBoxText: {
    color: '#05263D',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 16,
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
