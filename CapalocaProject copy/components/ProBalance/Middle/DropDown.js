import { View, Text } from 'react-native'
import {Entypo } from '@expo/vector-icons'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import styles  from '../styles'
const DropDown = () => {
    const years = ["This year", "2023", "2022", "2021"]
  return (
    <View style={styles.MidSelectContainer}>
          <View style={{alignItems: 'flex-end', paddingEnd: "10%"}}>
          <SelectDropdown
	          data={years}
	          onSelect={(selectedItem, index) => {
		          console.log(selectedItem, index)}
            }
            dropdownIconPosition = "right"
            renderDropdownIcon={isOpened => {
              return <Entypo name={isOpened ? 'chevron-small-up' : 'chevron-small-down'} color={'#AFC170'} size={15} />;
            }}
            defaultValue={"This year"}
            buttonStyle={styles.SelectButton}
            buttonTextStyle={styles.SelectButtonText}
            dropdownStyle={styles.SelectDropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
            
            />
          </View>
        </View>
  )
}

export default DropDown