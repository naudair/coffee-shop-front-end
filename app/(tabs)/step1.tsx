import { router } from "expo-router";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Step1() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/components/images/Bg4.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ width: 350 }}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "900",
              fontSize: 40,
              textAlign: "center",
              lineHeight: 40,
              height: 100,
            }}
          >
            Unlock bean secrets
          </Text>
          <Text
            style={{
              color: "#CE9760",
              fontWeight: "200",
              fontSize: 16,

              textAlign: "center",
              lineHeight: 20,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit
            mattis.
          </Text>
        </View>
        <View style={{ gap: 10 }}>
          <Pressable onPress={() => router.replace('/signup')} style={styles.btn}>
            <Text style={{ fontWeight: "800", fontSize: 19, color: "#543A20" }}>
              Sign Up
            </Text>
          </Pressable>
          <Pressable onPress={() => router.replace('/login')} style={styles.signIn}>
            <Text style={{ fontWeight: "800", fontSize: 19, color: "#CE9760" }}>
              Log In
            </Text>
          </Pressable>
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
    justifyContent: "space-around",
    alignItems: "center",
    // paddingBottom: 120,
  },
  btn: {
    width: 242,
    height: 53,
    borderRadius: 10,
    backgroundColor: "#CE9760",
    alignItems: "center",
    justifyContent: "center",
  },
  signIn: {
    width: 242,
    height: 53,
    borderRadius: 10,
    borderColor: "#CE9760",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
