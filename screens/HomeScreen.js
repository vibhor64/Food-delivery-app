import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Platform, Image, TextInput, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { FONT, COLORS, SIZES, icons, images } from '../constants';
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserCircleIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import useCustomFonts from '../FontLoader';
import Categories from '../components/categories';
import Nearby from '../components/subComponents/Nearby';
import { useFonts } from 'expo-font';
import Featured from '../components/subComponents/Featured';
import LessThan from '../components/subComponents/LessThan';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
export default function HomeScreen() {
  const navigation = useNavigation();
     

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
      <View style={[styles.container, styles.boxShadow]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}>
        <Image source={{ uri: 'https://www.shutterstock.com/image-vector/man-riding-red-scooter-delivery-600nw-1701243736.jpg' }} style={styles.image} />

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 12, fontWeight: '500', color: 'gray' }}>Deliver Now!</Text>
          <Text style={{ fontSize: 20, fontWeight: '800'}}>Curent Location <ChevronDownIcon size={15} color={COLORS.primary} />
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>

        <UserCircleIcon size={32} color={COLORS.primary} />
        </TouchableOpacity>

      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',  margin:10 , marginTop: 0,backgroundColor: COLORS.gray, borderRadius: 10 }}>
          <MagnifyingGlassIcon color={COLORS.gray2} size={20} style={{marginLeft: 10}}  />
          <TextInput
            placeholder="Restaurants and cuisines"
            placeholderTextColor={COLORS.gray2}
            keyboardType="default"
            style={{width: 280, padding:8, paddingLeft: 10,}}
          />
        </View>
          <AdjustmentsVerticalIcon size={30} color={COLORS.green} style={{marginLeft: 0, flex: 1, marginTop: -10}} />
      </View>

      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10,
        paddingBottom: 30,
        paddingRight: 0,
      }}
      >
        <Categories/>
        <Nearby/>
        <Featured/>
        <LessThan/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: '#fff',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  boxShadow: {
    elevation: 2, // Use elevation property for Android
    shadowColor: COLORS.gray2, // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 50,
    // padding: 20
  }
});