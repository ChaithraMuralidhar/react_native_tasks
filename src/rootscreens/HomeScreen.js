import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Add-details');
          }}>
          <LinearGradient colors={['black', 'grey']} style={styles.button}>
            <Text style={styles.buttonText}>Add Details</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('View-details');
          }}>
          <LinearGradient colors={['black', 'grey']} style={styles.button}>
            <Text style={styles.buttonText}>View Details</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Movie-list')}>
          <LinearGradient colors={['black', 'grey']} style={styles.button}>
            <Text style={styles.buttonText}>Movie List</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Offline-movies');
          }}>
          <LinearGradient colors={['black', 'grey']} style={styles.button}>
            <Text style={styles.buttonText}>Offline movies</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Local-notifications');
          }}>
          <LinearGradient colors={['black', 'grey']} style={styles.button}>
            <Text style={styles.buttonText}>Local Notifications</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('localisation');
          }}>
          <LinearGradient colors={['black', 'grey']} style={styles.button}>
            <Text style={styles.buttonText}>localisation</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black",
    opacity:0.8
  },
  innerContainer: {
    alignItems: 'center',
    margin: 40,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
