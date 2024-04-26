import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import LocationCard from './ui/locationCard';
import StartsCard from './ui/starsCard';
import CircleButton from './ui/circleButton';

const TopScreenContent = () => {
  return (
    <SafeAreaView>
      <View
        style={styles.container}>
        <LocationCard />
        <View style={styles.rightContentWrapper}>
          <StartsCard />
          <CircleButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TopScreenContent;

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20
    },
    rightContentWrapper:{
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center'
    }
});
