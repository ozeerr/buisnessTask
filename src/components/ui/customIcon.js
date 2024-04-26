import { Image, StyleSheet,  View } from 'react-native'
import React from 'react'
import { iconPaths } from '../../utils/constants'
import { height } from '../../utils/constants'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
const CustomIcon = () => {
  return (
    <View style={styles.container}>
        {iconPaths.map((item,index)=>(
            <TouchableOpacity key={index} style={styles.buttonStyle} >
                <Image source={item.path} style={styles.imageStyle}/>
            </TouchableOpacity>
        ))}
    </View>
  )
}

export default CustomIcon

const styles = StyleSheet.create({
    container:{
        position:"absolute",bottom:height*0.18,right:20,gap:12
    },
    buttonStyle:{
        padding:12,backgroundColor:"white",borderRadius:12
    },
    imageStyle:{
        width:25,height:25
    }
})