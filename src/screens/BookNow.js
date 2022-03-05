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
import {ArrowLeft, ChevronLeft, ChevronRight} from 'react-native-feather';
import {Rating} from 'react-native-ratings';
import InputBox from '../components/InputBox';
import Svg, {Path} from 'react-native-svg';

function TimePickerCard({index, data, selected, setSelected}) {
  console.log(index + 1);
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(index + 1 + data);
      }}
      style={{
        backgroundColor: selected === index + 1 + data ? '#242424' : '#ffffff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginRight: 5,
      }}>
      <Text style={{color: '#B5C3C3'}}>
        {index + 1}:00 {data}
      </Text>
    </TouchableOpacity>
  );
}

export default function BookNow({route, navigation}) {
  const [selectedDay, setSelectedDay] = useState('Sun');
  const [selectedFromTime, setSelectedFromTime] = useState('9PM');
  const [selectedToTime, setSelectedToTime] = useState('11AM');
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fir', 'Sat'];
  const timeAm = [
    'AM',
    'AM',
    'AM',
    'AM',
    'AM',
    'AM',
    'AM',
    'AM',
    'AM',
    'AM',
    'AM',
    'AM',
  ];
  const timePm = [
    'PM',
    'PM',
    'PM',
    'PM',
    'PM',
    'PM',
    'PM',
    'PM',
    'PM',
    'PM',
    'PM',
    'PM',
  ];
  const jan = 31;
  const feb = 28;
  const mar = 31;
  const apr = 30;
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
          <Text style={{color: '#242424', fontSize: 20, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View>

        <ScrollView style={{paddingHorizontal: 20}}>
          <InputBox placeholder="Address" />
          <InputBox placeholder="Service" />
          <Text
            style={{
              color: '#242424',
              fontSize: 16,
              fontWeight: 'bold',
              marginVertical: 10,
              textAlign: 'center',
            }}>
            Date and time
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{padding: 5}}>
              <ChevronLeft
                stroke="#B5C3C3"
                fill="#fff"
                width={25}
                height={25}
                strokeWidth={2}
              />
            </TouchableOpacity>
            <Text style={{color: '#242424'}}> Jan 2022</Text>
            <TouchableOpacity style={{padding: 5}}>
              <ChevronRight
                stroke="#B5C3C3"
                fill="#fff"
                width={25}
                height={25}
                strokeWidth={2}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomColor: '#B5C3C3',
              borderBottomWidth: 1,
            }}>
            {week.map((item, i) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedDay(item);
                }}
                key={i}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: selectedDay === item ? '#38BA6E' : '#ffffff',
                  height: 70,
                  borderRadius: 15,
                  flex: 1,
                }}>
                <Text
                  style={{
                    color: selectedDay === item ? '#ffffff' : '#B5C3C3',
                    marginBottom: 10,
                  }}>
                  {item}
                </Text>
                <Text
                  style={{color: selectedDay === item ? '#ffffff' : '#B5C3C3'}}>
                  {i + 1}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{flexDirection: 'row'}}>
            <ScrollView style={{marginVertical: 10}} horizontal={true}>
              {timeAm.map((item, i) => (
                <TimePickerCard
                  key={i}
                  index={i}
                  data={item}
                  selected={selectedFromTime}
                  setSelected={setSelectedFromTime}
                />
              ))}
              {timePm.map((item, i) => (
                <TimePickerCard
                  key={i}
                  index={i}
                  data={item}
                  selected={selectedFromTime}
                  setSelected={setSelectedFromTime}
                />
              ))}
            </ScrollView>
            <ScrollView style={{marginVertical: 10}} horizontal={true}>
              {timeAm.map((item, i) => (
                <TimePickerCard
                  key={i}
                  index={i}
                  data={item}
                  selected={selectedToTime}
                  setSelected={setSelectedToTime}
                />
              ))}
              {timePm.map((item, i) => (
                <TimePickerCard
                  key={i}
                  index={i}
                  data={item}
                  selected={selectedToTime}
                  setSelected={setSelectedToTime}
                />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
        <View
          style={{
            padding: 20,
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{width: '50%', color: '#B5C3C3', fontSize: 18}}>
            <Text style={{color: '#258D51', fontWeight: 'bold'}}>$30</Text>/day
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Booking');
            }}
            style={{
              backgroundColor: '#38BA6E',
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 45,
              borderRadius: 10,
            }}>
            <Text>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
