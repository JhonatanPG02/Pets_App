import React, {useContext} from 'react';
import { Text, 
        View, 
        Image, 
        TouchableOpacity, 
        SafeAreaView, 
        StyleSheet, 
        StatusBar } from 'react-native';
import { UserContext } from '../Context/User';
import { COLOR_PRIMARY } from '../Utils/Palets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function Profile({navigation}) {
    const {user, setUser} = useContext(UserContext)
    const closeSession = async () => {
        await GoogleSignin.signOut();
        await AsyncStorage.removeItem('session');
        setUser(undefined);
    }

    return (
        <SafeAreaView style={styles.container}> 
            <StatusBar backgroundColor={COLOR_PRIMARY} />
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                    <Text style={styles.back}>{'<'}</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.profile}>Profile</Text>
                </View>
                <View style={styles.data} >
                    <Image style={styles.img} source={require('../Images/jhon.jpeg') || user.photo} />
                    <Text style={styles.Name}>{user.name}</Text>
                    <Text>{user.email}</Text>
                    <TouchableOpacity style={styles.button} onPress={closeSession}>
                        <Text style={styles.textButton}>Logout</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    buttonBack: {
        position: 'absolute',
        top: 50,
        left: 5,
    },
    back: {
        color: COLOR_PRIMARY, 
        fontSize: 25,
        marginLeft: 10,
    },
    profile: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginTop: 15,
    },
    data: {
        marginTop: 30, 
        alignItems: 'center'
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 50,
    },
    Name: { 
        fontSize: 18, 
        textAlign: 'center', 
        marginTop: 10, 
        fontWeight: 'bold',
        color: COLOR_PRIMARY 
    },
    button: {
        width: 150,
        backgroundColor: COLOR_PRIMARY,
        padding: 15,
        borderRadius: 30,
        marginTop: 40
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
})