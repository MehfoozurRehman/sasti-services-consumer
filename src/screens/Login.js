import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import InputBox from '../components/InputBox';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function Login({setIsOn, navigation}) {
  return (
    <ScrollView style={{padding: 20, flex: 1}}>
      <Text style={{color: '#242424', fontSize: 25, marginTop: 50}}>
        Welcome back,
      </Text>
      <Text
        style={{
          color: '#242424',
          fontSize: 25,
          fontWeight: 'bold',
          marginTop: -5,
          marginBottom: 50,
        }}>
        Hammad
      </Text>
      <InputBox placeholder="Email Address" />
      <InputBox placeholder="Password" secure={true} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 80,
        }}>
        <BouncyCheckbox
          size={22}
          fillColor="#258D51"
          unfillColor="#FFFFFF"
          text={
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{color: '#8D8C8C', marginLeft: -6}}>
                Remember Me
              </Text>
            </View>
          }
          iconStyle={{borderColor: '#258D51'}}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          // onPress={(isChecked: boolean) => {}}
        ></BouncyCheckbox>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text
            style={{
              color: '#242424',
              textDecorationColor: '#242424',
              textDecorationLine: 'underline',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{
          backgroundColor: '#38BA6E',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 45,
          borderRadius: 10,
        }}>
        <Text style={{color: '#ffffff'}}>Login</Text>
      </TouchableOpacity>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text
          style={{
            color: '#242424',
          }}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => {
            setIsOn('signup');
          }}>
          <Text
            style={{
              color: '#38BA6E',
              textDecorationColor: '#38BA6E',
              textDecorationLine: 'underline',
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
