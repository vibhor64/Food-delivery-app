import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../../features/basketSlice';

export default function MenuItems({imageUrl, Name, price, desc, id}) {
    // const [quantity, setQuantity] = useState(0);
    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector( (state) => selectBasketItemsWithId(state, id));
    const dispatch = useDispatch();
    let quantity = items.length;
    // console.log(items);

    const addItemToBasket = () => {
        dispatch(addToBasket({id, imageUrl, Name, price, desc}));
    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}));
    }

    const bigPress = () => {
        setIsPressed(!isPressed);
    }

    const handlePlus = () => {
      if(quantity < 10){
      // setQuantity(quantity + 1);
      addItemToBasket();
    }}
    const handleMinus = () => {
        if(quantity > 0){
        // setQuantity(quantity - 1);
        removeItemFromBasket();
    }}
    

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={bigPress}>
        <View style={{backgroundColor: '#fff', padding: 13, paddingTop: 5, paddingBottom:0,borderBottomWidth: 1, borderBottomColor: COLORS.gray, borderStyle: 'solid'}}>
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1, justifyContent: 'center',}}>
        <Text style={{fontSize: 18, fontWeight: '200', marginBottom: 2}}>{Name}</Text>
        <Text style={{fontSize: 10, fontWeight: '500', color: COLORS.gray2}}>{desc}</Text>
        <Text style={{fontSize: 12, fontWeight: '500', color: COLORS.gray2, margin: 3}}>${price}</Text>
      </View>
      <Image source={{ uri: imageUrl }} resizeMode='cover' style={{width: 80, height: 80, marginLeft: 3, borderRadius: 50, marginVertical: 15}} />

     </View>
     {isPressed && (

       <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center', }}>
        <TouchableOpacity onPress={handleMinus}>
        <MinusCircleIcon color={ items.length>0 ? COLORS.orange : COLORS.gray} size={24} />
        </TouchableOpacity>
        <Text style={{fontSize: 14, fontWeight: '200', marginHorizontal: 10}}>{items.length}</Text>
        <TouchableOpacity onPress={handlePlus}>
        <PlusCircleIcon color={items.length<10 ? COLORS.orange : COLORS.gray} size={24} />
        </TouchableOpacity>
       </View>
       )}
     </View>
     </TouchableOpacity>

  );
}
