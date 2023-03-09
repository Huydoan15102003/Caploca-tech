import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles  from '../styles'
import { Ionicons, Entypo} from '@expo/vector-icons'

const MidHeader = () => {
  return (
    <View style={styles.MidBalanceContainer}> 
        <Ionicons name='wallet-sharp' size={24} color='#AFC170'/>
        <Text style={styles.MidBalanceNumber}>10,0</Text>  
        <TouchableOpacity  style={styles.PlushIconContainer}>
        <Entypo name='plus' color='#656F77' style={styles.PlushIcon} />
        </TouchableOpacity>
    </View>
  )
}

export default MidHeader