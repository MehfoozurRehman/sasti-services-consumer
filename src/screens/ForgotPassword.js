import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ArrowLeft, ChevronLeft} from 'react-native-feather';
import InputBox from '../components/InputBox';

export default function ForgotPassword({route, navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2FBF8'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
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
      <ScrollView style={{padding: 20, flex: 1}}>
        <Text
          style={{
            color: '#242424',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: -5,
            marginBottom: 50,
            marginTop: 50,
          }}>
          Forgot Password
        </Text>
        <InputBox placeholder="Email Address" />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{
            backgroundColor: '#38BA6E',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 45,
            borderRadius: 10,
            marginTop: 100,
          }}>
          <Text>Send Recovery Code</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
