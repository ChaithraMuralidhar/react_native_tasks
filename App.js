import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/rootscreens/SplashScreen';
import Login from './src/rootscreens/LoginScreen';
import Register from './src/rootscreens/RegisterScreen';
import HomeScreen from './src/rootscreens/HomeScreen';
import LocalNotification from './src/notification/LocalNotifications';
import MovieListScreen from './src/mainscreens/MovieListScreen';
import AddDetailsScreen from './src/mainscreens/AddDetailsScreen';
import ViewDetailsScreen from './src/mainscreens/ViewDetailsScreen';
import OfflineMoviesScreen from './src/mainscreens/OfflineMoviesScreen';
import {requestUserPermission,NotificationServices} from './src/notification/PushNotifications';
import ManualSwitching from './src/localisation/ManualSwitching';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Movie-list"
          component={MovieListScreen}
          options={{
            title: 'Movies',
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Add-details"
          component={AddDetailsScreen}
          options={{
            title: 'Movies',
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="View-details"
          component={ViewDetailsScreen}
          options={{
            title: 'Movies',
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Offline-movies"
          component={OfflineMoviesScreen}
          options={{
            title: 'Movies',
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Local-notifications"
          component={LocalNotification}
          options={{
            title: 'Local Notifications',
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

<Stack.Screen
          name="localisation"
          component={ManualSwitching}
          options={{
            title: 'localisation',
            headerStyle: {
              backgroundColor: 'grey',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        {/* <Stack.Screen
          name="Push-notifications"
          component={PushNotifications}
          options={{
            title: 'Push Notifications',
            headerStyle: {
              backgroundColor: '#01ab9d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
