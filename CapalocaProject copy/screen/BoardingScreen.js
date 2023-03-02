import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import BoardingScreenItem from "../components/boardingScreenItem"
import { Text, View,  Dimensions  } from "react-native";
import SignInScreen from "../components/SignInScreen";
import GetPasswordScreen from "../components/GetPasswordScreen";
import CreateAccountScreen from "../components/CreateAccountScreen";


const Stack = createNativeStackNavigator();

const BoardingScreen = () => {
    return (
        <NavigationContainer>
            <View style={{width: '100%', height: '100%'}}>
            <Stack.Navigator 
                initialRouteName="SaveMoney"
                screenOptions={{    
                    title:'Capaloca',
                    headerTitleContainerStyle: {
                        width: Dimensions.get('window').width - 30,
                        alignItems:'center', 
                        display: 'flex',
                    },
                    headerTitleStyle: {
                        fontWeight: '600',
                        textTransform: 'uppercase'
                    },
                    headerBackTitleVisible: false,
                    headerBackTitleStyle:{
                        paddingRight: 10,
                    },
                    headerShadowVisible: false,
                    
                    
                }}
            >
                <Stack.Group>
                    <Stack.Screen name="SaveMoney" options={{
                        headerRight: () => (
                            <View style={{marginLeft: -30}}>
                                <Text>Skip</Text>
                            </View>
                        ),
                        headerRightContainerStyle:{
                            alignItems:'flex-start',
                            
                        },
                    }}>
                        {props => <BoardingScreenItem 
                                        title="Save Money" 
                                        link='CheckYourWallet'
                                        description="Keep track of your cash flow at any time, even in the future!"
                                    />}
                    </Stack.Screen>
                    <Stack.Screen name="CheckYourWallet" options={{
                        headerRight: () => (
                            <View style={{marginLeft: -30}}>
                                <Text>Skip</Text>
                            </View>
                        ),
                        headerRightContainerStyle:{
                            alignItems:'flex-start',
                            
                        },
                    }}>
                        {props => <BoardingScreenItem 
                                        title="Check your Wallet" 
                                        link='HaveAccessAnywhere'
                                        description="Manage your money and have a decent saving and investment!"
                                    />}
                    </Stack.Screen>
                    <Stack.Screen name="HaveAccessAnywhere" options={{
                        headerRight: () => (
                            <View style={{marginLeft: -30}}>
                                <Text>Skip</Text>
                            </View>
                        ),
                        headerRightContainerStyle:{
                            alignItems:'flex-start',
                            
                        },
                    }} >
                        {props => <BoardingScreenItem 
                                        title="Have access anywhere" 
                                        link='SignIn'
                                        description="Reach your financial goal with support from AI!"
                                    />}
                    </Stack.Screen>
                </Stack.Group> 
                <Stack.Group>
                    <Stack.Screen name='SignIn' component={SignInScreen}/>
                    <Stack.Screen name='GetPasswordScreen' component={GetPasswordScreen}/>
                    <Stack.Screen name='CreateAccountScreen' component={CreateAccountScreen}/> 
                </Stack.Group>
            </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
}

export default BoardingScreen;