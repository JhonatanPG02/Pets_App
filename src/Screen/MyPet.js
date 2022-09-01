import React from 'react';
import {SafeAreaView, StyleSheet, Image, View, Text} from 'react-native';
import {COLOR_PRIMARY, COLOR_PRIMARY_OPACITY} from '../Utils/Palets'

export default function MyPet() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.head}>
                    <Text style={styles.title}>Pelusa</Text>
                    <Image style={styles.img} source={require('../Images/pelusa.png')} />
                </View>
                <View style={styles.details}>
                    <View style={styles.data}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Breed: Burmese</Text>
                        <View>
                            <Image style={styles.icon} source={require('../Images/male.png')} />
                            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>4 years old</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={{fontSize: 15, textAlign: 'justify'}}>Glossy and athletic, the Burmese is a solid, muscular cat with a sweet expression, neat round paws and a short coat. The eyes are large and round, the face has a hint of the exotic Asian breeds, but is unexaggerated and attractive</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY_OPACITY,
    },
    head: {
      padding: 25,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
    },
    img: {
      width: 280,
      height: 280,
      marginLeft: 70,
      top: -50
    },
    details: {
        position: 'absolute',
        height: 80,
        width: 300,
        backgroundColor: COLOR_PRIMARY,
        top: 320,
        borderRadius: 10,
        left: 40,
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 40,
    },
    data: {
        flexDirection: 'row', 
        padding: 15,
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    info: {
        top: 50,
        margin: 30,
    }
})