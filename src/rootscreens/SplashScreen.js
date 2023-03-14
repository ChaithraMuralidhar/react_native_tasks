import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={{height: '100%'}}>
      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: 40,
          marginVertical: 140,
          height: '60%',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 50, color: 'white', fontStyle: 'italic',fontWeight:"bold"}}>
          Movie's World
        </Text>
        <View style={{alignItems: 'flex-end'}}>

          <TouchableOpacity
          onPress={()=>navigation.navigate('Login')}
          >
            <Text
              style={{
                marginTop: 30,
                color: 'white',
                fontSize: 22,
                textAlign: 'center',
                width: 250,
                padding: 10,
                borderRadius: 25,
                backgroundColor: 'gray',
                opacity: 0.9,
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}>
              Let's Start
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
