import React from "react";
import { View, Image, Text } from "react-native";
import CustomBtn from "../CustomButton";
import CustomForm from "../CustomForm";
import styles from "./styles";

const GetPasswordScreen = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/boardingScreenImages/pic1.png')}/>
            <Text style={styles.greeting}>Get Your Password Back!</Text>
            <CustomForm style={styles.form} name='Email Address' placeholder='Enter your email address'/>
            <CustomBtn style={{marginTop: -150}}nameBtn='Continue'/>
        </View>
    );
}

export default GetPasswordScreen;