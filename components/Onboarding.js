import React, { useState, useRef } from 'react'; 
import { StyleSheet, Text, View, FlatList, Animated, Image, Pressable } from 'react-native';
import slides from '../slides';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import { Button } from 'antd';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

  const handlePress = () => {
    console.log('Login button pressed');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.decor} source={require("../assets/img/decor.png")} />
      <View style={{flex: 3}}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX}/>
      <View style={{ flexDirection: 'row', height: 55 }} >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decor: {
    position: 'absolute',
    left: -9,
    top: 0,
    width: 180,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Onboarding;
