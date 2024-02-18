import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants';
import BasketScreen from '../../screens/BasketScreen';

export default function BasketIcon() {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    return (
        <>
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={toggleModal}
            style={{ position: 'absolute', bottom: 30, width: '90%', justifyContent: 'space-between', zIndex: 1, backgroundColor: COLORS.orange, alignSelf: 'center', padding: 17, borderRadius: 8, flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center', transform: [{ scale: isPressed ? 0.95 : 1 }] }}
        >
            {/* <View style={{}}> */}
            <View style={{ backgroundColor: '#de632f', borderRadius: 50, height: 30, width: 30, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: COLORS.white, fontSize: 14 }}>{items.length}</Text>

            </View>
            <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 14 }}>View Basket</Text>
            <Text style={{ color: COLORS.white, fontSize: 14, }}>${basketTotal}</Text>

            {/* </View> */}
        </Pressable>
        <BasketScreen isVisible={isModalVisible} closeModal={toggleModal}  />
        </>
    );
}

