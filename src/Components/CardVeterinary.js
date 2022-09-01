import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { COLOR_PRIMARY, COLOR_PRIMARY_OPACITY } from '../Utils/Palets';

export default function CardVeterinary() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.card}>
                <Image style={styles.img} source={require('../Images/doctor1.jpeg')} />
                    <View style={styles.data}>
                        <Text style={styles.name}>Dr. David Smith</Text>
                        <Text style={styles.subtitle}>Veterinary dentistry</Text>
                        <View style={styles.info}>
                            <Text style={styles.itemInfo}>150</Text>
                            <Text style={styles.itemInfo}>1.5 km</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.button}>
                <Text style={{color: 'white', fontSize: 20}}>{'>'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        backgroundColor: COLOR_PRIMARY_OPACITY,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    data: {
        marginLeft: 15,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000'
    },
    subtitle: {
        color: '#696969'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    itemInfo: {
        fontWeight: '500',
    },
    button: {
        backgroundColor: COLOR_PRIMARY,
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
    }
})