import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapboxComponent from '../components/mapBox';
import TopScreenContent from '../components/topScreenContent';
import ColorLevelCard from '../components/ui/colorLevelCard';
import CustomIcon from '../components/ui/customIcon';
import CustomBottomSheet from '../components/ui/customBottomSheet';


const Home = () => {
  return (
    <View style={styles.root}>
      <CustomBottomSheet>
          <MapboxComponent />
          <TopScreenContent />
          <ColorLevelCard />
          <CustomIcon />
       </CustomBottomSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});
