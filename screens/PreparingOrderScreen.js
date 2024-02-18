import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

export default function PreparingOrderScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000);
    }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#f7636b', flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: 100}}>
        <View style={{marginBottom: 20}}>

        <Animatable.Image 
        source={require('../assets/images/load.gif')}
        animation="slideInUp"
        iterationCount={1}
        style={{height: 400, width: 400}} />

        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{fontSize: 15, fontWeight: '900', textAlign: 'center', color: COLORS.white, marginVertical: 20}}>Waiting for Restaurant to accept your order!</Animatable.Text>
        </View>
        <Progress.Circle size={60} indeterminate={true} color={COLORS.white} style={{marginVertical: 20}} />
      
    </SafeAreaView>
  )
}