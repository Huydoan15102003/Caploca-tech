import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Text, TouchableOpacity, Pressable} from "react-native";
import CustomBtn from "../CustomButton";
import CustomForm from "../CustomForm";
import styles from "./styles";

const SignInScreen = () => {

    const nav = useNavigation();

    const onPress = () => {
        nav.navigate('GetPasswordScreen');
    }

    const onPressToSignUp = () => {
        nav.navigate('CreateAccountScreen');
    }
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/boardingScreenImages/pic1.png")}/>
            <Text style={styles.greeting}>
                Hi! Welcome Back! 👋
            </Text>
            <View style={styles.form}>
                <CustomForm 
                    name='Email Address' 
                    placeholder='Enter your email address'/>
                <CustomForm 
                    name='Password'
                    placeholder='Enter your password'
                    secureTextEntry={true}/>
            </View>
            <View style={styles.midContainer}>
                <View>
                    <Text style={styles.rememberMe}>Remember Me</Text>
                </View>
                <Pressable onPress={onPress}>
                    <Text style={styles.forgotPassword}>Forgot Password</Text>
                </Pressable>
            </View>
            <Text style={{
                fontSize: 16, 
                fontWeight: '500', 
                color: 'grey',
                marginBottom: 28.5,
                }}>{"Don't have an account? "}
                <Pressable onPress={onPressToSignUp}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </Pressable>
            </Text>
            <Text style={styles.otherMethod}>Or Sign In with</Text>
            <CustomBtn nameBtn='Sign In'/>
        </View>
    );
}

export default SignInScreen;