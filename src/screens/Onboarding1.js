import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Onboarding1({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        source={require('../assets/onboarding1.png')}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              paddingVertical: 40,
              paddingHorizontal: 20,
              width: '100%',
              marginBottom: 14,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#242424', fontSize: 20, fontWeight: 'bold'}}>
              Best solution
            </Text>
            <Text style={{color: '#242424', fontSize: 20, fontWeight: 'bold'}}>
              for your office
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Onboarding2');
              }}
              style={{
                height: 50,
                width: 60,
                backgroundColor: '#242424',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.44,
                shadowRadius: 10.32,

                elevation: 8,
                marginTop: 14,
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={27.654}
                height={13.593}
                viewBox="0 0 27.654 13.593">
                <Path
                  data-name="Icon awesome-long-arrow-alt-right"
                  d="M19.379 14.586H.741a.741.741 0 00-.741.74v3.457a.741.741 0 00.741.741h18.638v2.843a1.482 1.482 0 002.529 1.048L27.22 18.1a1.481 1.481 0 000-2.1l-5.312-5.3a1.482 1.482 0 00-2.529 1.048z"
                  transform="translate(0 -10.258)"
                  fill="#fff"
                />
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  color: '#242424',
                  textDecorationLine: 'underline',
                  textDecorationColor: '#242424',
                  marginTop: 16,
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
