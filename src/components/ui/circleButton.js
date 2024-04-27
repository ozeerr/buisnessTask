import { StyleSheet,  TouchableOpacity} from 'react-native'
import React from 'react'
import MenuIcon from '../../assets/svg/menu.svg'

const CircleButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
    <MenuIcon style={styles.imageStyle}/>
  </TouchableOpacity>
  )
}

export default CircleButton

const styles = StyleSheet.create({
    container:{
        padding:14,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100
    },
    imageStyle:{
        width:25,height:25
    }
})