import { Text, TextStyle } from "react-native";

export default function HeadingText({
  text,
  styles,
}: {
  text: string;
  styles: TextStyle;
}) {
  return (
    <Text style={{ fontSize: 24, fontWeight: "700", color: "#fff", ...styles }}>
      {text}
    </Text>
  );
}
