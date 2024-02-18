import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { ChevronLeftIcon, XMarkIcon } from 'react-native-heroicons/outline';
import { COLORS } from '../constants'
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps'



export default function Delivery() {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    

    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            navigation.navigate('Home');
    //       // Return true to prevent the default behavior (going back)
          return true;
          };
    
          const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () => subscription.remove();
        }, [])
      );

      
    
    return (
        <View>
            <View style={{ backgroundColor: '#00d6a8', height: 250 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', marginTop: 30 }}>
                    <XMarkIcon size={30} color='white' onPress={() => navigation.navigate('Home')} />
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={{ color: 'white', fontSize: 14, }}>Order Help</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                backgroundColor: 'white', height: 170, width: '90%', alignSelf: 'center', position: 'absolute', top: 110, borderRadius: 6, padding: 20, elevation: 5, shadowColor: '#000000', zIndex: 1,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                borderRadius: 8, justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 16, fontWeight: 500, color: COLORS.gray }}>Estimated Arrival</Text>
                <Text style={{ fontSize: 26, fontWeight: 'bold', }}>{restaurant.time}</Text>
                <Progress.Bar progress={0.3} width={200} indeterminate={true} color='#07e8b8' style={{ marginVertical: 10 }} />
                <Text style={{ fontSize: 13, fontWeight: 300, color: COLORS.gray2 }}>Your order at {restaurant.title} is being prepared</Text>
                <Image style={{ width: 80, height: 80, alignSelf: 'flex-end', position: 'absolute', top: 30, right: 13 }} source={{ uri: 'https://ouch-cdn2.icons8.com/aBnip8VB9cNYV9qJaJh_cJvYVAEzS1ojrIwXtfL7bhc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzU3/Lzc4OTFmNGU3LTM1/ZDMtNDI0ZC1hYTg3/LWY0ZjkwYWU4ZDE3/Yy5zdmc.png' }} />
            </View>
            <MapView
                initialRegion={{
                    latitude: 26.897611,
                    longitude: 75.809344,
                    latitudeDelta: 0.006,
                    longitudeDelta: 0.006,
                }
                }
                style={{ width: '100%', height: '57%', alignSelf: 'center' }} mapType='mutedStandard'

            >
                <Marker coordinate={{ latitude: 26.897611, longitude: 75.809344 }}
                    title='{restaurant.title}'
                    description={restaurant.desc}
                    identifier='origin}'
                    pinColor='#07e8b8'
                />
            </MapView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', height: 92, width: '100%', alignSelf: 'center', padding: 20 }}>
                <View style={{flexDirection:'row',alignItems:'center'}}>

                    <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://niceillustrations.com/wp-content/uploads/2020/09/Food-Delivery.png' }} />
                    <View style={{marginLeft:20}}>
                        <Text style={{fontWeight:'bold', fontSize:14}}>Vibhor Sharma</Text>
                        <Text style={{fontSize:12, color:COLORS.gray2}}>Your Rider</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: '#07e8b8' }}>Call</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0 }}>
            </SafeAreaView>
        </View>
    )
}