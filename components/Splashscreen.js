// import { StyleSheet, View, Image } from 'react-native';
// import React, { useEffect } from 'react';
// import Onboarding from './components/Onboarding';
// import {StackActions} from '@react-navigation/native';
// import {set} from 'react-native-reanimated';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     setTimeout(() => {
//       this.props.dispatch(StackActions.replace('Onboarding'));
//     }, 3000);
//   }, []);

//   render()  {  
//     return (
//     <View style={styles.container}>
//       <Image style={styles.hiasan1} source={require("./assets/img/Hiasan1.png")} />
//       <Image style={styles.hiasan2} source={require("./assets/img/Hiasan2.png")} />
//       <Image
//         source={require("./assets/img/logo.png")}
//         resizeMode="contain"
//         style={styles.rootScreen}
//         imageStyle={styles.backgroundImage}
//       ></Image>
//     </View>
//   );
//   }
  
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   rootScreen: {
//     width: 158,
//     height: 158,
//   },
//   hiasan1:  {
//     position: "absolute",
//     left: 0,
//     top: 0,
//   },
//   hiasan2:  {
//     position: "absolute",
//     right: 0,
//     bottom: 0,
//   }
// });
