import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import Delivery from './screens/Delivery';
import PreparingOrderScreen from './screens/PreparingOrderScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const navigateToRestaurant = (id, imgUrl, title, rating, time, address) => {
    navigation.navigate('Restaurant', {
      id,
      imgUrl,
      title,
      rating,
      time,
      address,
    });
  };

  return (
    <DrawerContentScrollView>
      <DrawerItem label="Home" onPress={() => navigation.navigate('Home')} />
      <DrawerItem label="Profile Settings" onPress={() => navigation.navigate('Profile Settings')} />
      <DrawerItem
        label="Burger King"
        onPress={() =>
          navigateToRestaurant(1, 'image_url', 'Burger King', 4.8, '30-40 minutes', 'Bagru Gao')
        }
      />
      <DrawerItem
        label="Ichiraku's"
        onPress={() =>
          navigateToRestaurant(5, 'image_url', `Ichiraku's`, 5.0, '1 hour 20 minutes', 'Konoha Village')
        }
      />
    </DrawerContentScrollView>
  );
};

const HomeStack = ({ route }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => null }} />
      <Stack.Screen name="Profile Settings" component={SettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Group screenOptions={{ presentation: 'fullScreenModal', headerShown: false }}>
        <Stack.Screen name="Delivery" component={Delivery} options={{ headerShown: false }} />
        <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            activeTintColor: 'tomato',
            itemStyle: { marginVertical: 5 },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeStack}
            options={({ route }) => ({
              headerShown: false,
              drawerLabel: getDrawerLabel(route),
            })}
          />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

const getDrawerLabel = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  return routeName === 'Home' ? 'Home' : null;
};

export default App;
