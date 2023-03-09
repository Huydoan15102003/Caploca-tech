import { View, Text } from 'react-native'
import React from 'react'
import styles  from '../styles'
import MidHeader from './MidHeader'
import DropDown from './DropDown'
import MidChart from './MidChart'
import MidBalanceInfo from './MidBalanceInfo'
const Middle = () => {
  return (
    <View style={styles.MidContainer}>
      <MidHeader/>
      <DropDown/>
      <MidChart/>
      <MidBalanceInfo/>
      
    </View>
  )
}

export default Middle