import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserContext} from '../Context/User';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../Utils/Palets';

const {height} = Dimensions.get('window');

export default function Welcome({navigation}) {
  const {user} = useContext(UserContext)
  
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.head}>
        <Text style={styles.title}>Homey {'\n'}Pet</Text>
        <Image style={styles.img} source={require('../Images/cat.png')} />
      </View>
      <View style={styles.description}>
        <Text style={styles.subtitle}>Take Care Of {'\n'} Your Pet</Text>
        <Text style={styles.meta}>
          Make your bonding relationship between{' '}
          <Text style={styles.text}>pets & humans</Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => user ? navigation.navigate('Home') : navigation.navigate('Login')}>
          <Text style={styles.start}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY,
  },
  head: {
    padding: 25,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  img: {
    position: 'absolute',
    top: -120,
  },
  description: {
    height,
    padding: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    position: 'relative',
    top: 240,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
  },
  meta: {
    color: COLOR_SECONDARY,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: COLOR_PRIMARY,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    marginTop: 40,
    backgroundColor: COLOR_PRIMARY,
    textAlign: 'center',
    padding: 20,
    borderRadius: 40,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 50,
    margin: 10,
    position: 'relative',
    fontSize: 20,
    padding: 18,
    left: -40,
  },
  start: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

