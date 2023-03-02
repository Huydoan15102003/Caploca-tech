import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles';

const BoardingScreenItem = (props) => {
    const nav = useNavigation();

    const onPress = () => {
        nav.navigate(props.link)
    }
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/boardingScreenImages/pic1.png')}/>
            <View style={styles.midContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.description}</Text>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text style={styles.textBtn}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BoardingScreenItem;