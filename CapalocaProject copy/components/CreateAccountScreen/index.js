import React from "react";
import { View, Image, Text } from "react-native";
import CustomBtn from "../CustomButton";
import CustomForm from "../CustomForm";
import styles from "./styles";

const CreateAccountScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/boardingScreenImages/pic1.png')}/>
            <Text style={styles.createAccount}>Create Account</Text>
            <View style={styles.midContainer}>
                <CustomForm name='Full Name' placeholder='Enter your name'/>
                <CustomForm name='Email Address' placeholder='Enter your email address'/>
                <CustomForm name='Password' placeholder='Enter your password' secureTextEntry={true}/>
            </View>
            <View style={styles.botContainer}>
                <Text style={styles.signIn}>Or Sign In with</Text>
            </View>
            <CustomBtn style={{alignSelf: 'center', marginTop: -15,}} nameBtn='Continue'/>
        </View>
    );
}

export default CreateAccountScreen;