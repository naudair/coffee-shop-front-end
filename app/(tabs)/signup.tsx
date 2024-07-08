import { useCreateUserMutation } from "@/generated";
import { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";

export default function SignUp() {
  const [userName, setUserName] = useState("user");
  const [email, setEmail] = useState("mail");
  const [password, setPassword] = useState("password");

  const [createUserMutation, { data, loading, error }] =
    useCreateUserMutation();

  const handleSignUp = async () => {
    try {
      const res = await createUserMutation({
        variables: {
          fields: {
            userName,
            email,
            password,
          },
        },
      });
      setUserName("");
      setEmail("");
      setPassword("");
      router.replace("/login");
    } catch (error) {
      console.error("Error while creating user:", error);
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
    <View style={styles.container}>
      <ImageBackground
        source={require("@/components/images/Bg5.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ alignItems: "center" }}>
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
              Register your Account
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#828282"
              value={userName}
              onChangeText={setUserName}
            />
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
          </View>
          <Pressable onPress={handleSignUp} style={styles.btn}>
            <Text style={{ fontWeight: "800", fontSize: 19, color: "#543A20" }}>
              Register
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
            Already have an account?
          </Text>
            <Text onPress={() => router.replace('/login')} style={{ color: "#CE9760", fontSize: 19, fontWeight: "800" }}>
              {"  "}
              Login
            </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
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
    marginTop: 20,
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
