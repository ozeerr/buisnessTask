import { Image, StyleSheet, View } from 'react-native'
import React, { useMemo } from 'react'
import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const CustomBottomSheet = (props) => {
    const snapPoints = useMemo(() => ['15%'], []);
   
  return (
    <GestureHandlerRootView style={styles.container}>
        {props.children}
    <BottomSheet snapPoints={snapPoints} handleIndicatorStyle={{backgroundColor:"gray",opacity:0.8}}>
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/nereye.png')}
          style={styles.imageStyle}
        />
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
        height: 60,
        borderRadius: 12,
      },
      imageStyle:{
        width: 50,
        height: 50,
        margin: 5
      }
})