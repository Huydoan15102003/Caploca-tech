import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import ProHome from './components/proHome';
// import CreateAccountScreen from './components/CreateAccountScreen';
// import GetPassword from './components/GetPassword';
// import SignInScreen from './components/SignInScreen';
// import VerifyPassword from './components/VerifyPassword';
// import BoardingScreen from './screen/BoardingScreen';
// import BalanceBox from './components/BalanceBox';
import BoxSlide from './screen/BalanceSlide';
import ProBalanceScreen from './screen/ProBalanceScreen';

import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import {GestureHandlerRootView} from 'react-native-gesture-handler'


export default function App() {
  //load fonts
  const [fontLoaded] = useFonts({
    "Montserrat": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  useEffect(()=>{
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if(!fontLoaded){
    return undefined;
  }else{
    SplashScreen.hideAsync();
  }

  //main app
  return (
    <GestureHandlerRootView  style={styles.container}>
      <ProBalanceScreen/>
      <StatusBar style="auto" />
      
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
