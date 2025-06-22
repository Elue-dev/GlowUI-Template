import { ReactNode } from "react";
import { SafeAreaView, ScrollView } from "react-native";

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: 20,
          marginTop: 30,
        }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
