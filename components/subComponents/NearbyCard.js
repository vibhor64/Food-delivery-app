import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { useFonts } from 'expo-font';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const Fonter = () => {
    const [fontsLoaded] = useFonts({
        'PopBold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'PopLight': require('../../assets/fonts/Poppins-Light.ttf'),
        'PopMed': require('../../assets/fonts/Poppins-Medium.ttf'),
        'PopThin': require('../../assets/fonts/Poppins-Thin.ttf'),
        'PopBlack': require('../../assets/fonts/Poppins-Black.ttf'),
        'PopExtra': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
        'PopSemi': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'PopReg': require('../../assets/fonts/Poppins-Regular.ttf'),
    });
}

export default function NearbyCard({ imgUrl, title, rating, time, address }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => { navigation.navigate('Restaurant', {
            id: 1,
            imgUrl: imgUrl,
            title: title,
            rating: rating,
            time: time,
            address: address,
        }) }}>
            <Image source={{ uri: imgUrl }} resizeMode='cover' style={styles.image} />
            <View style={{ padding: 5, paddingHorizontal: 15, marginBottom:5 }}>

                <Text style={{ fontSize: 20, marginBottom:0, fontWeight: '800', }}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin:0, padding:0, marginTop:3, marginBottom:1 }}>
                    <StarIcon size={15} color={COLORS.gray2} fill={COLORS.gray2} />
                    <Text style={{color: COLORS.gray2, fontSize: 10, marginLeft: 5}}>{rating} | {time}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', margin:0, padding:0,marginBottom:3 }}>
                    <MapPinIcon size={15} color={COLORS.blue} />
                    <Text style={{color: COLORS.gray2, fontSize: 10, marginLeft: 5, marginTop:3}}>Nearby · {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 2,
        marginBottom: 10,
        flex:1,
        backgroundColor: COLORS.white, // Set background color for Android shadow
        shadowColor: '#000000', // Set shadow color for iOS shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,
        borderRadius: 8,
        overflow: 'hidden',

    },
    image: {
        width: 230,
        height: 130,
        // opacity: 0.5,
        // backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        overflow: 'hidden',
    },
});
