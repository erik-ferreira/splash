import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6C63FF",
  },

  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
  },
})

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  )
}
