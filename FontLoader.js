import { useFonts } from 'expo-font';

export default function useCustomFonts() {
    const [fontsLoaded] = useFonts({
      // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      // DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
      // DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
      // DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
      PopLight: require('./assets/fonts/Poppins-Light.ttf'),
      PopThin: require('./assets/fonts/Poppins-Thin.ttf'),
      PopRegular: require('./assets/fonts/Poppins-Regular.ttf'),
      PopMedium: require('./assets/fonts/Poppins-Medium.ttf'),
      PopSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
      PopBold: require('./assets/fonts/Poppins-Bold.ttf'),
      PopExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
      PopBlack: require('./assets/fonts/Poppins-Black.ttf')
    });
}