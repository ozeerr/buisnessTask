import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ColorLevelText = ({color,text,text2}) => {
  return (
    <View style={styles.container}>
      <Text style={[{color:color},styles.title]}>
        {text}
      </Text>
      <Text style={styles.text}>{text2}</Text>
    </View>
  );
};

export default ColorLevelText;

const styles = StyleSheet.create({
    container:{
        gap:3
    },
    text:{
        color: 'gray', fontSize: 12
    },
    title:{
      fontWeight:500,
      fontSize:14
    }
});
