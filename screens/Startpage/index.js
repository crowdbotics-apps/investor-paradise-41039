import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Startpage = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flexDirection: "row",
      flex: 1,
      alignItems: "center"
    }} style={styles.jZnRECxV}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#cb6868"
  },
  jZnRECxV: {
    position: "absolute",
    left: 0,
    borderRadius: 0
  }
});
export default Startpage;