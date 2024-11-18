import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Navigate to the Landing Page after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace("LandingPage"); // Change 'LandingPage' to your next screen name
    }, 3000);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/logo.jpg")} // Replace with your logo path
        style={styles.logo}
      />
      {/* App Name */}
      <Text style={styles.appName}>TransporTN</Text>
      {/* Catchy Phrase */}
      <Text style={styles.catchPhrase}>"Simplifying your daily commute."</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff", // Replace with your theme color
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  catchPhrase: {
    fontSize: 18,
    color: "#f8f9fa",
    fontStyle: "italic",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
