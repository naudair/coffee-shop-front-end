import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/components/images/Bg5.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ paddingTop:150, width: 350 }}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "500",
              fontSize: 30,
              textAlign: "center",
              height: 78,
            }}
          >
            Welcome To Login
          </Text>
          <TextInput
            style={{
              backgroundColor: "#16181cd9",
              height: 60,
              borderRadius: 11,
              padding: 25,
              marginBottom:9,
              color:"#fff"
            }}
            placeholder="E-mail Address"
            placeholderTextColor="#828282"
          />
           <TextInput
            style={{
              backgroundColor: "#16181cd9",
              height: 60,
              borderRadius: 11,
              padding: 25,
              color:"#fff"
            }}
            placeholder="Password"
            placeholderTextColor="#828282"
          />
          <Text style={{color:"#CE9760", fontWeight:"700", textAlign:"right", paddingTop:8}}>Forgot Password?</Text>
        </View>
        <Pressable style={styles.btn}>
          <Text style={{ fontWeight: "800", fontSize: 19, color: "#543A20" }}>
            Sign In
          </Text>
        </Pressable>
        <Text style={{color:"#fff"}}>Or Login With</Text>
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
    // justifyContent:"space-around",
    alignItems: "center",
  },
  btn: {
    width: 242,
    height: 53,
    borderRadius: 10,
    backgroundColor: "#CE9760",
    alignItems: "center",
    justifyContent: "center",
    marginTop:20
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
