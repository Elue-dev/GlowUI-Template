import React, { Fragment } from "react";
import { Text } from "react-native";
import ChipSelector, { ChipItem } from "../components/ui/custom/chip";
import ScreenWrapper from "../components/ui/custom/screen-wrapper";

export default function ChipScreen() {
  const chipOptions: ChipItem[] = [
    {
      label: "Overview",
      icon: "star",
      activeColor: "#fff",
      activeTextColor: "#000",
    },
    {
      label: "Orders",
      icon: "shopping-cart",
      activeColor: "#fff",
      activeTextColor: "#000",
    },
    {
      label: "Analytics",
      icon: "bar-chart",
      activeColor: "#fff",
      activeTextColor: "#000",
    },
  ];

  return (
    <ScreenWrapper>
      <ChipSelector
        chips={chipOptions}
        onChipChange={(chip, i) => {
          console.log("Selected:", chip.label);
        }}
        renderContent={(chip, index) => (
          <Fragment>
            {chip.label === "Overview" && (
              <Text style={{ color: "#aaa" }}>Overview Screen</Text>
            )}

            {chip.label === "Orders" && (
              <Text style={{ color: "#aaa" }}>Orders Screen</Text>
            )}

            {chip.label === "Analytics" && (
              <Text style={{ color: "#aaa" }}>Analytics Screen</Text>
            )}
          </Fragment>
        )}
      />
    </ScreenWrapper>
  );
}
