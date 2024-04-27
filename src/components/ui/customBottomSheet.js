import {  StyleSheet, View } from 'react-native'
import React, { useMemo } from 'react'
import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RouteIcon from '../../assets/svg/route.svg'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../colors';
const CustomBottomSheet = (props) => {
    const snapPoints = useMemo(() => ['15%'], []);
  
  return (
    <GestureHandlerRootView style={styles.container}>
        {props.children}
    <BottomSheet snapPoints={snapPoints} handleIndicatorStyle={styles.handleIndicatorStyle}>
      <View style={styles.contentContainer}>
       <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[COLORS.darkblue, COLORS.blue]}   style={styles.iconWrapper}>
        <RouteIcon width={35} height={35}/>
       </LinearGradient>
        <BottomSheetTextInput
          placeholder="Nereye Gidiyorsun?"
          style={styles.textInput}
        />
      </View>
    </BottomSheet>
</GestureHandlerRootView>
  )
}

export default CustomBottomSheet

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    textInput: {
        flex: 1,
        alignSelf: 'stretch',
        padding: 12,
        borderRadius: 12,
        color: 'black',
        textAlign: 'start',
        height: 60,
      },
      contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(151, 151, 151, 0.10)',
        minHeight: 60,
        borderRadius: 12,
      },
      iconWrapper:{
        padding:9,
        borderRadius:10,
        margin:5
      },
      handleIndicatorStyle:{
        backgroundColor:"gray",opacity:0.8
      }
})