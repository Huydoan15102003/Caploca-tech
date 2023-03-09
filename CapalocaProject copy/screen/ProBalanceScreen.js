import { View, Text } from 'react-native'
import React from 'react'
import styles  from '../components/ProBalance/styles'
import Header from '../components/ProBalance/Header/Header'
import Middle from '../components/ProBalance/Middle'
import Bottom from '../components/ProBalance/Bottom'
const ProBalanceScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Middle/>
      <Bottom/>
    </View>
  )
}

export default ProBalanceScreen