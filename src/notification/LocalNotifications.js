import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  showNotification,
  handleScheduleNotification,
  handleCancel,
  createChannel,
} from './Notification.android';
const LocalNotification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => showNotification('Hellooo', 'Good Afternoon')}>
          <LinearGradient colors={['black', 'grey']} style={styles.button}>
            <Text style={styles.buttonText}>Get Notification</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleScheduleNotification('Hi', ' How Are You ??')}>
          <LinearGradient colors={['black', 'grey']} style={styles.button}>
            <Text style={styles.buttonText}>Get Notification In 5secs</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => handleCancel()}>
          <LinearGradient colors={['black', 'grey']} style={styles.button}>
            <Text style={styles.buttonText}> Cancel Notifications</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocalNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    margin: 40,
  },
  button: {
    width: 300,
    height: 50,
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
