import React from "react";
import { View, Image, Text } from "react-native";
import CustomBtn from "../CustomButton";
import CustomForm from "../CustomForm";
import styles from "./styles";

const GetPassword = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/boardingScreenImages/pic1.png')}/>
            <Text style={styles.greeting}>Get Your Password Back!</Text>
            <CustomForm style={styles.form} name='Email Address' placeholder='Enter your email address'/>
        </View>
    );
}

export default GetPassword;