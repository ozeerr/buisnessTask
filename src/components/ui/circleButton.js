import { Image, StyleSheet,  TouchableOpacity} from 'react-native'
import React from 'react'

const CircleButton = () => {
  return (
    <TouchableOpacity style={{width:48,height:48,backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:100}}>
    <Image source={require('../../assets/menu_2.png')} style={{width:24,height:24}}/>
  </TouchableOpacity>
  )
}

export default CircleButton

const styles = StyleSheet.create({})