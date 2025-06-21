import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Card from "./components/ui/custom/card";
import HeadingText from "./components/ui/custom/heading-text";
import ScreenWrapper from "./components/ui/custom/screen-wrapper";
import Text from "./components/ui/custom/text";

export default function Index() {
  return (
    <ScreenWrapper>
      <HeadingText text="Glow UI Components" />
      <View style={{ marginTop: 20 }}>
        <Card style={styles.card} link="accordion">
          <Text style={{ fontSize: 19, fontWeight: "500" }}>Accordion</Text>
          <Entypo name="chevron-small-right" size={24} color="#fff" />
        </Card>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
