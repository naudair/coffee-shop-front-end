import { router } from "expo-router";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LogIn() {
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
              Welcome To Login
            </Text>
            <TextInput
              style={styles.input}
              placeholder="E-mail Address"
              placeholderTextColor="#828282"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#828282"
              secureTextEntry
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
          <Pressable onPress={() => router.replace('/home')} style={styles.btn}>
            <Text style={{ fontWeight: "800", fontSize: 19, color: "#543A20" }}>
              Log In
            </Text>
          </Pressable>
          <Text style={{ color: "#fff" }}>Or Login With</Text>
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
          <Text onPress={() => router.replace('/signup')} style={{ color: "#CE9760", fontSize: 19, fontWeight: "800" }} >
            {"  "}
            Register
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
});
