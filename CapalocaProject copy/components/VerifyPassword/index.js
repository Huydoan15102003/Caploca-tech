import React from "react";
import { Image, View, Text } from 'react-native';
import styles from './styles';
import GetPassword from '../GetPassword'
import CustomBtn from "../CustomButton";

const VerifyPassword = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/boardingScreenImages/pic1.png')}/>
            <Text style={styles.greeting}>Get Your Password Back!</Text>
            <View styles={styles.midContainer}>
                <Text style={styles.verifyEmail}>Verify your Email:</Text>
                <Text style={styles.codeSent}>{'Enter the code sent to '}<Text style={styles.email}>Capaloca@gmail.com</Text></Text>
            </View>
            <CustomBtn style={styles.btn} nameBtn='Continue'/>
        </View>
    );
}

export default VerifyPassword;