import React, {useContext} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {COLOR_SECONDARY} from '../Utils/Palets';
import CardBanner from '../Components/CardBanner';
import CardCategory from '../Components/CardCategory';
import CardVeterinary from '../Components/CardVeterinary';
import { UserContext } from '../Context/User';

const dataCategory = [
    {
        id: "1",
        icon: require('../Images/huella.png'),
        title: "Veterinary",
        isActive: true,
    },
    {
        id: "2",
        icon: require('../Images/ducha.png'),
        title: "Grooming",
        isActive: false,
    },
    {
        id: "3",
        icon: require('../Images/collar.png'),
        title: "Accessories",
        isActive: false,
    },
    {
        id: "4",
        icon: require('../Images/comida.png'),
        title: "Foods",
        isActive: false,
    },
]

export default function Home({navigation}) {
    const {user} = useContext(UserContext)

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={{margin: 10}}>
            <View style={styles.head}>
                <View>
                    <Text style={styles.name}>Hi {user.name}</Text>
                    <Text style={styles.subtitle}>Welcome!</Text>
                </View>
                <Image style={styles.img} source={require('../Images/jhon.jpeg')} />
            </View>
            <View style={styles.cardBanner}>
                <CardBanner/>
            </View>
            <View>
                <View style={styles.sectionHead}>
                    <Text style={styles.titleCategory}>Category</Text>
                    <Text style={{color: COLOR_SECONDARY}}>Sell all</Text>
                </View>
                <FlatList 
                        data={dataCategory}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity key={item.id}>
                                <CardCategory isActive={item.isActive} title={item.title} icon={item.icon} />
                            </TouchableOpacity>
                        )}
                />
            </View>
            <View style={{marginTop: 10}}>
                <View style={styles.sectionHead}>
                    <Text style={styles.titleCategory}>Nearby Veterinary</Text>
                    <Text style={{color: COLOR_SECONDARY}}>Sell all</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <CardVeterinary />
                </View>
            </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: 'rgb(235,235,235)',
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
    }, 
    subtitle: {
        fontSize: 17,
        color: COLOR_SECONDARY,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    cardBanner: {
        alignItems: 'center',
    },
    sectionHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 10
    },
    titleCategory: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});
