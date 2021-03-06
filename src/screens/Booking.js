import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {ChevronLeft} from 'react-native-feather';
import {Rating} from 'react-native-ratings';
import Svg, {Path, Circle} from 'react-native-svg';

export default function Booking({navigation}) {
  const [isReview, setIsReview] = useState(false);
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
      <Text
        style={{
          color: '#242424',
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 20,
          paddingHorizontal: 20,
        }}>
        Booking
      </Text>
      <ScrollView style={{paddingHorizontal: 20, flex: 1}}>
        <View
          style={{
            backgroundColor: '#F3F7F9',
            paddingVertical: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            borderRadius: 10,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={22.949}
            height={23.053}
            viewBox="0 0 25.949 26.053">
            <Path
              data-name="Icon ionic-ios-call"
              d="M29.689 24.9a21.789 21.789 0 00-4.553-3.059c-1.365-.658-1.864-.644-2.83.054-.8.583-1.324 1.126-2.249.922s-2.749-1.587-4.519-3.357-3.148-3.608-3.344-4.538.345-1.452.919-2.259c.7-.97.716-1.472.054-2.842a21.459 21.459 0 00-3.047-4.568c-.993-1-1.216-.78-1.763-.583a10.018 10.018 0 00-1.614.861A4.882 4.882 0 004.8 7.586c-.385.834-.831 2.388 1.439 6.444a35.943 35.943 0 006.3 8.431l.007.007.007.007a35.96 35.96 0 008.4 6.322c4.039 2.279 5.586 1.831 6.417 1.445a4.8 4.8 0 002.047-1.947 10.089 10.089 0 00.858-1.621c.191-.55.414-.774-.586-1.774z"
              transform="translate(-4.49 -4.502)"
              fill="#38ba6e"
            />
          </Svg>
          <Text style={{color: '#959595', fontSize: 18, marginLeft: 10}}>
            0300-1234566
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#F3F7F9',
            paddingVertical: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            borderRadius: 10,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25.792}
            height={25.792}
            viewBox="0 0 25.792 25.792">
            <Path
              data-name="Icon ionic-logo-whatsapp"
              d="M15.38 2.25A12.613 12.613 0 002.718 14.814 12.434 12.434 0 004.535 21.3L2.25 28.042l7.01-2.227a12.683 12.683 0 0018.782-11A12.613 12.613 0 0015.38 2.25zm6.3 17.335a3.27 3.27 0 01-2.239 1.443c-.594.031-.611.46-3.848-.946s-5.184-4.827-5.338-5.047a6.209 6.209 0 01-1.199-3.365 3.588 3.588 0 011.232-2.632 1.24 1.24 0 01.877-.369c.255 0 .42-.008.609 0s.472-.039.717.613.832 2.254.907 2.417a.587.587 0 01.006.563 2.2 2.2 0 01-.343.523c-.169.181-.355.405-.506.544-.168.153-.344.321-.167.649a9.689 9.689 0 001.712 2.286 8.834 8.834 0 002.539 1.688c.318.173.507.154.7-.053s.843-.907 1.071-1.219.441-.252.734-.134 1.856.954 2.173 1.125.529.261.605.4a2.659 2.659 0 01-.246 1.514z"
              transform="translate(-2.25 -2.25)"
              fill="#38ba6e"
            />
          </Svg>
          <Text style={{color: '#959595', fontSize: 18, marginLeft: 10}}>
            0300-1234567
          </Text>
        </View>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={347.523}
          height={230.156}
          style={{marginVertical: 20}}
          viewBox="0 0 347.523 230.156">
          <Path
            data-name="Path 5762"
            d="M905.043 503.761a28.29 28.29 0 01-9 6.367c-.318.151-.635.3-.957.436h-.007-.008-.008a56.943 56.943 0 01-6.95 2.485 96.4 96.4 0 01-42.817 2.236l-.815-.147V482.1c.269-.114.542-.228.815-.338q2.67-1.106 5.406-2.033 3.935-1.344 7.98-2.306a86.427 86.427 0 0126.9-2.175q2.463.183 4.913.53a37.046 37.046 0 0110.155 2.75c.461.216.913.44 1.361.68a15.271 15.271 0 016.607 6.473 12.449 12.449 0 011.108 3.255v.008c.081.391.138.786.183 1.177a18.1 18.1 0 01-4.866 13.64z"
            transform="translate(-571.105 -349.735)"
            fill="#b5c3c3"
          />
          <Path
            data-name="Path 5763"
            d="M909.874 510.395a.557.557 0 01-.122.016q-10.467.458-20.906 1.361h-.012c-.029 0-.053 0-.081.008q-10.717.929-21.39 2.326c-.3.041-.6.081-.9.118q-7.381.984-14.734 2.183-3.245.532-6.477 1.108c-.273.049-.542.094-.815.147v-1.234c.273-.053.546-.1.815-.147q10.766-1.906 21.606-3.328 2.725-.367 5.458-.693 7.895-.953 15.813-1.646l1.157-.1q10.137-.862 20.3-1.308a.385.385 0 01.1.008c.657.061.795 1.038.188 1.181z"
            transform="translate(-571.105 -370.012)"
            fill="#fff"
          />
          <Path
            data-name="Path 5764"
            d="M927.256 536.5a33.356 33.356 0 01-23.406-9.723 31.706 31.706 0 01-4.556-5.732c-.414-.665-1.384.068-.973.727a34.568 34.568 0 0021.5 15.12 32.924 32.924 0 007.592.812c.779-.004.618-1.212-.157-1.204z"
            transform="translate(-602.978 -376.869)"
            fill="#fff"
          />
          <Path
            data-name="Path 5765"
            d="M858.642 480.95a.689.689 0 01-.509.46 26.566 26.566 0 00-5.735 2.24 27.865 27.865 0 00-7.141 5.4c-.11.11-.216.22-.318.334-.171.179-.334.363-.5.55v-1.776c.261-.277.534-.55.815-.811a29.292 29.292 0 015.406-4.09q3.94-1.346 7.982-2.307z"
            transform="translate(-571.105 -353.264)"
            fill="#fff"
          />
          <Path
            data-name="Path 5766"
            d="M964.817 482.8a28.271 28.271 0 00-13.207 11.64.611.611 0 00.323.8.622.622 0 00.8-.323 26.9 26.9 0 0112.545-10.992.608.608 0 00-.457-1.126z"
            transform="translate(-634.59 -354.326)"
            fill="#fff"
          />
          <Path
            data-name="Path 5767"
            d="M918 368.372a28.241 28.241 0 01-5.01 9.817c-.208.277-.424.558-.648.827a56.732 56.732 0 01-5.055 5.455 95.09 95.09 0 01-21.741 15.532 91.058 91.058 0 01-40.287 10.6H844.441v-18.494c.265-.505.538-1.01.815-1.511a89.426 89.426 0 0113.048-17.85c.122-.134.248-.269.375-.4q2.859-3.018 6-5.748a85.879 85.879 0 0127.411-16.233 36.887 36.887 0 0110.269-2.281 23.47 23.47 0 011.524-.037 15.294 15.294 0 018.86 2.664 12.626 12.626 0 012.493 2.367c.252.314.485.635.709.965A18.083 18.083 0 01918 368.372z"
            transform="translate(-571.105 -274.501)"
            fill="#b5c3c3"
          />
          <Path
            data-name="Path 5768"
            d="M915.939 361.3a.6.6 0 01-.1.069q-9.043 5.261-17.859 10.9l-.02.012a.716.716 0 01-.073.045q-9.062 5.8-17.867 12l-.741.521q-6.08 4.3-12.033 8.774Q856 402.1 845.255 411.2c-.273.228-.542.46-.815.693V410.3c.269-.232.542-.464.815-.693q4.118-3.477 8.31-6.856c.835-.672 1.674-1.344 2.513-2.008q11.182-8.9 22.865-17.142 2.3-1.619 4.6-3.21 6.551-4.509 13.247-8.8c.322-.208.648-.416.974-.623q8.573-5.475 17.37-10.591a.608.608 0 01.09-.045c.618-.242 1.192.568.715.968z"
            transform="translate(-571.105 -281.755)"
            fill="#fff"
          />
          <Path
            data-name="Path 5769"
            d="M962.724 420a33.356 33.356 0 01-25.244 2.262 31.7 31.7 0 01-6.7-2.959c-.676-.4-1.194.7-.524 1.1a34.568 34.568 0 0026.063 3.4 32.919 32.919 0 007.1-2.807c.691-.374-.012-1.366-.695-.996z"
            transform="translate(-621.78 -316.676)"
            fill="#fff"
          />
          <Path
            data-name="Path 5770"
            d="M868.934 419.714a27.922 27.922 0 01-.388-6.464 29.46 29.46 0 014.392-13.912q2.863-3.017 6-5.749a.7.7 0 01-.239.646 26.66 26.66 0 00-4.038 4.647 28.157 28.157 0 00-4.514 20.731.494.494 0 01-.128.465.662.662 0 01-1.083-.365z"
            transform="translate(-585.365 -301.491)"
            fill="#fff"
          />
          <Path
            data-name="Path 5771"
            d="M978.663 346.294a28.271 28.271 0 00-6.287 16.447.611.611 0 00.656.555.622.622 0 00.555-.656 26.9 26.9 0 016-15.562c.497-.606-.429-1.392-.924-.784z"
            transform="translate(-646.925 -273.331)"
            fill="#fff"
          />
          <Path
            data-name="Path 5772"
            d="M860.658 345.96c-.028.35-.061.7-.1 1.043v.008a57.564 57.564 0 01-1.324 7.316 83.32 83.32 0 01-.933 3.528c-.041.151-.086.3-.13.448a93.5 93.5 0 01-3.56 10.041 97.333 97.333 0 01-9.357 17.2c-.265.4-.538.79-.815 1.181V322.94c.273-.016.542-.016.815-.008q.2 0 .391.012a12.352 12.352 0 013.373.656c.383.126.753.269 1.12.428a18.082 18.082 0 019.451 10.962 28.3 28.3 0 011.069 10.97z"
            transform="translate(-571.105 -259.613)"
            fill="#b5c3c3"
          />
          <Path
            data-name="Path 5773"
            d="M850.141 324.628a.44.44 0 01-.045.114q-2.475 4.809-4.839 9.667c-.273.558-.546 1.12-.815 1.678v-2.77q.4-.831.815-1.662 1.827-3.7 3.715-7.373a.534.534 0 01.049-.082c.374-.538 1.303-.171 1.12.428z"
            transform="translate(-571.106 -260.212)"
            fill="#fff"
          />
          <Path
            data-name="Path 5774"
            d="M860.788 379.924c-.073.13-.147.261-.228.391a32.508 32.508 0 01-4.245 5.8 35 35 0 01-11.06 8.054c-.269.13-.542.252-.815.367v-1.324c.273-.122.546-.248.815-.379a32.941 32.941 0 0014.408-13.369.67.67 0 01.994-.191.47.47 0 01.13.652z"
            transform="translate(-571.105 -292.92)"
            fill="#fff"
          />
          <Path
            data-name="Path 5775"
            d="M447.592 180.943V211.9h-.815v-.33H174.256v.33h-.815v-30.957a13.456 13.456 0 0113.443-13.443h247.265a13.456 13.456 0 0113.443 13.443z"
            transform="translate(-173.441 -167.5)"
            fill="#38ba6e"
          />
          <Path
            data-name="Path 5776"
            d="M434.149 167.5H186.884a13.456 13.456 0 00-13.443 13.443v176.792a13.456 13.456 0 0013.443 13.443h247.265a13.456 13.456 0 0013.443-13.443V180.943a13.456 13.456 0 00-13.443-13.443zm12.628 190.235a12.644 12.644 0 01-12.628 12.628H186.884a12.644 12.644 0 01-12.628-12.628V180.943a12.644 12.644 0 0112.628-12.628h247.265a12.644 12.644 0 0112.628 12.628z"
            transform="translate(-173.441 -167.5)"
            fill="#3f3d56"
          />
          <Circle
            data-name="Ellipse 60"
            cx={8.147}
            cy={8.147}
            r={8.147}
            transform="translate(47.253 14.054)"
            fill="#fff"
          />
          <Circle
            data-name="Ellipse 61"
            cx={8.147}
            cy={8.147}
            r={8.147}
            transform="translate(210.603 14.054)"
            fill="#fff"
          />
          <Path
            data-name="Path 5777"
            d="M285.449 389.142h-48.466a7.753 7.753 0 01-7.744-7.744v-22.907a7.753 7.753 0 017.744-7.744h48.466a7.753 7.753 0 017.744 7.744V381.4a7.753 7.753 0 01-7.744 7.742z"
            transform="translate(-206.509 -276.1)"
            fill="#38ba6e"
          />
          <Path
            data-name="Path 5778"
            d="M487.847 389.142h-48.466a7.753 7.753 0 01-7.744-7.744v-22.907a7.753 7.753 0 017.744-7.744h48.466a7.753 7.753 0 017.744 7.744V381.4a7.753 7.753 0 01-7.744 7.742z"
            transform="translate(-326.459 -276.1)"
            fill="#38ba6e"
          />
          <Path
            data-name="Path 5779"
            d="M487.505 533.75H439.04a7.988 7.988 0 01-7.979-7.979v-22.907a7.988 7.988 0 017.979-7.979h48.466a7.988 7.988 0 017.979 7.979v22.907a7.988 7.988 0 01-7.979 7.979z"
            transform="translate(-326.118 -361.523)"
            fill="#dfefe9"
          />
          <Path
            data-name="Path 5780"
            d="M284.717 533.75h-48.466a7.988 7.988 0 01-7.979-7.979v-22.907a7.988 7.988 0 017.979-7.979h48.466a7.988 7.988 0 017.979 7.979v22.907a7.988 7.988 0 01-7.979 7.979z"
            transform="translate(-205.937 -361.523)"
            fill="#dfefe9"
          />
          <Path
            data-name="Path 5781"
            d="M689.9 533.75h-48.461a7.988 7.988 0 01-7.979-7.979v-22.907a7.988 7.988 0 017.979-7.979H689.9a7.988 7.988 0 017.979 7.979v22.907a7.988 7.988 0 01-7.979 7.979z"
            transform="translate(-446.068 -361.523)"
            fill="#dfefe9"
          />
          <Path
            data-name="Path 5782"
            d="M689.9 388.572h-48.461a7.988 7.988 0 01-7.979-7.979v-22.907a7.988 7.988 0 017.979-7.979H689.9a7.988 7.988 0 017.979 7.979v22.907a7.988 7.988 0 01-7.979 7.979z"
            transform="translate(-446.068 -275.484)"
            fill="#dfefe9"
          />
          <Circle
            data-name="Ellipse 62"
            cx={13.142}
            cy={13.142}
            r={13.142}
            transform="translate(41.565 80.702)"
            fill="#fff"
          />
          <Path
            data-name="Path 5783"
            d="M298.05 395.64a1.363 1.363 0 01-.82-.272l-.015-.011-3.088-2.365a1.372 1.372 0 011.669-2.178l2 1.534 4.727-6.165a1.372 1.372 0 011.924-.254l-.029.04.03-.039a1.374 1.374 0 01.254 1.924l-5.561 7.252a1.373 1.373 0 01-1.092.536z"
            transform="translate(-244.646 -296.782)"
            fill="#5ee2a3"
          />
          <Circle
            data-name="Ellipse 63"
            cx={13.142}
            cy={13.142}
            r={13.142}
            transform="translate(124.247 80.514)"
            fill="#fff"
          />
          <Path
            data-name="Path 5784"
            d="M501.025 395.177a1.363 1.363 0 01-.82-.272l-.015-.011-3.089-2.365a1.372 1.372 0 011.669-2.178l2 1.534 4.727-6.165a1.372 1.372 0 011.924-.254l-.029.04.03-.039a1.374 1.374 0 01.254 1.924l-5.561 7.252a1.373 1.373 0 01-1.092.535z"
            transform="translate(-364.938 -296.508)"
            fill="#5ee2a3"
          />
          <Path
            data-name="Path 5785"
            d="M703.8 482.978a4.376 4.376 0 00-.889-6.651l-7.337-39.177-8.923 3.309 10.018 37.469a4.4 4.4 0 007.131 5.05z"
            transform="translate(-477.595 -327.306)"
            fill="#a0616a"
          />
          <Path
            data-name="Path 5786"
            d="M540.518 396.815a4.641 4.641 0 01.009.732l17.349 13.353 4.92-2.02 4.019 7.027-8.362 4.423a3.532 3.532 0 01-4.186-.663l-17.342-17.879a4.634 4.634 0 113.592-4.972z"
            transform="translate(-385.508 -300.924)"
            fill="#a0616a"
          />
          <Path
            data-name="Path 5787"
            d="M469.306 530.75h-4.994l-2.376-15.189h7.371z"
            transform="translate(-273.764 -305.544)"
            fill="#a0616a"
          />
          <Path
            data-name="Path 5788"
            d="M633.169 722.817h-16.1v-.2a6.268 6.268 0 016.268-6.268h9.836z"
            transform="translate(-436.352 -492.77)"
            fill="#2f2e41"
          />
          <Path
            data-name="Path 5789"
            d="M515.306 530.75h-4.994l-2.376-15.189h7.371z"
            transform="translate(-301.025 -305.544)"
            fill="#a0616a"
          />
          <Path
            data-name="Path 5790"
            d="M679.169 722.817h-16.1v-.2a6.268 6.268 0 016.268-6.268h9.836z"
            transform="translate(-463.614 -492.77)"
            fill="#2f2e41"
          />
          <Path
            data-name="Path 5791"
            d="M629.681 621.8a1.829 1.829 0 01-1.823-1.659l-4.352-58.533.206-.017 29.949-2.462.008.213 2.381 60.635a1.833 1.833 0 01-1.832 1.9h-5.872a1.823 1.823 0 01-1.812-1.554l-7.974-48.983a.2.2 0 00-.4.029l-.362 48.363a1.835 1.835 0 01-1.737 1.818l-6.277.245c-.038.005-.071.005-.103.005z"
            transform="translate(-440.169 -399.599)"
            fill="#2f2e41"
          />
          <Circle
            data-name="Ellipse 64"
            cx={10.005}
            cy={10.005}
            r={10.005}
            transform="translate(184.618 68.03)"
            fill="#a0616a"
          />
          <Path
            data-name="Path 5792"
            d="M632.608 467.968a49.306 49.306 0 01-12.941-1.769 1.838 1.838 0 01-1.318-1.909c1.347-20.243 1.664-35.952-1.169-46.821a18.251 18.251 0 011.5-13.386 17.618 17.618 0 0115.618-9.257q.457.009.924.033c9.684.5 17.23 9.259 16.821 19.529L650.1 463.34a1.808 1.808 0 01-1.147 1.647 46.536 46.536 0 01-16.345 2.981z"
            transform="translate(-436.048 -302.222)"
            fill="#3f3d56"
          />
          <Path
            data-name="Path 5793"
            d="M610.464 430.269l-7.494-9.184a2.347 2.347 0 01.617-3.5l10.152-6.049a6.518 6.518 0 118.212 10.124l-7.934 8.706a2.347 2.347 0 01-3.553-.1z"
            transform="translate(-427.685 -311.263)"
            fill="#3f3d56"
          />
          <Path
            data-name="Path 5794"
            d="M672.319 424.725a2.345 2.345 0 01-1.289-1.469l-3.374-11.286a6.518 6.518 0 1111.791-5.561l6.524 9.853a2.347 2.347 0 01-.962 3.421l-10.736 5.025a2.344 2.344 0 01-1.955.016z"
            transform="translate(-465.965 -306.872)"
            fill="#3f3d56"
          />
          <Path
            data-name="Path 5795"
            d="M635.861 350.014l-7.416-1.7c-.765-.175-1.684-.509-1.79-1.287-.142-1.045 1.361-1.773 1.223-2.818-.134-1.013-1.5-1.143-2.481-1.442a3.711 3.711 0 01-2.311-4.62 3.41 3.41 0 01-4.842.41 4.287 4.287 0 01-.81-5.026 5.82 5.82 0 014.369-2.95 9.214 9.214 0 015.305.989c.109-1.154 1.55-1.622 2.709-1.632a11.581 11.581 0 0110.853 7.922c1.422 4.584.471 9.608-3.509 12.29z"
            transform="translate(-436.293 -263.77)"
            fill="#2f2e41"
          />
          <Path
            data-name="Path 5796"
            d="M620.339 731.315h-155.2a.407.407 0 110-.815h155.2a.407.407 0 110 .815z"
            transform="translate(-346.071 -501.158)"
            fill="#3f3d56"
          />
        </Svg>
        <Text
          style={{
            color: '#242424',
            textAlign: 'center',
            width: '80%',
            marginLeft: '10%',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          You have been successfully booked the Services
        </Text>
        <TouchableOpacity
          onPress={() => {
            setIsReview(true);
          }}
          style={{
            backgroundColor: '#38BA6E',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 45,
            marginTop: 20,
            borderRadius: 10,
          }}>
          <Text style={{color: '#ffffff'}}>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            backgroundColor: '#ffffff',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 45,
            marginTop: 20,
            borderRadius: 10,
          }}>
          <Text style={{color: '#38BA6E'}}>Go to Home</Text>
        </TouchableOpacity>
      </ScrollView>
      {isReview ? <RatingPopup setIsReview={setIsReview} /> : null}
    </SafeAreaView>
  );
}

function RatingPopup({setIsReview}) {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.7)',
        padding: 20,
      }}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#F3F7F9',
          padding: 20,
          borderRadius: 15,
        }}>
        <Text
          style={{
            color: '#242424',
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Review
        </Text>
        <TextInput
          multiline={true}
          placeholder="Write review"
          placeholderTextColor="#000000"
          style={{
            marginVertical: 10,
            backgroundColor: '#FFFFFF',
            minHeight: 150,
            color: '#000000',
            textAlignVertical: 'top',
            fontWeight: '500',
            padding: 15,
            borderRadius: 10,
          }}
        />
        <Rating
          ratingBackgroundColor="#B5C3C3"
          tintColor="#F3F7F9"
          ratingColor="#38BA6E"
          type="custom"
        />
        <TouchableOpacity
          onPress={() => {
            setIsReview(false);
          }}
          style={{
            backgroundColor: '#38BA6E',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 45,
            marginTop: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: '#ffffff',
            }}>
            Review
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsReview(false);
          }}
          style={{
            backgroundColor: '#ffffff',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 45,
            marginTop: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: '#242424',
            }}>
            Not now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
