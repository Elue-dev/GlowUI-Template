import { Text } from "react-native";

export default function HeadingText({ text }: { text: string }) {
  return (
    <Text style={{ fontSize: 24, fontWeight: "700", color: "#fff" }}>
      {text}
    </Text>
  );
}
