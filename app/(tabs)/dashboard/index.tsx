import { StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.body}>
      <View>
        <Text>Coffee Shop</Text>
      </View>
      <View>Dashboard</View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { backgroundColor: "#0f1524", flex: 1, color: "#95a1b5" },
});
