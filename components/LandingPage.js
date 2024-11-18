import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from "react-native";

export const LandingPage = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [loginScale] = useState(new Animated.Value(0.7));
  const [signupScale] = useState(new Animated.Value(0.7));
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);

      // Parallel animations for fade and scale
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(loginScale, {
          toValue: 1,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.spring(signupScale, {
          toValue: 1,
          friction: 3,
          tension: 40,
          delay: 200, // Slight stagger effect
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Anava.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.catchPhrase}>
        "Connecting you to smarter transport solutions."
      </Text>

      {showButtons && (
        <Animated.View
          style={[
            styles.buttonContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.buttonWrapper,
              {
                transform: [{ scale: loginScale }],
              },
            ]}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[
              styles.buttonWrapper,
              {
                transform: [{ scale: signupScale }],
              },
            ]}
          >
            <TouchableOpacity
              style={[styles.button, styles.signUpButton]}
              onPress={() => navigation.navigate("signup")}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282828",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  catchPhrase: {
    fontSize: 18,
    color: "#d3d3d3",
    textAlign: "center",
    marginBottom: 30,
    fontStyle: "italic",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1a73e8",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  signUpButton: {
    backgroundColor: "#34a853",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default LandingPage;
