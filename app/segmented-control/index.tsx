import React, { useState } from "react";
import { View } from "react-native";

import Animated, { FadeInDown } from "react-native-reanimated";
import ScreenWrapper from "../components/ui/custom/screen-wrapper";
import UISegmentedControl from "../components/ui/custom/segmented-control";
import Text from "../components/ui/custom/text";

const segmentedControlItems = [
  {
    title: "Analytics",
    key: "analytics",
    icon: "chart-line" as const,
  },
  {
    title: "Reports",
    key: "reports",
    icon: "file-document" as const,
  },
  {
    title: "Insights",
    key: "insights",
    icon: "lightbulb" as const,
  },
];

const SegmentedControlDemo: React.FC = (): React.ReactNode => {
  const [selectedValue, setSelectedValue] = useState(
    segmentedControlItems[0].key
  );

  return (
    <ScreenWrapper>
      <View className="mb-8 ml-5">
        <UISegmentedControl
          items={segmentedControlItems}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />

        <View className="mt-4">
          {selectedValue === "analytics" && (
            <Animated.View entering={FadeInDown.delay(100).damping(14)}>
              <Text>Analytics section</Text>
            </Animated.View>
          )}
          {selectedValue === "reports" && (
            <Animated.View entering={FadeInDown.delay(100).damping(14)}>
              <Text>Reports section</Text>
            </Animated.View>
          )}
          {selectedValue === "insights" && (
            <Animated.View entering={FadeInDown.delay(100).damping(14)}>
              <Text>Insights section</Text>
            </Animated.View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SegmentedControlDemo;
