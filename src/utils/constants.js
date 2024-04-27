import {Dimensions} from 'react-native';
import NavigateIcon from '../assets/svg/navigation.svg';
import StackIcon from '../assets/svg/stack.svg';
import MapIcon from '../assets/svg/map.svg';
import { COLORS } from '../colors';

export const mapBoxAccessToken = 'sk.eyJ1IjoiYWhtZXRvemVyIiwiYSI6ImNsdmZhd3NyajAxNWIycG1zcW55cWRmbXUifQ.FFpvVAfyS6qE7ERez3JshA'

export const iconPaths = [
  {
    path: <NavigateIcon width={30} height={30} fill={COLORS.black} />,
  },
  {
    path: <StackIcon width={30} height={30} fill={COLORS.black} />,
  },
  {
    path: <MapIcon width={30} height={30} fill={COLORS.black} />,
  },
];

export const colorlevels = [
  {
    color: COLORS.green,
    text: 'Hafif',
    text2: '1-5 mm',
  },
  {
    color: COLORS.yellow,
    text: 'Orta',
    text2: '6-20 mm',
  },
  {
    color: COLORS.orange,
    text: 'Kuvvetli',
    text2: '21-75 mm',
  },
  {
    color: COLORS.red,
    text: 'Şiddetli',
    text2: '+76 mm',
  },
];

export const {width, height} = Dimensions.get('window');
