import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Styles from './Styles';
import CheckBox from '@react-native-community/checkbox';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import ModalDropdown from 'react-native-modal-dropdown';

class FilterWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      adult: false,
      children: false,
      elderly: false,
      animals: false,
      ecology: false,
      language: '',
    };
  }
  handleChangeFlag = (selectedOption) => {
    this.setState({ language: selectedOption });
  };
  selectAll = (newValue) => {
    const { counter } = this.props;
    if (newValue === true) {
      this.props.selectCounter(counter + 1);
      this.setState({ all: newValue });
    } else {
      this.props.selectCounter(counter - 1);
      this.setState({ all: newValue });
    }
  };
  selectAdult = (newValue) => {
    const { counter } = this.props;
    if (newValue === true) {
      this.props.selectCounter(counter + 1);
      this.setState({ adult: newValue });
    } else {
      this.props.selectCounter(counter - 1);
      this.setState({ adult: newValue });
    }
  };
  selectChildren = (newValue) => {
    const { counter } = this.props;
    if (newValue === true) {
      this.props.selectCounter(counter + 1);
      this.setState({ children: newValue });
    } else {
      this.props.selectCounter(counter - 1);
      this.setState({ children: newValue });
    }
  };

  selectElderly = (newValue) => {
    const { counter } = this.props;
    if (newValue === true) {
      this.props.selectCounter(counter + 1);
      this.setState({ elderly: newValue });
    } else {
      this.props.selectCounter(counter - 1);
      this.setState({ elderly: newValue });
    }
  };

  selectAnimal = (newValue) => {
    const { counter } = this.props;
    if (newValue === true) {
      this.props.selectCounter(counter + 1);
      this.setState({ animals: newValue });
    } else {
      this.props.selectCounter(counter - 1);
      this.setState({ animals: newValue });
    }
  };

  selectEcology = (newValue) => {
    const { counter } = this.props;
    if (newValue === true) {
      this.props.selectCounter(counter + 1);
      this.setState({ ecology: newValue });
    } else {
      this.props.selectCounter(counter - 1);
      this.setState({ ecology: newValue });
    }
  };

  render() {
    const { all, adult, children, elderly, animals, ecology, language } =
      this.state;
    const Language = ['Breakfast', 'Lunch', 'Dinner', 'Snaks'];
    return (
      <>
        <Modal isVisible={this.props.filterModel} style={Styles.modelContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: 'transparent',
              height: 150,
            }}></TouchableOpacity>
          <View style={Styles.modelContainerWrapper}>
            <View style={Styles.mainWrapper}>
              <View style={Styles.mainHeader}>
                <View />
                <Text style={Styles.headerText}>{'Filters'}</Text>
                <TouchableOpacity onPress={this.props.onclose}>
                  <Text style={Styles.cancelText}>{'Cancel'}</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.separator} />

              <Text style={Styles.mainContentText}>{'Regions projects'}</Text>
              <View style={Styles.dropDownWrapper}>
                <ModalDropdown
                  style={{
                    width: '90%',
                    paddingLeft: 12,
                    alignSelf: 'center',
                    paddingVertical: 10,
                    backgroundColor: '#fff',
                    // marginTop: 15,
                    borderRadius: 7,
                    borderWidth: 0,
                    // height: 100,
                  }}
                  defaultValue={'Netherland'}
                  textStyle={{
                    fontSize: 15,
                    fontWeight: '400',
                    textAlign: 'left',
                    color: 'black',
                  }}
                  dropdownTextStyle={{
                    fontSize: 15,
                    fontWeight: '400',
                    color: '#000',
                  }}
                  dropdownStyle={{
                    width: '80%',
                    marginLeft: -10,
                    marginTop: 3,
                    borderWidth: 0,
                    borderColor: '#e0e4e5',
                    maxHeight: 70,
                  }}
                  onSelect={(index, value) => this.handleChangeFlag(value)}
                  options={Language}
                />
                <Image
                  style={{ width: 20, height: 20, marginTop: 10 }}
                  source={Images.down}
                />
              </View>

              <Text style={Styles.mainContentText}>{'Сategory'}</Text>
              {/* All */}
              <View style={Styles.categoryContent}>
                <CheckBox
                  disabled={false}
                  boxType="square"
                  onCheckColor={Colors.appHeaderColor}
                  onTintColor={Colors.appHeaderColor}
                  tintColor={'#DADFE6'}
                  value={all}
                  style={{
                    marginTop: 5,
                    width: 20,
                    height: 20,
                  }}
                  onValueChange={(newValue) => this.selectAll(newValue)}
                />
                <Text style={Styles.checkBoxText}>{'All Projects'}</Text>
              </View>
              {/* Adults */}
              <View style={Styles.categoryContent}>
                <CheckBox
                  disabled={false}
                  boxType="square"
                  onCheckColor={Colors.appHeaderColor}
                  onTintColor={Colors.appHeaderColor}
                  tintColor={'#DADFE6'}
                  value={adult}
                  style={{
                    marginTop: 5,
                    width: 20,
                    height: 20,
                  }}
                  onValueChange={(newValue) => this.selectAdult(newValue)}
                />
                <Text style={Styles.checkBoxText}>{'Adults'}</Text>
              </View>
              {/* Children */}
              <View style={Styles.categoryContent}>
                <CheckBox
                  disabled={false}
                  boxType="square"
                  onCheckColor={Colors.appHeaderColor}
                  onTintColor={Colors.appHeaderColor}
                  tintColor={'#DADFE6'}
                  value={children}
                  style={{
                    marginTop: 5,
                    width: 20,
                    height: 20,
                  }}
                  onValueChange={(newValue) => this.selectChildren(newValue)}
                />
                <Text style={Styles.checkBoxText}>{'Children'}</Text>
              </View>
              {/* Elderly */}
              <View style={Styles.categoryContent}>
                <CheckBox
                  disabled={false}
                  boxType="square"
                  onCheckColor={Colors.appHeaderColor}
                  onTintColor={Colors.appHeaderColor}
                  tintColor={'#DADFE6'}
                  value={elderly}
                  style={{
                    marginTop: 5,
                    width: 20,
                    height: 20,
                  }}
                  onValueChange={(newValue) => this.selectElderly(newValue)}
                />
                <Text style={Styles.checkBoxText}>{'Elderly'}</Text>
              </View>
              {/* Animals */}
              <View style={Styles.categoryContent}>
                <CheckBox
                  disabled={false}
                  boxType="square"
                  onCheckColor={Colors.appHeaderColor}
                  onTintColor={Colors.appHeaderColor}
                  tintColor={'#DADFE6'}
                  value={animals}
                  style={{
                    marginTop: 5,
                    width: 20,
                    height: 20,
                  }}
                  onValueChange={(newValue) => this.selectAnimal(newValue)}
                />
                <Text style={Styles.checkBoxText}>{'Animals'}</Text>
              </View>
              {/* Ecology */}
              <View style={Styles.categoryContent}>
                <CheckBox
                  disabled={false}
                  boxType="square"
                  onCheckColor={Colors.appHeaderColor}
                  onTintColor={Colors.appHeaderColor}
                  tintColor={'#DADFE6'}
                  value={ecology}
                  style={{
                    marginTop: 5,
                    width: 20,
                    height: 20,
                  }}
                  onValueChange={(newValue) => this.selectEcology(newValue)}
                />
                <Text style={Styles.checkBoxText}>{'Ecology'}</Text>
              </View>
              {/* End */}
              <View style={Styles.separator1} />

              {/* Bottom Button */}
              <View style={Styles.bottomButtonWrapper}>
                {/* Download */}
                <TouchableOpacity style={Styles.buttonWrapper1}>
                  <Text style={Styles.buttonText1}>{'Reset'}</Text>
                </TouchableOpacity>
                {/* Donate */}
                <TouchableOpacity style={Styles.donateButton}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.donateText}>{'Show 20 projects'}</Text>
                    <Image
                      source={Images.right}
                      style={Styles.rightArrowStyle}
                    />
                  </View>
                </TouchableOpacity>
                {/* Ends */}
              </View>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}
export default FilterWrapper;
