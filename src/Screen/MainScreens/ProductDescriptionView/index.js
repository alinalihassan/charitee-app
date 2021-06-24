import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import Styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

class ProductDescriptionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      tabValue: 1,
      product: [
        {
          name: 'Anastasia Khairova',
          logo: Images.Avatar,
          hours: '2 hours ago',
          logoName: '',
        },
        {
          name: 'Alexandra Lamina',
          logo: Images.Avatar,
          hours: '5 hours ago',
          logoName: 'A2',
        },
        {
          name: 'Ирина Заиченко',
          logo: Images.Avatar,
          hours: '2 hours ago',
          logoName: '',
        },
        {
          name: 'Andrews Tomatoes',
          logo: Images.Avatar1,
          logoName: '',
          hours: '4 hours ago',
        },
        {
          name: 'Ирина Заиченко',
          logo: Images.Avatar1,
          logoName: 'AK',
          hours: '1 hours ago',
        },
        {
          name: 'Andrews Tomatoes',
          logo: Images.Avatar1,
          hours: '10 hours ago',
          logoName: '',
        },
        {
          name: 'Ирина Заиченко',
          logo: Images.Avatar1,
          hours: '8 hours ago',
          logoName: 'A2',
        },
        {
          name: 'Andrews Tomatoes',
          logo: Images.Avatar1,
          logoName: '',
          hours: '4 hours ago',
        },
        {
          name: 'Ирина Заиченко',
          logo: Images.Avatar1,
          logoName: 'AK',
          hours: '1 hours ago',
        },
        {
          name: 'Andrews Tomatoes',
          logo: Images.Avatar1,
          hours: '10 hours ago',
          logoName: '',
        },
        {
          name: 'Ирина Заиченко',
          logo: Images.Avatar1,
          hours: '8 hours ago',
          logoName: 'A2',
        },
        {
          name: 'Andrews Tomatoes',
          logo: Images.Avatar1,
          logoName: '',
          hours: '4 hours ago',
        },
        {
          name: 'Ирина Заиченко',
          logo: Images.Avatar1,
          logoName: 'AK',
          hours: '1 hours ago',
        },
        {
          name: 'Andrews Tomatoes',
          logo: Images.Avatar1,
          hours: '10 hours ago',
          logoName: '',
        },
        {
          name: 'Ирина Заиченко',
          logo: Images.Avatar1,
          hours: '8 hours ago',
          logoName: 'A2',
        },
      ],
    };
    this.moved = false;
  }
  selectTabs = (value) => {
    this.setState({ tabValue: value });
  };
  componentDidMount = () => {
    const selectedIndex = this.props.navigation.getParam('selectedIndex');
    this.setState({ tabValue: selectedIndex });
  };
  render() {
    const { tabValue, product } = this.state;
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle1} />
          <SafeAreaView
            style={Styles.safeViewStyle}
            forceInset={{ bottom: 'never' }}>
            <View style={Styles.mainHeader}>
              <View style={Styles.headerContainer}>
                <View style={Styles.mainHeader1}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('ProductDescriptionAbout');
                    }}>
                    <Image
                      source={Images.backIcon}
                      style={Styles.indecatorStyle}
                    />
                  </TouchableOpacity>
                  <Text style={Styles.donateText}>{'Oxygen for Varya'}</Text>
                  <Text style={Styles.donateText1}>{'ok'}</Text>
                </View>

                <View style={Styles.mainWrapperButton}>
                  {/* 1 */}
                  <TouchableOpacity
                    style={[
                      Styles.buttonWrapper,
                      {
                        backgroundColor:
                          tabValue == 1 ? Colors.appHeaderColor : '#FFEAF0',
                      },
                    ]}
                    onPress={() => {
                      this.selectTabs(1);
                    }}>
                    <Text
                      style={[
                        Styles.buttonText,
                        {
                          color:
                            tabValue == 1
                              ? Colors.White
                              : Colors.appHeaderColor,
                        },
                      ]}>
                      {'About'}
                    </Text>
                  </TouchableOpacity>
                  {/* 2 */}
                  <TouchableOpacity
                    style={[
                      Styles.buttonWrapper,
                      {
                        backgroundColor:
                          tabValue == 2 ? Colors.appHeaderColor : '#FFEAF0',
                      },
                    ]}
                    onPress={() => {
                      this.selectTabs(2);
                    }}>
                    <Text
                      style={[
                        Styles.buttonText,
                        {
                          color:
                            tabValue == 2
                              ? Colors.White
                              : Colors.appHeaderColor,
                        },
                      ]}>
                      {'Backers'}
                    </Text>
                  </TouchableOpacity>
                  {/* 3 */}
                  <TouchableOpacity
                    style={[
                      Styles.buttonWrapper,
                      {
                        backgroundColor:
                          tabValue == 3 ? Colors.appHeaderColor : '#FFEAF0',
                      },
                    ]}
                    onPress={() => {
                      this.selectTabs(3);
                    }}>
                    <Text
                      style={[
                        Styles.buttonText,
                        {
                          color:
                            tabValue == 3
                              ? Colors.White
                              : Colors.appHeaderColor,
                        },
                      ]}>
                      {'News'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {tabValue == 1 ? (
              <ScrollView>
                <View style={Styles.mainDescriptionWrapper}>
                  <Text style={Styles.aboutDetailsText}>
                    {Constants.PRODUCT_DESCRIPTION_1}
                  </Text>
                  <Text style={Styles.aboutDetailsText}>
                    {Constants.PRODUCT_DESCRIPTION_2}
                  </Text>

                  <Image source={Images.image1} style={Styles.mainImage} />

                  <Text style={Styles.aboutDetailsText}>
                    {Constants.PRODUCT_DESCRIPTION_3}
                  </Text>
                  <Text style={Styles.aboutDetailsText}>
                    {Constants.PRODUCT_DESCRIPTION_4}
                  </Text>

                  <Image source={Images.Image2} style={Styles.mainImage} />

                  <Text style={Styles.aboutDetailsText}>
                    {Constants.PRODUCT_DESCRIPTION_5}
                  </Text>
                  <Text style={Styles.aboutDetailsText}>
                    {Constants.PRODUCT_DESCRIPTION_6}
                  </Text>
                </View>
              </ScrollView>
            ) : tabValue == 2 ? (
              <ScrollView>
                <View style={Styles.mainDescriptionWrapper}>
                  {product.length > 0 &&
                    product.map((data) => {
                      return (
                        <>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 15,
                              justifyContent: 'space-between',
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                              {data.logoName != '' ? (
                                <View style={Styles.mainProfileWrapper}>
                                  <Text style={Styles.textWrapper}>
                                    {data.logoName}
                                  </Text>
                                </View>
                              ) : (
                                <Image
                                  source={data.logo}
                                  style={Styles.mainProfileWrapper1}
                                />
                              )}

                              <Text style={Styles.titleText}>{data.name}</Text>
                            </View>
                            <Text style={Styles.textWrapperHours}>
                              {data.hours}
                            </Text>
                          </View>
                        </>
                      );
                    })}
                </View>
              </ScrollView>
            ) : (
              <ScrollView>
                <View style={Styles.mainDescriptionWrapper}>
                  {/* 1 */}
                  <View style={Styles.cardWrapper}>
                    <View style={Styles.cardData}>
                      <Text style={Styles.description}>{'17.09.2020'}</Text>
                      <Text style={Styles.title}>
                        {'End of the year report'}
                      </Text>

                      <Text style={Styles.aboutDetailsText}>
                        {Constants.PRODUCT_DESCRIPTION_1}
                      </Text>
                      <Text style={Styles.aboutDetailsText}>
                        {Constants.PRODUCT_DESCRIPTION_2}
                      </Text>
                    </View>
                  </View>

                  {/* 2 */}
                  <View style={Styles.cardWrapper}>
                    <View style={Styles.cardData}>
                      <Text style={Styles.description}>{'17.09.2020'}</Text>
                      <Text style={Styles.title}>
                        {'New country expansion'}
                      </Text>

                      <Text style={Styles.aboutDetailsText}>
                        {Constants.PRODUCT_DESCRIPTION_1}
                      </Text>
                      <Text style={Styles.aboutDetailsText}>
                        {Constants.PRODUCT_DESCRIPTION_2}
                      </Text>
                      <Text style={Styles.aboutDetailsText}>
                        {Constants.PRODUCT_DESCRIPTION_3}
                      </Text>
                      <Text style={Styles.aboutDetailsText}>
                        {Constants.PRODUCT_DESCRIPTION_4}
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
            <View style={Styles.bottomWrapper44}>
              <View style={Styles.bottomButtonWrapper}>
                {/* Download */}
                <TouchableOpacity style={Styles.downloadButton}>
                  <Image
                    source={Images.download}
                    style={Styles.downloadStyle}
                  />
                </TouchableOpacity>
                {/* Donate */}
                <TouchableOpacity
                  style={Styles.donateButton}
                  onPress={() => {
                    this.props.navigation.navigate('Donate');
                  }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.donateText2}>{'Donate'}</Text>
                    <Image
                      source={Images.right}
                      style={Styles.rightArrowStyle}
                    />
                  </View>
                </TouchableOpacity>
                {/* Ends */}
              </View>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}

export default ProductDescriptionView;
