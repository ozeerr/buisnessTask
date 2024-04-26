import { Dimensions } from "react-native";

export const iconPaths=[
    {
        path:require('../assets/navigateicon.png'),
    },
    {
        path:require('../assets/secondicon.png'),
    },
    {
        path:require('../assets/mapicon.png'),
    }
];

export const colorlevels=[
    {
      color:"#30D158",
      text:"Hafif",
      text2:"1-5 mm"
    },
    {
      color:"#FFD60A",
      text:"Orta",
      text2:"6-20 mm"
    },
    {
      color:"#FF9F0A",
      text:"Kuvvetli",
      text2:"21-75 mm"
    },
    {
      color:"#FF3B30",
      text:"Şiddetli",
      text2:"+76 mm"
    }
  ];

  export const {width, height} = Dimensions.get('window');
