import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { width } from '../../utils/constants'
import LinearGradient from 'react-native-linear-gradient';
import StarIcon from '../../assets/svg/Vector.svg'
import { COLORS } from '../../colors';

const StartsCard = () => {
  return (
    <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[COLORS.darkblue, COLORS.blue]} style={styles.container}>
    <StarIcon/>
    <Text style={{color:"white",fontSize:15,fontWeight:500}}>5</Text>
    </LinearGradient>
  )
}

export default StartsCard

const styles = StyleSheet.create({
    container:{
        width:width*0.16,
        height:33,
        borderRadius:32,
        flexDirection:"row",
        gap:5,
        alignItems:"center",
        justifyContent:"center"
    }
})

