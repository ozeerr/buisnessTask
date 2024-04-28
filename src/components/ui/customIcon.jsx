import {  FlatList, StyleSheet,  View } from 'react-native'
import React from 'react'
import { iconPaths } from '../../utils/constants'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { verticalScale } from '../../utils/dimensions'
const CustomIcon = () => {
  return (
    <View style={styles.container}>
       <FlatList
       scrollEnabled={false}
       data={iconPaths}
       renderItem={({item})=>(
         <TouchableOpacity style={styles.buttonStyle}>
           {item.path}
         </TouchableOpacity>
       )}
       />
    </View>
  )
}

export default CustomIcon

const styles = StyleSheet.create({
    container:{
        position:"absolute",bottom:verticalScale(145),right:20,gap:12
    },
    buttonStyle:{
        padding:14,backgroundColor:"white",borderRadius:12,marginTop:15
    },
    imageStyle:{
        width:25,height:25
    }
})