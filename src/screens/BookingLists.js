import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {
  Camera,
  ChevronLeft,
  Image as ImageIcon,
  MapPin,
} from 'react-native-feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import InputBox from '../components/InputBox';
import Svg, {G, Path} from 'react-native-svg';

function ProjectCard({noBtns, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BookingDetails');
      }}
      style={{
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
      }}>
      <View
        style={{
          width: 65,
          height: 65,
          padding: 4,
          backgroundColor: '#ffffff',
          borderRadius: 65,
          marginTop: -50,
        }}>
        <Image
          style={{width: '100%', height: '100%', borderRadius: 65}}
          source={require('../assets/userPic.png')}
        />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 14,
        }}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              height: 30,
              width: 100,
              backgroundColor: '#D3EBDF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginBottom: 6,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#258D51',
              }}>
              Plumber
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: '#212121',
              fontWeight: '700',
              marginBottom: 4,
            }}>
            Mehfooz Ali
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={85.448}
              height={14.117}
              viewBox="0 0 85.448 14.117">
              <G data-name="Group 3036" fill="#ffb743">
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                  transform="translate(-293.055 -361) translate(290.805 357.625)"
                />
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                  transform="translate(-293.055 -361) translate(308.567 357.625)"
                />
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                  transform="translate(-293.055 -361) translate(326.331 357.625)"
                />
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                  transform="translate(-293.055 -361) translate(344.094 357.625)"
                />
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M16.876 8.262h-4.992l-1.517-4.527a.55.55 0 00-1.032 0L7.819 8.262H2.793a.545.545 0 00-.543.538.4.4 0 00.01.092.522.522 0 00.227.383l4.1 2.891-1.571 4.583a.545.545 0 00.187.611.525.525 0 00.305.132.665.665 0 00.339-.122l4-2.854 4 2.854a.636.636 0 00.339.122.488.488 0 00.3-.132.538.538 0 00.187-.611l-1.575-4.578 4.069-2.918.1-.085a.519.519 0 00-.4-.906z"
                  transform="translate(-293.055 -361) translate(361.05 357.625)"
                />
              </G>
            </Svg>
            <Text style={{fontSize: 12, color: '#959595', marginLeft: 8}}>
              5.0
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{fontSize: 13, color: '#212121'}}>Time</Text>
          <Text style={{fontSize: 13, color: '#212121'}}>Date</Text>
          <Text style={{fontSize: 13, color: '#212121'}}>Address</Text>
        </View>
      </View>
      {noBtns ? null : (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{
              width: '49%',
              height: 45,
              backgroundColor: '#FFB743',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: '#ffffff'}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BookingsEdit');
            }}
            style={{
              width: '49%',
              height: 45,
              backgroundColor: '#38BA6E',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: '#ffffff'}}>Reschedule</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

function TabBar({title, selected, setSelected}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(title);
      }}
      style={{
        marginHorizontal: 26,
        alignSelf: 'center',
      }}>
      <Text
        style={{
          fontSize: 16,
          color: selected === title ? '#000000' : '#949494',
          fontWeight: '700',
        }}>
        {title}
      </Text>
      {selected === title ? (
        <View
          style={{
            width: '100%',
            height: 1,
            marginTop: 2,
            backgroundColor: '#38BA6E',
          }}></View>
      ) : null}
    </TouchableOpacity>
  );
}

export default function BookingLists({route, navigation}) {
  const [selected, setSelected] = useState('Ongoing');
  const [upload, setUpload] = useState(false);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#F2FBF8', paddingHorizontal: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{marginLeft: -5}}>
          <ChevronLeft
            stroke="#242424"
            fill="#fff"
            width={22}
            height={22}
            strokeWidth={2}
          />
        </TouchableOpacity>
        <Text style={{color: '#38BA6E', fontSize: 20, fontWeight: 'bold'}}>
          SASTI <Text style={{color: '#FCCA25'}}>SERVICES</Text>
        </Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 60,
          }}>
          <TabBar
            title="Ongoing"
            selected={selected}
            setSelected={setSelected}
          />
          <TabBar
            title="Previous"
            selected={selected}
            setSelected={setSelected}
          />
        </View>
        {selected === 'Ongoing' ? (
          <>
            <ProjectCard navigation={navigation} />
            <ProjectCard navigation={navigation} />
            <ProjectCard navigation={navigation} />
            <ProjectCard navigation={navigation} />
            <ProjectCard navigation={navigation} />
            <ProjectCard navigation={navigation} />
            <ProjectCard navigation={navigation} />
            <ProjectCard navigation={navigation} />
            <ProjectCard navigation={navigation} />
          </>
        ) : (
          <>
            <ProjectCard noBtns={true} navigation={navigation} />
            <ProjectCard noBtns={true} navigation={navigation} />
            <ProjectCard noBtns={true} navigation={navigation} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
