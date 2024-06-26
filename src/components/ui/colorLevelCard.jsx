import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ColorLevelText from './colorLevelText';
import {colorlevels} from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../colors';
import { horizontalScale, verticalScale } from '../../utils/dimensions';
const ColorLevelCard = () => {

  const linearColors = [COLORS.green,COLORS.yellow,COLORS.orange,COLORS.red]

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.firsText}>Yağmur</Text>
        <Text style={styles.secondText}>(mm)</Text>
      </View>
      <LinearGradient
        colors={linearColors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}
      />
      <View style={styles.colorLevelWrapper}>
        {colorlevels?.map((item, index) => (
          <ColorLevelText
            key={index}
            color={item.color}
            text={item.text}
            text2={item.text2}
          />
        ))}
      </View>
    </View>
  );
};

export default ColorLevelCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: verticalScale(100),
    borderRadius: 10,
    width: horizontalScale(260),
    position: 'absolute',
    bottom: verticalScale(145),
    left: 20,
    padding: 10,
    gap: 7,
  },
  textContainer:{
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  firsText: {
    fontSize: 17,
    fontWeight: 500,
  },
    secondText: {
        color: 'gray',
    },
    linearGradient:{
        width: '100%',
        height: 10,
        borderRadius: 100
    },
    colorLevelWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
