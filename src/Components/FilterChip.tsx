import React, { Component } from 'react';
import {
  Text, StyleSheet, TouchableOpacity, GestureResponderEvent,
} from 'react-native';
import Colors from '../Styles/Colors';

type FilterChipProps = {
  title: string,
  selected: boolean,
  onPress: (event: GestureResponderEvent) => void
}

const FilterChip = ({ title, selected, onPress }: FilterChipProps) => (
  <TouchableOpacity
    style={[
      styles.buttonWrapper,
      {
        backgroundColor:
            selected ? Colors.appHeaderColor : '#FFEAF0',
      },
    ]}
    onPress={onPress}
  >
    <Text
      style={[
        styles.buttonText,
        {
          color:
              selected ? Colors.White : Colors.appHeaderColor,
        },
      ]}
    >
      { title }
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 14,
  },
});

export default FilterChip;
