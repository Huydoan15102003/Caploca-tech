import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";

const CustomBtn = (props) => {
    return(
            <TouchableOpacity style={[styles.btn, props.style]}>
                <Text style={styles.textBtn}> {props.nameBtn} </Text>
            </TouchableOpacity>
    );
}

export default CustomBtn;