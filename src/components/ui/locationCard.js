import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const LocationCard = () => {
  return (
    <View style={{height:48,backgroundColor:"white",borderRadius:12,gap:8,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",paddingHorizontal:12}}>
    <Image source={{uri:"https://s3-alpha-sig.figma.com/img/e8b1/986b/bb53aae2377aaba928d64cbac402fe2a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PP41sCTtyN8ockmp6WXu2Zl-AxIx9UNSL3S7yctYlufVgikuDVj6tczKuGPXLcqqmVYjSycEjs5Lxql3XfZnYtbDXZEslCEVlstt15RIqHGyO1JUmgzn6FGQ6VuLaFZ2ROZ5AaR9reytyzPxqkaU52gW9ZNB-pUzOyXHVqP9VOmMaZbVkmGmlnrq6~YllReqBEh3CsZjZLQ2yyZZM0NpaUcJ1jAJsxI9m7d92nOXGyF-oqNV~iTxpIJM2jJjBINi7E6NteUS~2mrw040ypZjZNRN0nCPMjmxDNRGYjivwfqcmlvaRCV5dnga9dKgTlaG1fMr0484l7HhdL6whkriwg__"}} style={{width:30,height:30}}/>
    <View>
      <Text style={{color:"black",fontSize:14,fontWeight:"bold"}}>12°</Text>
      <Text style={{color:"gray",fontSize:13,fontWeight:500}}>Ankara, Türkiye</Text>
    </View>
  </View>
  )
}

export default LocationCard

const styles = StyleSheet.create({})