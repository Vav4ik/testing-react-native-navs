import { View, Text, StyleSheet, Button } from "react-native";

function WelcomeScreen({ navigation }) {
  const navigateToUserHandler = () => {
    navigation.navigate("User");
  };
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
      </Text>
      <Button title="User Screen" onPress={navigateToUserHandler} />
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
