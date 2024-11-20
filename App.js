import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { AppNavigator } from "./components/AppNavigator";

WebBrowser.maybeCompleteAuthSession();

// Google Sign-In configuration
const config = {
  clientId:
    "1003845270417-9v91509h3v33bl50h20ko17kuckib2qg.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  redirectUri: makeRedirectUri({
    scheme: "io.expo.transportationui",
  }),
};

export default function App() {
  const [request, response, promptAsync] = useAuthRequest({
    clientId: config.clientId,
    scopes: config.scopes,
    redirectUri: config.redirectUri,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Authentication successful", authentication);
    }
  }, [response]);

  return (
    <NavigationContainer>
      <AppNavigator
        googleSignInRequest={request}
        googleSignInPrompt={promptAsync}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
