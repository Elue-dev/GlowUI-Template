import React, { useEffect, useState } from "react";
import { StyleSheet, View, type ViewStyle } from "react-native";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ChipGroup } from "../lib/chip/chip";

export interface ChipItem {
  label: string;
  icon?: string;
  activeIcon?: string;
  activeColor?: string;
  activeTextColor?: string;
}

interface ChipSelectorProps {
  chips: ChipItem[];
  onChipChange?: (selected: ChipItem, index: number) => void;
  renderContent?: (selected: ChipItem, index: number) => React.ReactNode;
}

export default function ChipSelector({
  chips,
  onChipChange,
  renderContent,
}: ChipSelectorProps) {
  const [index, setIndex] = useState(0);

  const fadeAnim = useSharedValue(1);

  const updateDisplayedContent = (newIndex: number) => {
    const chip = chips[newIndex];
    onChipChange?.(chip, newIndex);
  };

  const handleChipChange = (newIndex: number) => {
    if (newIndex !== index) {
      fadeAnim.value = withTiming(0, { duration: 150 }, (finished) => {
        if (finished) {
          runOnJS(updateDisplayedContent)(newIndex);
          fadeAnim.value = withTiming(1, { duration: 150 });
        }
      });
      setIndex(newIndex);
    }
  };

  const animatedStyle = useAnimatedStyle<ViewStyle>(() => ({
    opacity: fadeAnim.value,
    transform: [{ translateY: interpolate(fadeAnim.value, [0, 1], [4, 0]) }],
  }));

  useEffect(() => {
    updateDisplayedContent(0);
  }, []);

  return (
    <View style={styles.wrapper}>
      <ChipGroup
        chips={chips as any}
        selectedIndex={index}
        onChange={handleChipChange}
        containerStyle={styles.chipGroupContainer}
      />

      {renderContent && (
        <Animated.View style={[animatedStyle]}>
          {renderContent(chips[index], index)}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  chipGroupContainer: {
    paddingHorizontal: 4,
    marginBottom: 24,
  },
});
