import { Entypo } from "@expo/vector-icons";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "./components/ui/custom/card";
import HeadingText from "./components/ui/custom/heading-text";
import ScreenWrapper from "./components/ui/custom/screen-wrapper";
import Text from "./components/ui/custom/text";

export default function Index() {
  const routes = [
    {
      title: "Accordion",
      link: "accordion",
    },
    {
      title: "Avatar",
      link: "avatar",
    },
    {
      title: "Button",
      link: "button",
    },
    {
      title: "Dropdown",
      link: "dropdown",
    },
    {
      title: "Checkbox",
      link: "checkbox",
    },
    {
      title: "Chip",
      link: "chip",
    },
    {
      title: "Dialog (Incomplete)",
      link: "dialog",
    },
    {
      title: "Searchbar",
      link: "searchbar",
    },
    {
      title: "Segmented Control",
      link: "segmented-control",
    },
  ];
  return (
    <ScreenWrapper>
      <HeadingText text="Glow UI Components" styles={{ marginTop: 10 }} />
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={routes}
          keyExtractor={(routes) => routes.link}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: route }) => (
            <Card style={styles.card} link={route.link}>
              <Text style={{ fontSize: 19, fontWeight: "500" }}>
                {route.title}
              </Text>
              <Entypo name="chevron-small-right" size={24} color="#fff" />
            </Card>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
