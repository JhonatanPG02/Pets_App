import React, {useContext, useEffect, useState} from 'react';
import {Button, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../Context/User';
import { COLOR_PRIMARY } from '../Utils/Palets';

export default function Login({navigation}) {
    const [isSession, setIsSession] = useState(false)
    const {setUser} = useContext(UserContext)

    useEffect(() => {
        GoogleSignin.configure({
            iosClientId: '353823325005-91d7h1drd1k707stdvh4os2370gtb24v.apps.googleusercontent.com'
          });
          getStorage();
    }, [])

    const getStorage = async () => {
      if (await AsyncStorage.getItem('session')) {
          setIsSession(true);
      } else {
          setIsSession(false);
      }
  }

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo.user);
          await AsyncStorage.setItem('session', JSON.stringify(userInfo.user))
          setUser(userInfo.user)
          setIsSession(true)
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User Cancelled the Login Flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Signing In');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play Services Not Available or Outdated');
          } else {
            console.log(error.message);
          }
        }
      };

      const closeSession = async () => {
        await GoogleSignin.signOut();
        await AsyncStorage.removeItem('session');
        getStorage()
      }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
              <Text style={styles.back}>{'<'}</Text>
            </TouchableOpacity>
            {isSession ? 
            <Button title='Logout' onPress={closeSession}/>
            :
            <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
              // disabled={this.state.isSigninInProgress}
            />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBack: {
      position: 'absolute',
      top: 50,
      left: 5,
  },
  back: {
      color: COLOR_PRIMARY, 
      fontSize: 30,
      marginLeft: 10,
  },
})