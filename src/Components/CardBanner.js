import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import {COLOR_PRIMARY} from '../Utils/Palets';

export default function CardBanner() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Join our Pet Lover Community
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Join Now</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.img} source={require('../Images/pets.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_PRIMARY,
        width: 340,
        padding: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 30,
        width: 90,
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    img: {
        position: 'relative',
        height: 150,
        width: 200,
        top: 20,
        left: -140,
    },
});
