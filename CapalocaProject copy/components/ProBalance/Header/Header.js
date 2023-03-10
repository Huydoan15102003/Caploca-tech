import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles  from '../styles'
const Header = () => {
  return (
    <View style={styles.TopContainer}>
        <TouchableOpacity style={styles.TopLeftBorder} onPress={()=> navigation.goBack()}>
          <Image style={styles.VectorPNG} source={require("../../../assets/ProBalanceImgs/Vector4.png")}/>
        </TouchableOpacity>
        <View style={styles.TopMidBorder}>
          <Text style={styles.textIcon}>Balance</Text>
        </View>
        <View style={styles.TopRightBorder}>
          <Text style={styles.skipIcon}>&nbsp;</Text>
        </View>
    </View>
  )
}

export default Header