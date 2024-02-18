// components/BottomModal.js
import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { ChevronRightIcon, LockClosedIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon, XCircleIcon, XMarkIcon } from 'react-native-heroicons/outline';


const BasketScreen = ({ isVisible, closeModal }) => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();
    const basketTotal = useSelector(selectBasketTotal);

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    const placeOrder = ()=>{
        navigation.navigate('PreparingOrderScreen');
        closeModal();
    }

    return (
        <Modal
            isVisible={isVisible}
            style={{ margin: 0, justifyContent: 'flex-end' }}
            onBackdropPress={closeModal}
            onBackButtonPress={closeModal}
            hideModalContentWhileAnimating={true}
            animationInTiming={400}
            animationOutTiming={400}
        >
            <View style={{ backgroundColor: '#e8e8e8', minHeight: '30%', maxHeight: '60%', flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: COLORS.white, padding: 16, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Basket</Text>
                        <Text style={{ fontSize: 12, color: COLORS.gray2 }}>{restaurant.title}</Text>
                    </View>

                    <TouchableOpacity onPress={closeModal} style={{ position: 'absolute', right: 16 }}>
                        {/* <XMarkIcon size={20} color={COLORS.gray2} /> */}
                        <XMarkIcon size={30} color={COLORS.orange} />
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', backgroundColor: COLORS.white, padding: 16, alignItems: 'center', marginVertical: 16 }}>
                    <Image source={{ uri: 'https://www.shutterstock.com/image-vector/man-riding-red-scooter-delivery-600nw-1701243736.jpg' }} style={{
                        width: 35,
                        height: 35,
                        // margin: 10,
                        borderRadius: 50,
                    }} />
                    <Text> Deliver in {restaurant.time}</Text>
                    <TouchableOpacity style={{ marginLeft: 'auto' }}>
                        <Text style={{ color: COLORS.orange, }}>Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: 16, marginVertical: 0, borderBottomColor: COLORS.gray, borderBottomWidth: 1 }}>
                            <Text style={{ color: COLORS.gray2, marginLeft: 5 }}>{items.length} x </Text>
                            <Image source={{ uri: items[0].imageUrl }} style={{
                                width: 35,
                                height: 35,
                                borderRadius: 50,
                                marginHorizontal: 10
                            }} />
                            <Text>{items[0].Name}</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto', alignItems: 'center' }}>
                                <Text style={{ color: COLORS.gray2, marginHorizontal: 10 }}>${items.length * items[0]?.price}</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto', marginHorizontal: 0 }} onPress={() => dispatch(removeFromBasket({ id: key }))}>
                                    <Text style={{ color: COLORS.orange, fontSize: 12 }}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>

            </View>
            <View backgroundColor={COLORS.white} style={{
                padding: 16, elevation: 10, shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 6,
                }, shadowOpacity: 0.21, shadowRadius: 6.65,
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: COLORS.gray2 }}>Subtotal</Text>
                    <Text style={{ fontSize: 12, color: COLORS.gray2, marginLeft: 'auto' }}>${basketTotal}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                    <Text style={{ fontSize: 12, color: COLORS.gray2 }}>Delivery</Text>
                    <Text style={{ fontSize: 12, color: COLORS.gray2, marginLeft: 'auto' }}>$3.99</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 12, fontWeight: '800' }}>Order Total</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 'auto' }}>${(basketTotal + 3.99).toFixed(2)}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.4} onPress={ ()=> placeOrder()} >
                    <View style={{ backgroundColor: COLORS.orange, padding: 16, borderRadius: 8, alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ color: COLORS.white }}>
                            Place Order
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default BasketScreen;
