import React from 'react';
import {Text, View, StyleSheet, Image, requireNativeComponent} from 'react-native';
import {COLOR_PRIMARY} from '../Utils/Palets'


export default function Category({title, icon, isActive}) {
    return (
        <View style={styles.container}>
            <View style={[styles.circle, isActive ? { backgroundColor: COLOR_PRIMARY} : { backgroundColor: '#cdcdcd'}]}>
                <Image style={styles.img} source={icon} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        alignItems: 'center',
        height: 90,
    },
    circle: {
        borderRadius: 50,
        marginBottom: 10,
        padding: 10,
    },
    img: {
        width: 40,
        height: 40
    },
    title: {
        textAlign: 'center',
        fontWeight: '500'
    },
})