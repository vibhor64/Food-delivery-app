import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { useLayoutEffect } from 'react';
import { ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import { COLORS } from '../constants';
import MenuItems from '../components/subComponents/menuItems';
import BasketIcon from '../components/subComponents/BasketIcon';
import { selectBasketItems } from '../features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant, setRestaurant } from '../features/restaurantSlice';

export default function RestaurantScreen() {
    const navigation = useNavigation();
    const items = useSelector(selectBasketItems);
    const items2 = useSelector(selectRestaurant);
    const dispatch = useDispatch();

    const { params: {
        id, imgUrl, title, rating, time, address
    } } = useRoute();
    
    useEffect(() => {
      
        dispatch(setRestaurant({
            id, imgUrl, title, rating, time, address
        }))
    }, [dispatch])


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <>
        {items.length>0 && (
        <BasketIcon key="basket-icon"/>
        )} 
        <ScrollView>
            <View style={{ width: '100%', height: 250, backgroundColor: '#000' }}>
                <Image source={{ uri: imgUrl }} resizeMode='cover' style={{ width: '100%', height: 250, opacity: 0.8 }} />
            </View>
            <View style={{ padding: 10, paddingBottom: 0, paddingTop: 0 }}>
                <Text style={{ fontSize: 27, fontWeight: 'bold', margin: 10 }}>{title}</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, }}>
                    <StarIcon size={15} color={COLORS.gray2} fill={COLORS.gray2} />
                    <Text style={{ color: COLORS.gray2, fontSize: 10, marginLeft: 5 }}>{rating} · 150+ Ratings | {time} </Text>
                    <MapPinIcon size={15} color={COLORS.gray2} />
                    <Text style={{ color: COLORS.gray2, fontSize: 10, marginLeft: 2 }}>{address}</Text>
                </View>
                <View style={{ backgroundColor: COLORS.white, borderRadius: 10, margin: 4, marginVertical: 10 }}>
                    <Text style={{ fontSize: 10, color: COLORS.gray2, fontWeight: '500', margin: 10 }}>{title} is best food ever. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas </Text>
                    <View style={{ height: 1, backgroundColor: COLORS.gray, marginHorizontal: 10 }}></View>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>

                            <QuestionMarkCircleIcon size={20} color={COLORS.gray2} />
                            <Text style={{ fontWeight: '900', fontSize: 12, marginLeft: 8 }}>Have a food allergy?</Text>
                            <ChevronRightIcon size={20} color={COLORS.blue} style={{ marginLeft: 'auto' }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 1, backgroundColor: COLORS.gray, marginHorizontal: 10 }}></View>
                </View>

            </View>

            <View >
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 6, marginHorizontal: 14, marginBottom: 10 }}>Menu</Text>
            </View>

            <FlatList
                data={
                    [
                        { 'Name': `Malai Mattar`, 'desc': 'Peas made in authentic Indian traditional gravy, mixed with spices from all around India', 'price': 10.50, 'imageUrl': 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                        { 'Name': `Chilli Garlic Noodles`, 'desc': 'Where aromatic garlic meets a kick of spicy chili, creating a delightful culinary symphony.', 'price': 9.50, 'imageUrl': 'https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                        { 'Name': `Chilli Paneer`, 'desc': 'Chilli Paneer cubes tossed in a zesty chili glaze', 'price': 16.50, 'imageUrl': 'https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                        { 'Name': `Fried Rice`, 'desc': 'Fried in mughal spices', 'imageUrl': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'price': 17 },
                        { 'Name': `Sushi`, 'desc': 'Experience exquisite bites of perfection with our expertly crafted sushi, a symphony of fresh flavors and delicate textures', 'price': 35.50, 'imageUrl': 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                        { 'Name': `Spring Roll`, 'desc': 'Crispy and flavorful, our Spring Rolls offer a delightful blend of vegetables or proteins wrapped in thin, golden perfection', 'price': 8.50, 'imageUrl': 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                    ]
                }
                renderItem={({ item, index }) => {
                    const id = index.toString();
                    const Name = item['Name'];
                    const imageUrl = item['imageUrl'];
                    const desc = item['desc'];
                    const price = item['price'];

                    return <MenuItems imageUrl={imageUrl} Name={Name} price={price} desc={desc} id={id} />;
                }}
                keyExtractor={(item, index) => index.toString()}
                // showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{ paddingHorizontal: 8, marginTop: 10 }}
                // ItemSeparatorComponent={() => <View style={{ marginHorizontal: 7 }} />}

            />
            <View style={{height:120}}></View>
        </ScrollView>
        </>
    );
}
