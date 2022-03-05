import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {ArrowLeft, ChevronLeft} from 'react-native-feather';
import {Rating} from 'react-native-ratings';
import InputBox from '../components/InputBox';
import Svg, {Path} from 'react-native-svg';

export default function BookingDetails({route, navigation}) {
  const [selected, setSelected] = useState('info');
  return (
    <View
      style={{
        flex: 1,
        minHeight: Dimensions.get('window').height,
        backgroundColor: '#F2FBF8',
      }}>
      <View
        style={{
          marginVertical: 30,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={{alignItems: 'flex-start', width: '50%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BookingLists');
            }}
            style={{
              backgroundColor: '#ffffff',
              width: 45,
              height: 45,
              borderRadius: 10,
              marginBottom: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ChevronLeft
              stroke="#242424"
              fill="#fff"
              width={22}
              height={22}
              strokeWidth={2}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#242424',
              fontWeight: 'bold',
              fontSize: 25,
              marginBottom: 10,
            }}>
            Hammad Habib
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Rating
              ratingBackgroundColor="#B5C3C3"
              tintColor="#F2FBF8"
              ratingColor="#FFB743"
              type="custom"
              imageSize={16}
              readonly
            />
            <Text style={{color: '#959595', marginLeft: 5}}>5.0</Text>
          </View>
          <Text
            style={{
              backgroundColor: '#D3EBDF',
              color: '#258D51',
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 15,
            }}>
            Plumber
          </Text>
        </View>
        <View
          style={{
            width: '50%',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: '#38BA6E',
              width: 140,
              height: 140,
              borderRadius: 120,
              paddingTop: 5,
              paddingRight: 5,
            }}>
            <Image
              source={require('../assets/userPic.png')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 50,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 18,
          }}>
          <TouchableOpacity
            onPress={() => {
              setSelected('info');
            }}
            style={{
              width: 50,
              alignItems: 'center',
              borderBottomColor: '#258D51',
              borderBottomWidth: selected === 'info' ? 1 : 0,
              marginRight: 30,
            }}>
            <Text
              style={{
                color: selected === 'info' ? '#0A0A0A' : '#B5C3C3',
                fontSize: 16,
                fontWeight: selected === 'info' ? 'bold' : '400',
              }}>
              Info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected('review');
            }}
            style={{
              width: 70,
              alignItems: 'center',
              borderBottomColor: '#258D51',
              borderBottomWidth: selected === 'review' ? 1 : 0,
            }}>
            <Text
              style={{
                color: selected === 'review' ? '#0A0A0A' : '#B5C3C3',
                fontSize: 16,
                fontWeight: selected === 'review' ? 'bold' : '400',
              }}>
              Review
            </Text>
          </TouchableOpacity>
        </View>
        {selected === 'info' ? (
          <ScrollView style={{paddingHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={30.501}
                height={18.3}
                viewBox="0 0 30.501 18.3">
                <Path
                  data-name="Icon awesome-money-bill-alt"
                  d="M16.775 15.175h-.763v-4.194a.381.381 0 00-.381-.381h-.647a1.142 1.142 0 00-.634.192l-.731.487a.381.381 0 00-.106.529l.423.634a.381.381 0 00.529.106l.022-.015v2.642h-.763a.381.381 0 00-.381.381v.763a.381.381 0 00.381.381h3.05a.381.381 0 00.381-.381v-.763a.381.381 0 00-.38-.381zM28.976 4.5H1.525A1.525 1.525 0 000 6.025v15.25A1.525 1.525 0 001.525 22.8h27.451a1.525 1.525 0 001.524-1.525V6.025A1.525 1.525 0 0028.976 4.5zM2.288 20.513v-3.05a3.05 3.05 0 013.05 3.05zm0-10.675v-3.05h3.05a3.05 3.05 0 01-3.05 3.05zm12.963 9.15c-2.527 0-4.575-2.39-4.575-5.338s2.048-5.338 4.575-5.338 4.575 2.39 4.575 5.338-2.05 5.338-4.576 5.338zm12.963 1.525h-3.05a3.05 3.05 0 013.05-3.05zm0-10.675a3.05 3.05 0 01-3.05-3.05h3.05z"
                  transform="translate(0 -4.5)"
                  fill="#38ba6e"
                />
              </Svg>
              <Text
                style={{
                  color: '#959595',
                  marginRight: 20,
                  fontSize: 12,
                  marginLeft: 10,
                }}>
                $20/hour
              </Text>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20.166}
                height={19.158}
                viewBox="0 0 20.166 19.158">
                <Path
                  data-name="Icon material-work"
                  d="M21.15 7.033h-4.034V5.017A2.01 2.01 0 0015.1 3h-4.034A2.01 2.01 0 009.05 5.017v2.016H5.017A2 2 0 003.01 9.05L3 20.141a2.01 2.01 0 002.017 2.017H21.15a2.01 2.01 0 002.017-2.017V9.05a2.01 2.01 0 00-2.017-2.017zm-6.05 0h-4.034V5.017H15.1z"
                  transform="translate(-3 -3)"
                  fill="#38ba6e"
                />
              </Svg>
              <Text style={{color: '#959595', fontSize: 12, marginLeft: 10}}>
                28 completed / 10 pending
              </Text>
            </View>
            <Text
              style={{
                color: '#242424',
                fontSize: 16,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              Summary
            </Text>
            <Text style={{color: '#8D8C8C', fontSize: 14}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.esetting,
              remaining essentially unchanged.
            </Text>
          </ScrollView>
        ) : (
          <ScrollView style={{paddingHorizontal: 20}}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </ScrollView>
        )}
        <View style={{paddingHorizontal: 20, marginBottom: 30}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFB743',

              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 45,
              borderRadius: 10,
            }}>
            <Text style={{color: '#ffffff'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function ReviewCard({}) {
  return (
    <View
      style={{
        backgroundColor: '#F2FBF8',
        padding: 20,
        width: '100%',
        borderRadius: 10,
        marginBottom: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Image
          source={require('../assets/userPic.png')}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
        />
        <View
          style={{
            marginLeft: 10,
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              color: '#242424',
              fontSize: 16,
              fontWeight: '500',
            }}>
            Adams Gills
          </Text>
          <Rating
            ratingBackgroundColor="#B5C3C3"
            tintColor="#F2FBF8"
            ratingColor="#38BA6E"
            type="custom"
            imageSize={16}
            readonly
          />
        </View>
      </View>
      <Text
        style={{
          color: '#5A5A5A',
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type
      </Text>
    </View>
  );
}
