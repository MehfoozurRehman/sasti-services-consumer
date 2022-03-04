import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {ArrowLeft, ChevronLeft} from 'react-native-feather';
import InputBox from '../components/InputBox';

function ServiceProviderCard({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ServiceProviderDetails');
      }}
      style={{width: '48%', alignItems: 'center', marginBottom: 10}}>
      <Image
        source={require('../assets/userPic.png')}
        style={{
          width: 80,
          height: 80,
          marginBottom: -30,
          zIndex: 10,
          borderRadius: 80,
        }}
      />
      <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: '#F2FBF8',
          borderRadius: 10,
          justifyContent: 'flex-end',
          padding: 15,
        }}>
        <Text
          style={{
            color: '#242424',
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center',
          }}>
          Hammad Habib
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function ServiceProviderDetails({route, navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
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
      <ScrollView style={{paddingHorizontal: 20, maxHeight: 100}}>
        <Text
          style={{
            color: '#242424',
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Service Providers
        </Text>
        <InputBox placeholder="Search" />
      </ScrollView>
      <ScrollView style={{padding: 20, flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
          <ServiceProviderCard navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
