import { View, Text } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons } from '@expo/vector-icons'
import styles  from '../styles'
const MidBalanceInfo = () => {
  return (
    <View style={styles.MidBalanceInfoContainer}>
        <View style={styles.Income}>
        <View style={styles.BalanceBorderLeft}>
            <MaterialCommunityIcons name='arrow-up-bold-circle' size={40} color='#AFC170'/> 
        </View>
        <View style={styles.BalanceBorderRight}>
            <Text style={{color: '#AFC170', fontFamily: 'Montserrat'}}>Income</Text>
            <Text style={{color: '#AFC170', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>30,000,000</Text>
        </View>
        </View>
        <View style={styles.Outcome}>
            <View style={styles.BalanceBorderLeft}>
            <MaterialCommunityIcons name='arrow-down-bold-circle' size={40} color='#FFBCA4'/> 
            </View>
            
            <View style={styles.BalanceBorderRight}>
            <Text style={{color: '#FFBCA4', fontFamily: 'Montserrat'}}>Outcome</Text>
            <Text style={{color: '#FFBCA4', fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>20,000,000</Text>
            </View>
        </View>
    </View>
        
  )
}

export default MidBalanceInfo