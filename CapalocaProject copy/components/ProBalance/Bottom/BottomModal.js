import { View, Text, Image } from 'react-native'
import React, { useRef}  from 'react'
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import styles  from '../styles'

const BottomModal = () => {
    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = ["10%","50%", "90%"]; 
  return (
    <BottomSheet
      ref={this.sheetRef}
      snapPoints={snapPoints}
      backgroundComponent={({ style }) => (
        <View style={[style, styles.BotSheetBackground]} />
      )}
      handleComponent={() =>
        <View style={styles.closeLineContainer}>
          <View style={styles.closeLine}></View>
        </View>
      }
      >
        <BottomSheetScrollView   >
          <Text style={styles.BottomSheetHeader}>History</Text>

          <View style={styles.BotSheetContainer}>

            <Text style={styles.BotSheetDay}>Thursday 02/16/2023 ( today)</Text>

            <View style={{flexDirection: "row", height: 40, marginTop: 10}}>
              <View style={{flex: 1}}>
                <View style={styles.BotSheetImgContainer}>
                  <Image style= {styles.BotSheetImg}   alt="..." source={require('../../../assets/boardingScreenImages/pic1.png')}/>
                </View>
              </View>
              <View style={{flex: 1.5}}>
                <Text style={styles.BotSheetTo}>VNPT</Text>
                <Text style={styles.BotSheetInfo}>Electirc Bill</Text>
              </View>
              <View style={{flex: 2.5}}>
                <Text style={styles.BotSheetMoney}>-2,250,000</Text>
                <Text style={styles.BotSheetTime}>1:30 PM</Text>
              </View>
            </View>

            <View style={{flexDirection: "row", height: 40, marginTop: 10}}>
              <View style={{flex: 1}}>
                <View style={styles.BotSheetImgContainer}>
                  <Image style= {styles.BotSheetImg}   alt="..." source={require('../../../assets/boardingScreenImages/pic1.png')}/>
                </View>
              </View>
              <View style={{flex: 1.5}}>
                <Text style={styles.BotSheetTo2}>Mrs.Ha</Text>
                <Text style={styles.BotSheetInfo2}>Salary</Text>
              </View>
              <View style={{flex: 2.5}}>
                <Text style={styles.BotSheetMoney2}>-2,250,000</Text>
                <Text style={styles.BotSheetTime}>1:30 PM</Text>
              </View>
            </View>
          </View>
          
        </BottomSheetScrollView>
        
      </BottomSheet>
  )
}

export default BottomModal