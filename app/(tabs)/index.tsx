import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/components/images/Bg2.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          style={{ width: 270, height: 200 }}
          source={require("@/components/images/Logo.png")}
        />
        <Pressable style={styles.btn} onPress={() => router.replace("/step1")}>
          <Text style={{ fontWeight: "800", fontSize: 19, color: "#543A20" }}>
            Get Started
          </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => router.replace("/home")}>
          <Text style={{ fontWeight: "800", fontSize: 19, color: "#543A20" }}>
            Home
          </Text>
        </Pressable>
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
    paddingTop: 90,
  },
  btn: {
    width: 242,
    height: 53,
    borderRadius: 10,
    backgroundColor: "#CE9760",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
