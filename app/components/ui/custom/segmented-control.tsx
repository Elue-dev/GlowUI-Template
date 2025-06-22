import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";
import { SegmentedControl } from "../lib/segmented-control/segmented-control";

interface SegControlProps {
  items: {
    title: string;
    key: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
  }[];
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}
export default function UISegmentedControl({
  items,
  selectedValue,
  setSelectedValue,
}: SegControlProps) {
  return (
    <View className="flex-1">
      <SegmentedControl.Root
        value={selectedValue}
        onValueChange={setSelectedValue}
        className="rounded-lg p-1 shadow-2xl"
      >
        {items.map((item) => (
          <SegmentedControl.Item
            key={item.key}
            value={item.key}
            className={`flex-1 py-3 px-4 rounded-md transition-all duration-200 ${
              selectedValue === item.key
                ? "bg-zinc-700 shadow-lg"
                : "bg-transparent"
            }`}
          >
            <View className="flex-row items-center justify-center space-x-2">
              <MaterialCommunityIcons
                name={item.icon}
                size={20}
                color={selectedValue === item.key ? "#ffffff" : "#a1a1aa"}
                className="mr-2"
              />
              <Text
                className={`text-center font-medium transition-colors duration-200 ${
                  selectedValue === item.key ? "text-white" : "text-zinc-400"
                }`}
              >
                {item.title}
              </Text>
            </View>
          </SegmentedControl.Item>
        ))}
      </SegmentedControl.Root>
    </View>
  );
}
