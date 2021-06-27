import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Share,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import * as Progress from 'react-native-progress';
import Styles from './Styles';
import { SliderBox } from 'react-native-image-slider-box';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';

const widthScreen = Dimensions.get('window').width;

class ProductDescriptionAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allImages: [Images.image1, Images.Image2, Images.image1],
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
      ],
      openFilter: false,
      tabValue: 1,
    };
  }
  onShare = async () => {
    try {
      const result = await Share.share({
        message: `Donate with me to ${Constants.ABOUT_TITILE}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  selectTabs = (value) => {
    this.setState({ tabValue: value });
  };
  getScrollData = () => {
    if (this.state.tabValue == 2) {
      this.setState({ animatedData: !this.state.animatedData });
      this.props.navigation.navigate('ProductDescriptionView', {
        selectedIndex: 2,
      });
    }
  };
  brackerList = (data, index) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row' }}>
            {data.logoName !== '' ? (
              <View style={Styles.mainProfileWrapper}>
                <Text style={Styles.textWrapper}>{data.logoName}</Text>
              </View>
            ) : (
              <Image source={data.logo} style={Styles.mainProfileWrapper1} />
            )}

            <Text style={Styles.titleText}>{data.name}</Text>
          </View>
          <Text style={Styles.textWrapperHours}>{data.hours}</Text>
        </View>
      </>
    );
  };
  render() {
    const { allImages, tabValue, product } = this.state;
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView
            style={Styles.safeViewStyle}
            forceInset={{ bottom: 'never', top: 'never' }}>
            <ScrollView scrollEnabled={false}>
              <View style={{
                marginBottom: -80,
                zIndex: 1,
              }}>
                <View style={Styles.backContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('main');
                    }}>
                    <Image
                      source={Images.backIcon}
                      style={Styles.indecatorStyle}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <SliderBox
                images={allImages}
                sliderBoxHeight={250}
                inactiveDotColor={Colors.White}
                dotColor={Colors.appHeaderColor}
                onCurrentImagePressed={(index) =>
                  console.warn(`image ${index} pressed`)
                }
                autoplay
                activeOpacity={0.5}
                dotStyle={{
                  width: 15,
                  height: 15,
                  borderRadius: 15,
                  // marginVertical: -50,
                  marginHorizontal: 0,
                  padding: 0,
                  margin: 20,
                }}
              />
              <View style={Styles.mainContainer}>
                <View style={Styles.mainContainerWrapper}>
                  <Text style={Styles.headerText}>
                    {Constants.ABOUT_TITILE}
                  </Text>
                  {/* Show Data */}
                  <View style={Styles.dataContentWrapper}>
                    <View style={Styles.mainWrapper}>
                      <Text style={Styles.description1}>
                        {Constants.DESCRIPTION_ABOUT1}
                      </Text>
                      <Text style={Styles.description2}>
                        {Constants.DESCRIPTION_ABOUT2}
                      </Text>
                      <Text style={Styles.description3}>
                        {Constants.DESCRIPTION_ABOUT3}
                      </Text>
                    </View>
                    <View style={Styles.mainWrapper}>
                      <Text style={Styles.description2}>
                        {Constants.DESCRIPTION_ABOUT4}
                      </Text>
                      <Text style={Styles.description3}>
                        {Constants.DESCRIPTION_ABOUT5}
                      </Text>
                    </View>
                  </View>
                  {/* End */}
                  <Progress.Bar
                    progress={0.3}
                    width={widthScreen / 1.13}
                    height={8}
                    borderRadius={15}
                    borderWidth={0}
                    color={'#4B97FC'}
                    unfilledColor={'#E3F0FC'}
                  />
                  <View style={Styles.dataContentWrapper1}>
                    {/* 1 */}
                    <View style={Styles.mainWrapper}>
                      <Image source={Images.start} style={Styles.startStyle} />
                      <View>
                        <View
                          style={[
                            Styles.mainWrapper,
                            { marginTop: 15, marginLeft: -10 },
                          ]}>
                          <Text style={Styles.description4}>{'6'}</Text>
                          <Text style={Styles.description5}>{'July'}</Text>
                        </View>
                        <Text style={Styles.descriptionBottom}>
                          {'Started'}
                        </Text>
                      </View>
                    </View>
                    {/* 2 */}
                    <View style={Styles.mainWrapper}>
                      <Image
                        source={Images.time}
                        style={[Styles.startStyle, { marginTop: 5 }]}
                      />
                      <View>
                        <View
                          style={[
                            Styles.mainWrapper,
                            { marginTop: 15, marginLeft: -10 },
                          ]}>
                          <Text style={Styles.description4}>{'26'}</Text>
                          <Text style={Styles.description5}>{'days'}</Text>
                        </View>
                        <Text style={Styles.descriptionBottom}>{'Left'}</Text>
                      </View>
                    </View>
                    {/* 3 */}
                    <View style={Styles.mainWrapper}>
                      <Image source={Images.heart} style={Styles.startStyle} />
                      <View>
                        <View
                          style={[
                            Styles.mainWrapper,
                            { marginTop: 15, marginLeft: -10 },
                          ]}>
                          <Text style={Styles.description4}>{'6'}</Text>
                        </View>
                        <Text style={Styles.descriptionBottom}>
                          {'Supported'}
                        </Text>
                      </View>
                    </View>
                    {/* End */}
                  </View>
                  {/* About Wrapper Ends */}

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
                              tabValue === 3
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
              {tabValue === 1 ? (
                <View style={Styles.aboutBottomWrapper}>
                  <Text style={Styles.aboutDetailsText}>
                    {Constants.ABOUT_DETAILS}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('ProductDescriptionView', {
                        selectedIndex: 1,
                      });
                    }}>
                    <Text style={Styles.aboutDetailsText1}>
                      {Constants.READ_MORE}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : tabValue === 2 ? (
                <ScrollView onScrollBeginDrag={this.getScrollData}>
                  <View style={Styles.mainDescriptionWrapper}>
                    {product.length > 0 &&
                      product.map((data) => {
                        return (
                          <>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                justifyContent: 'space-between',
                              }}>
                              <View style={{ flexDirection: 'row' }}>
                                {data.logoName !== '' ? (
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

                                <Text style={Styles.titleText}>
                                  {data.name}
                                </Text>
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
                <View style={Styles.mainDescriptionWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('ProductDescriptionView', {
                        selectedIndex: 3,
                      });
                    }}>
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
                  </TouchableOpacity>
                </View>
              )}
              {/* </View> */}
            </ScrollView>
            <View style={Styles.bottomWrapper44}>
              <View style={Styles.bottomButtonWrapper}>
                {/* Share */}
                <TouchableOpacity
                  style={Styles.downloadButton}
                  onPress={this.onShare}>
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
                    <Text style={Styles.donateText}>{'Donate'}</Text>
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
export default ProductDescriptionAbout;
