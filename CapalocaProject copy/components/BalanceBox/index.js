import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles"
import { Ionicons } from '@expo/vector-icons'

const BalanceBox = () => {
    return(
            <View style={styles.container}>
                <View style={styles.viewContainer}>
                    <Text style={styles.title}>Your balance</Text>
                    <View style={styles.midContainer}>
                        <Text style={styles.currency}>VND</Text>
                        <Text style={styles.amount}>15,570,000</Text>
                    </View>
                    <View style={styles.botContainer}>
                        <Ionicons name='wallet-sharp' size={24} color='grey'/>
                        <Text style={styles.account}>Personal Account</Text>
                    </View>
                </View>
            </View>
    );
}

export default BalanceBox;