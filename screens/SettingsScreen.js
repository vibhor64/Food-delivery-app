import { View, Text, TouchableOpacity, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
    const navigation = useNavigation();
    const [showButton, setShowButton] = useState(false);


    useEffect(() => {
        const backAction = () => {
          // Customize the condition based on when you want to disable the back button
          if (!showButton) {
            // Disable default back button behavior
            return true;
          } else {
            // Allow default back button behavior
            return false;
          }
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
        return () => backHandler.remove(); // Cleanup the event listener when the component is unmounted
    
      }, [showButton]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <Animatable.Image 
        source={require('../assets/images/rickroll.gif')}
        animation="slideInUp"
        iterationCount={1}
        style={{height: 200, width: 200, position: 'absolute'}} />
        {showButton && (
        <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#000', padding: 13, borderRadius: 3, margin: 30, position: 'absolute', bottom: 220}} onPress={() => navigation.goBack()}>
            <Text style={{color: '#03fc2c', fontSize: 12, }}>Go Back</Text>
        </TouchableOpacity>
        )}
    </View>
  )
}