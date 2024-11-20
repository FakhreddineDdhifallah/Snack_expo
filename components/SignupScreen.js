import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

export const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Add Google Sign-In configuration
  const [request, response, promptAsync] = useAuthRequest({
    clientId:
      "1003845270417-9v91509h3v33bl50h20ko17kuckib2qg.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    redirectUri: makeRedirectUri({
      scheme: "io.expo.transportationui",
    }),
  });

  const validateForm = () => {
    let validationErrors = {};

    if (!fullName.trim()) {
      validationErrors.fullName = "Full name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSignup = () => {
    if (validateForm()) {
      // Signup logic here
      console.log("Signup Data:", { fullName, email });
      navigation.navigate("home");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignInPrompt();
      if (result.type === "success") {
        console.log("Google Sign-In Successful:", result);
        navigation.navigate("home");
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Create Account</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.fullName && styles.errorInput]}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          {errors.fullName && (
            <Text style={styles.errorText}>{errors.fullName}</Text>
          )}

          <TextInput
            style={[styles.input, errors.email && styles.errorInput]}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <TextInput
            style={[styles.input, errors.password && styles.errorInput]}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
        </View>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
        >
          <Image
            source={require("../assets/google-icon.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#3c3c3c",
    color: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: "#34a853",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  googleButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#d3d3d3",
  },
  loginLink: {
    color: "#1a73e8",
    fontWeight: "bold",
  },
});

export default SignupScreen;
