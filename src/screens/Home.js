import React from 'react';
import {StyleSheet,View} from 'react-native';
import MapboxComponent from '../components/mapBox';
import TopScreenContent from '../components/topScreenContent';
import ColorLevelCard from '../components/ui/colorLevelCard';
import CustomIcon from '../components/ui/customIcon';
import CustomBottomSheet from '../components/ui/customBottomSheet';
import { BlurView } from '@react-native-community/blur';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Home = () => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <View style={styles.root}>
       <BlurView
          style={{
            zIndex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: statusBarHeight,
          }}
          blurType="light"
          blurAmount={2}
        />
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
