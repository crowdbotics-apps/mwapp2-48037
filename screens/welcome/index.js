import { Pressable } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Pressable accessibilityHint="Press Me"><ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Pressable><Image style={styles.logo} source={require("./logo.png")} /></Pressable>
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>
        
      <Pressable><View style={styles.wzkDeMGT}></View></Pressable></ScrollView></Pressable>
    <Pressable style={styles.dIlhepKw}></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7fcf8",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: 700
  },
  wzkDeMGT: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 40,
    color: "#777777",
    position: "relative"
  },
  dIlhepKw: {
    position: "absolute"
  }
});
export default WelcomeScreen;