import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={{height: '100%'}}>
      <View style={{alignItems: 'center'}}>
       <View style={{marginVertical:60,alignItems:"center"}}>
       <Text
          style={{
            fontSize: 45,
            color: 'white',
            fontWeight:"bold"
          }}>
          Welcome Back
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            opacity: 0.8,
            fontWeight: 'bold',
          }}>
          Login to your account
        </Text>
       </View>
        <View
          style={{
            backgroundColor: 'black',
            marginTop: 20,
            height: 660,
            width: 400,
            paddingTop: 100,
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
              color: 'white',
              paddingHorizontal: 30,
              backgroundColor: 'grey',
              width: '90%',
            }}
            placeholder="Password"
            placeholderTextColor={'white'}
            secureTextEntry={true}
          />
          <View
            style={{
              marginTop: 20,
              alignItems: 'flex-end',
              width: '88%',
              paddingRight: 16,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Forgot Password ?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 80,
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
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Don't have an account ?{' '}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                  onPress={() => navigation.navigate('Register')}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
