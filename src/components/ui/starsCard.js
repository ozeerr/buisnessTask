import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width } from '../../utils/constants'
import LinearGradient from 'react-native-linear-gradient';


const StartsCard = () => {
  return (
    <LinearGradient  colors={['#0066FF', '#3E8BFF']} style={{width:width*0.16,height:33,borderRadius:32,flexDirection:"row",gap:5,alignItems:"center",justifyContent:"center"}}>
    <Image  source={require("../../assets/stars.png")}/>
    <Text style={{color:"white",fontSize:15,fontWeight:500}}>5</Text>
</LinearGradient>
  )
}

export default StartsCard

const styles = StyleSheet.create({})

