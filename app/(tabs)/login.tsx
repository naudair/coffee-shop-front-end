import { useLoginUserMutation } from "@/generated";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUserMutation, { data, loading, error }] = useLoginUserMutation();

  const LoginUser = async () => {
    try {
      const res = await loginUserMutation({
        variables: {
          loginUserFields2: {
            email,
            password,
          },
        },
      });
      setEmail("");
      setPassword("");
      router.replace("/home");
    } catch (error) {
      console.error("error: ", error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ImageBackground
          source={require("@/components/images/Bg5.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={{ alignItems: "center", gap: 137 }}>
            <View style={{ paddingTop: 170, width: 380 }}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: 30,
                  textAlign: "center",
                  height: 80,
                }}
              >
                Welcome To Login
              </Text>
              <TextInput
                style={styles.input}
                placeholder="E-mail Address"
                placeholderTextColor="#828282"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#828282"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <Text
                style={{
                  color: "#CE9760",
                  fontWeight: "700",
                  textAlign: "right",
                }}
              >
                Forgot Password?
              </Text>
            </View>
            <Pressable onPress={LoginUser} style={styles.btn}>
              <Text
                style={{ fontWeight: "800", fontSize: 19, color: "#543A20" }}
              >
                Log In
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              paddingBottom: 80,
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>
              Don’t have an account?
            </Text>
            <Text
              onPress={() => router.replace("/signup")}
              style={{ color: "#CE9760", fontSize: 19, fontWeight: "800" }}
            >
              {"  "}
              Register
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    // flex: 1,
    height: "100%",
    width: "100%",
    zIndex: -2,
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    width: 242,
    height: 53,
    borderRadius: 10,
    backgroundColor: "#CE9760",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#16181cd9",
    height: 60,
    borderRadius: 11,
    paddingLeft: 25,
    marginBottom: 9,
    color: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});
