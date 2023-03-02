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
export default function App() {
  return (
    <View style={styles.container}>
      <BoxSlide/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
