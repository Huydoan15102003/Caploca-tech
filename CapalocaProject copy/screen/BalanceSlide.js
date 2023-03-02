import React from "react";
import { ScrollView, View } from "react-native";
import BalanceBox from "../components/BalanceBox";

const BoxSlide = () => {
    return (
        <ScrollView style={{
            marginTop: 50,
        }} horizontal={true}>
            <BalanceBox/>
            <BalanceBox/>
            <BalanceBox/>
        </ScrollView>
    );
}

export default BoxSlide;