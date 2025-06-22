import { FontAwesome6 } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { SearchBar } from "../components/ui/lib/searchbar/searchbar";

const SearchBarDemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled
      >
        <View style={styles.section}>
          <View style={styles.exampleGroup}>
            <View style={styles.example}>
              <SearchBar
                placeholder="Search users..."
                tint="#6366f1"
                onSearch={(search) => console.log(search)}
                iconCenterOffset={2.9}
                textCenterOffset={2.65}
                onSearchMount={() => console.log("Users search mounted")}
                renderLeadingIcons={() => (
                  <FontAwesome6 name="users" size={24} color="gray" />
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 32,
  },
  section: {
    gap: 16,
  },
  example: {
    padding: 20,
    backgroundColor: "#18181b",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#27272a",
  },
  exampleGroup: {
    gap: 16,
  },
});

export default SearchBarDemo;
