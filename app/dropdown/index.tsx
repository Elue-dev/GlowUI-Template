import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useMemo, useState } from "react";
import {
  ListRenderItem,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropdownPicker, {
  DropdownPickerItem,
} from "../components/ui/lib/dropdown-picker/dropdown-picker";

interface MyCustomItem extends DropdownPickerItem {
  description?: string;
}

const carMakesData: MyCustomItem[] = [
  {
    id: "1",
    label: "Toyota",
    value: "toyota",
    iconName: "car",
  },
  {
    id: "2",
    label: "Honda",
    value: "honda",
    iconName: "car",
  },
  { id: "3", label: "Ford", value: "ford", iconName: "car" },
  { id: "4", label: "BMW", value: "bmw", iconName: "car" },
  {
    id: "5",
    label: "Tesla",
    value: "tesla",
    iconName: "car",
  },
];

const carModelsData: MyCustomItem[] = [
  {
    id: "m1",
    label: "Corolla",
    value: "corolla",
    description: "Toyota - Compact sedan",
  },
  {
    id: "m2",
    label: "Civic",
    value: "civic",
    description: "Honda - Popular compact",
  },
  {
    id: "m3",
    label: "F-150",
    value: "f150",
    description: "Ford - Best-selling truck",
  },
  {
    id: "m4",
    label: "Model 3",
    value: "model3",
    description: "Tesla - Electric sedan",
  },
  {
    id: "m5",
    label: "3 Series",
    value: "3series",
    description: "BMW - Sport sedan",
  },
  {
    id: "m6",
    label: "Accord",
    value: "accord",
    description: "Honda - Mid-size sedan",
  },
  {
    id: "m7",
    label: "Camry",
    value: "camry",
    description: "Toyota - Family sedan",
  },
];

export default function DropdownPickerPage() {
  const { width: windowWidth } = useWindowDimensions();
  const colors = {
    Neutral0: "#ffffff",
    Neutral100: "#f9f9f9",
    Neutral200: "#e5e7eb",
    Neutral300: "#d1d5db",
    Neutral400: "#9ca3af",
    Neutral500: "#6b7280",
    Neutral600: "#4b5563",
    Neutral700: "#374151",
    Neutral800: "#1f2937",
    Neutral900: "#111827",

    darkNeutral: "#1a1a1a",
    light: "#fff",

    PrimaryLight: "#a5b4fc",
    PrimaryNormal: "#6366f1",
    PrimaryDark: "#4f46e5",

    bgColor: "#111",
  };

  const [selectedMake, setSelectedMake] = useState<MyCustomItem | null>(null);
  const [isMakePickerOpen, setIsMakePickerOpen] = useState(false);

  const [selectedModel, setSelectedModel] = useState<MyCustomItem | null>(null);
  const [isModelPickerOpen, setIsModelPickerOpen] = useState(false);

  const handleMakeSelect = (item: MyCustomItem) => {
    setSelectedMake(item);
    setIsMakePickerOpen(false);
    setSelectedModel(null);
  };

  const handleModelSelect = (item: MyCustomItem) => {
    setSelectedModel(item);
    setIsModelPickerOpen(false);
  };

  const toggleMakePicker = (open: boolean) => {
    setIsMakePickerOpen(open);
    if (open && isModelPickerOpen) {
      setIsModelPickerOpen(false);
    }
  };

  const toggleModelPicker = (open: boolean) => {
    setIsModelPickerOpen(open);
    if (open && isMakePickerOpen) {
      setIsMakePickerOpen(false);
    }
  };

  const pickerWidth = useMemo(() => {
    const totalPadding = styles.container.paddingHorizontal * 2;
    const gapBetweenPickers = styles.pickersRow.gap | 10;
    return (windowWidth - totalPadding - gapBetweenPickers) / 2;
  }, [windowWidth]);

  const renderCustomDropdownItem: ListRenderItem<MyCustomItem> = ({ item }) => (
    <TouchableOpacity
      style={[styles.customItem, { backgroundColor: colors.darkNeutral }]}
      onPress={() => {
        if (carMakesData.find((d) => d.id === item.id)) {
          handleMakeSelect(item);
        } else {
          handleModelSelect(item);
        }
      }}
    >
      {item.iconName && (
        <Ionicons name={item.iconName} size={20} color={colors.light} />
      )}

      <View
        style={{
          marginLeft: item.iconName ? 10 : 0,
          flex: 1,
        }}
      >
        <Text style={[styles.customItemLabel, { color: colors.light }]}>
          {item.label}
        </Text>
        {item.description && (
          <Text
            style={[styles.customItemDesc, { color: colors.Neutral500 }]}
            numberOfLines={1}
          >
            {item.description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.bgColor }]}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select Vehicle</Text>

        <DropdownPicker<MyCustomItem>
          data={carMakesData}
          isOpen={isMakePickerOpen}
          setIsOpen={toggleMakePicker}
          onItemSelected={handleMakeSelect}
          selectedValue={selectedMake}
          placeholder="Select Make"
          renderItem={renderCustomDropdownItem}
          triggerIcon={
            <Ionicons
              name="chevron-down-outline"
              size={22}
              color={colors.light}
            />
          }
          dropdownBackgroundColor={colors.darkNeutral}
          dropdownItemTextStyle={{ color: colors.light }}
          triggerTextStyle={{ color: colors.light }}
          containerStyle={{
            width: "100%",
          }}
          itemHeight={Platform.OS === "ios" ? 55 : 60}
          reduceMotion="never"
        />

        <DropdownPicker<MyCustomItem>
          data={carModelsData.filter((model) =>
            selectedMake
              ? model.description?.startsWith(selectedMake.label)
              : true
          )}
          isOpen={isModelPickerOpen}
          setIsOpen={toggleModelPicker}
          onItemSelected={handleModelSelect}
          selectedValue={selectedModel}
          placeholder="Select Model"
          renderItem={renderCustomDropdownItem}
          triggerIcon={
            <Ionicons
              name="chevron-down-outline"
              size={22}
              color={colors.light}
            />
          }
          dropdownBackgroundColor={colors.darkNeutral}
          dropdownItemTextStyle={{ color: colors.light }}
          triggerTextStyle={{ color: colors.light }}
          triggerContainerStyle={{
            borderColor: colors.PrimaryNormal,
            backgroundColor: colors.darkNeutral,
          }}
          reduceMotion="never"
          dropdownSeparatorColor={colors.Neutral500}
          containerStyle={{
            width: "100%",
            marginTop: 14,
          }}
          itemHeight={Platform.OS === "ios" ? 55 : 60}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: "#fff",
  },
  pickersRow: {
    width: "100%",
    marginBottom: 30,
    gap: 10,
  },
  customItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  customItemLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  customItemDesc: {
    fontSize: 13,
    marginTop: 2,
  },
});
