import {
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
        source={require("@/components/images/Bg1.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Pressable style={styles.btn}>
          <Text style={{ fontWeight: "800", fontSize: 19, color: "#543A20" }}>
            Get Started
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
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 120,
  },
  btn: {
    width: 242,
    height: 53,
    borderRadius: 10,
    backgroundColor: "#CE9760",
    alignItems: "center",
    justifyContent: "center",
  },
});
