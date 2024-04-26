import React, { useEffect } from 'react'
import { StyleSheet,  View } from 'react-native'
import MapboxGL from '@rnmapbox/maps';


const MapboxComponent = () => {

    useEffect(()=>{
        MapboxGL.setAccessToken('sk.eyJ1IjoiYWhtZXRvemVyIiwiYSI6ImNsdmZhd3NyajAxNWIycG1zcW55cWRmbXUifQ.FFpvVAfyS6qE7ERez3JshA');
       },[])

  return (
   <View style={styles.container}>
     <MapboxGL.MapView style={styles.map} minZoomLevel={15} zoomEnabled={true} styleURL='mapbox://styles/mapbox/streets-v12'  rotateEnabled={true} >
          <MapboxGL.Camera
            zoomLevel={16}
            centerCoordinate={[32.744755969281854,39.869942587622276]}
            animationMode='flyTo'
            animationDuration={4000}
          />
          <MapboxGL.PointAnnotation
            id="pointAnnotation"
            coordinate={[ 32.744755969281854,39.869942587622276]}
          >
            <View style={styles.currentLocationWrapperStyle} >
              <View style={styles.currentLocationStyle}/>
            </View>
          </MapboxGL.PointAnnotation>
        </MapboxGL.MapView>
   </View>
  )
}

export default MapboxComponent

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    container: {
      height: '100%',
      width: '100%',
      position:"absolute",
    },
    currentLocationWrapperStyle:{
        height: 48,
              width: 48,
              backgroundColor: "rgba(0,110,255,0.3)",
              borderRadius: 50,
              alignItems:"center",
              justifyContent:"center"
    },
    currentLocationStyle:{
        width:20,
        height:20,
        backgroundColor:"rgba(0,110,255,1)",
        borderRadius:100,
        borderWidth:3,
        borderColor:"white"
    }
})