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

export default function LessThan() {
  return (
    <View style={{backgroundColor: 'transparent', marginTop: 0}}>
      <View style={styles.header}>
        <View>
            <Text style={styles.title}>Less Than $10</Text>
            <Text style={styles.subtitle}>Best bang for bucks near you!</Text>
        </View>
        <TouchableOpacity>
        <ArrowRightIcon size={25} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <FlatList 
      data={
        [
            {'title': `Baka Sake`, 'rating': 4.8, 'time': '30 mins', 'image': 'https://images.unsplash.com/photo-1561535893-bb7a98c7ee45?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'address': 'Bagru'},
            {'title': `Moti Lal Chat Bhandar`, 'rating': 4.4, 'time': '20-30 mins', 'image': 'https://images.unsplash.com/photo-1589778314823-d1c2bde0a31b?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'address': 'Chula Vista'},
            {'title': `Mr. Cucoo Jumbo`, 'rating': 3.8, 'time': '40 mins', 'image': 'https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'address': 'Hilditch Manor'},
            {'title': `Xin-Xin-Xin`, 'rating': 5.0, 'time': '1 hour 20 mins', 'image': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'address': 'Yishun'},
            {'title': `Chipotle`, 'rating': 4.5, 'time': '50 mins', 'image': 'https://images.unsplash.com/photo-1553787499-4036afbbcd8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'address': 'Mega Mall'},
            
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
        marginTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title:{
        // fontFamily: 'PopBold',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subtitle:{
        fontSize: 12,
        color: COLORS.gray2,
        fontWeight: '500',
    }
});