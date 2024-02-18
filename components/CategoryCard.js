import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

export default function CategoryCard({ imgUrl, title }) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <ImageBackground source={{ uri: imgUrl }} style={styles.image} imageStyle={{ opacity: 0.7 }}>
                    <Text style={styles.title}>{title}</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 50,
        overflow: 'hidden',
        borderRadius: 5,
        justifyContent: 'flex-end', // Align children to the bottom
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white', // Text color
        marginLeft: 10,
        marginBottom: 5,
        // borderRadius: 10
    },
})