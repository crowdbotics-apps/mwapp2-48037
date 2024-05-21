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
        
      </ScrollView></Pressable>
    <Pressable style={styles.dIlhepKw}></Pressable><Text style={styles.aakvpvAg}>{"Hello  Hope you are having fun with the Platform"}</Text></SafeAreaView>;
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
  dIlhepKw: {
    position: "absolute"
  },
  aakvpvAg: {
    width: 342,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 383,
    left: 12,
    textAlign: "center"
  }
});
export default WelcomeScreen;