import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { useFonts } from 'expo-font';
import { COLORS } from '../../constants';
import NearbyCard from './NearbyCard';

const Fonter=()=> {
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

export default function Nearby() {
  return (
    <View>
      <View style={styles.header}>
        <View>
            <Text style={styles.title}>Offers Near You!</Text>
            <Text style={styles.subtitle}>Why not support your local restaurant tonight?</Text>
        </View>
        <TouchableOpacity>
        <ArrowRightIcon size={25} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <FlatList 
      data={
        [
            {'title': `Nando's`, 'rating': 4.8, 'time': '30 minutes', 'image': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'address': 'Clink Street'},
            {'title': `Pinniata!`, 'rating': 4.4, 'time': '20-30 minutes', 'image': 'https://images.unsplash.com/photo-1633436374784-7f9502eb348a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'address': 'Yash Ki Thadi'},
            {'title': `Royal Rodies`, 'rating': 3.8, 'time': '40 minutes', 'image': 'https://images.unsplash.com/photo-1547253836-a00cbde8a35e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'address': 'Hilditch Manor'},
            {'title': `Ichiraku's`, 'rating': 5.0, 'time': '1 hour 20 minutes', 'image': 'https://i.ytimg.com/vi/6rioJ_5MoGk/maxresdefault.jpg', 'address': 'Konoha Village'},
            {'title': `Kebabistan`, 'rating': 4.5, 'time': '50 minutes', 'image': 'https://plus.unsplash.com/premium_photo-1661310177352-f586bf23a403?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'address': 'Marina Bay'},
            
        ]
      }
      renderItem={({ item }) => {
        const title = item['title'];
        const imageUrl = item['image'];
        const rating = item['rating'];
        const time = item['time'];
        const address = item['address'];
    
        return <NearbyCard imgUrl={imageUrl} title={title} rating={rating} time={time} address={address} />;
      }}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 8, marginTop: 10 }}
      ItemSeparatorComponent={() => <View style={{ marginHorizontal: 7 }} />}

      />
     </View>
  );
}

const styles = StyleSheet.create({
    header:{
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold',
      // fontFamily: 'PopBold',
    },
    subtitle:{
        fontSize: 12,
        color: COLORS.gray2,
        fontWeight: '500',
    }
});