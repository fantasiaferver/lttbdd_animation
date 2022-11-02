import { StatusBar } from 'expo-status-bar';
import React, { useRef,useEffect } from "react";
import { StyleSheet, Text, View, Animated, Button, SafeAreaView, Image  } from 'react-native';

const App = () => {
  const rightAnim = useRef(new Animated.Value(0)).current;

  const fadeInAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(
      fadeInAnim, {
        toValue: 1,
        duration: 2500,
      }
    ).start();
  }, []);


  const Start = () => {
    Animated.timing(rightAnim, {
      toValue: 250,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  };
  const Stop = () => {
    Animated.timing(rightAnim, {
      toValue: 250,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  };
  const Reset = () => {
    Animated.timing(rightAnim, {
      toValue: 250,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  };




  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{padding: 20, backgroundColor: '#FFACC7', borderRadius: 10, opacity:fadeInAnim}}>
        <Text style={{color: "white", fontSize: 16, textAlign:'center'}}>Wellcome to animation ReactNative</Text>
      </Animated.View>

      <Animated.View 
          style={{transform:[{ translateX: rightAnim }]}}>
        <Image style={{width:80, height:80}} source={require('./assets/airplane.gif')}></Image>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button style={styles.Btn} title="Start" onPress={Start} />
      </View>
      <View style={styles.buttonRow}>
        <Button style={styles.Btn} title="Stop" onPress={Stop} />
      </View>
      <View style={styles.buttonRow}>
        <Button style={styles.Btn} title="End"  onPress={Reset}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 20
  },

  buttonRow: {
    marginBottom: 10
  },
});

export default App;
