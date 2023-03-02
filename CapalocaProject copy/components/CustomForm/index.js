import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

const CustomForm = (props) => {

    const {name, placeholder, onChange, secureTextEntry} = props;

    return(
        <View style={[styles.container, props.style]}>
            <Text style={styles.name}>{name}</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder={placeholder} 
                onChange={onChange} 
                secureTextEntry={secureTextEntry}/>
        </View>
    );
}

export default CustomForm;