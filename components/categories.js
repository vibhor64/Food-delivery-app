import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import CategoryCard from './CategoryCard';

export default function Categories() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* <CategoryCard/> */}
            <FlatList
                data={[
                    { 'Offers': 'https://as1.ftcdn.net/v2/jpg/02/83/41/06/1000_F_283410687_AsxzE8LNRChPESb4wNk62w7usTHcpIBq.jpg' },
                { 'Pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { 'Thai': 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { 'Bites': 'https://images.unsplash.com/photo-1536974851270-95538a335a81?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                { 'Near You': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                    { 'Ramen': 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2020/12/shabu-ramen-social.jpg' },
                { 'Bakery': 'https://images.unsplash.com/photo-1658040523817-aade169a1a9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
            
                
            ]
                }
                renderItem={({ item }) => {
                    const categoryTitle = Object.keys(item)[0];
                    const imageUrl = item[categoryTitle];

                    return <CategoryCard imgUrl={imageUrl} title={categoryTitle} />;
                }}
                contentContainerStyle={{ paddingHorizontal: 8, marginTop: 10 }}
                ItemSeparatorComponent={() => <View style={{ marginHorizontal: 7 }} />}
                keyExtractor={(item) => Object.keys(item)[0]}
                horizontal
            />

        </ScrollView>
    );
}
