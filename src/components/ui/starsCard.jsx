import { StyleSheet, Text} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import StarIcon from '../../assets/svg/Vector.svg'
import { COLORS } from '../../colors';
import { horizontalScale, verticalScale } from '../../utils/dimensions';

const StartsCard = () => {
  return (
    <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[COLORS.darkblue, COLORS.blue]} style={styles.container}>
    <StarIcon/>
    <Text style={styles.text}>5</Text>
    </LinearGradient>
  )
}

export default StartsCard

const styles = StyleSheet.create({
    container:{
        width:horizontalScale(70),
        height:verticalScale(30),
        borderRadius:32,
        flexDirection:"row",
        gap:5,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"white",
        fontSize:15,
        fontWeight:500
    }
})

