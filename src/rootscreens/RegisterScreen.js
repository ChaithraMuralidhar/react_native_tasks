import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';

const Login = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={{height: '100%'}}>
      <View style={{alignItems: 'center', marginVertical: 100}}>
        <Text
          style={{
            fontSize: 45,
            color: 'white',
            fontWeight:"bold"
          }}>
          Welcome 
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            opacity: 0.6,
            fontWeight: 'bold',
          }}>
          Register your account
        </Text>
        <View
          style={{
            backgroundColor: 'black',
            marginTop: 30,
            height: 660,
            width: 400,
            paddingTop: 70,
            opacity: 0.7,
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              borderRadius: 100,
              marginBottom: 30,
              color: 'white',
              paddingHorizontal: 30,
              backgroundColor: 'grey',
              width: '90%',
            }}
            placeholder="Email / Username"
            placeholderTextColor={'white'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={{
              borderRadius: 100,
              marginBottom: 30,
              color: 'white',
              paddingHorizontal: 30,
              backgroundColor: 'grey',
              width: '90%',
            }}
            placeholder="Password"
            placeholderTextColor={'white'}
            secureTextEntry={true}
          />
          <TextInput
            style={{
              borderRadius: 100,
              marginBottom: 30,
              color: 'white',
              paddingHorizontal: 30,
              backgroundColor: 'grey',
              width: '90%',
            }}
            placeholder="Confirm Password"
            placeholderTextColor={'white'}
            secureTextEntry={true}
          />
          <TextInput
            style={{
              borderRadius: 100,
              marginBottom: 30,
              color: 'white',
              paddingHorizontal: 30,
              backgroundColor: 'grey',
              width: '90%',
            }}
            placeholder="Phone number"
            placeholderTextColor={'white'}
            keyboardType='number-pad'
          />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 60,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  textAlign: 'center',
                  width: 180,
                  padding: 5,
                  borderRadius: 25,
                  backgroundColor: 'gray',
                  fontWeight:"bold"
                }}>
                Register
              </Text>
            </TouchableOpacity>
           <View  style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              margin:10
            }}>
           <Text style={{
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',

              }} >Already Registered ?   </Text>
            <TouchableOpacity ><Text style={{
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
               
              }}
              onPress={() => navigation.navigate('Login')}
              >Login</Text></TouchableOpacity>
           </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
