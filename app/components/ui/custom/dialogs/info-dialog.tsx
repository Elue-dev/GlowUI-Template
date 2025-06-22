import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../lib/dialog/dialog";
import Button from "../button";
import DialogButton from "./dialog-button";

interface DialogProps {
  title: string;
  description: string;
  buttonText: string;
  dialogHeader: string;
  dialogDescription: string;
  dialogButtonText: string;
  dialogFunction: VoidFunction;
}

export default function InfoDialog({
  title,
  description,
  buttonText,
  dialogHeader,
  dialogDescription,
  dialogButtonText,
  dialogFunction,
}: DialogProps) {
  return (
    <View style={styles.exampleCard}>
      <View style={styles.exampleHeader}>
        <AntDesign name="exclamationcircle" size={20} color="#f59e0b" />
        <Text style={styles.exampleTitle}>{title}</Text>
      </View>
      <Text style={styles.exampleDescription}>{description}</Text>

      <DialogTrigger>
        <DialogButton variant="primary">{buttonText}</DialogButton>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogHeader}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onPress={dialogFunction}
            title={dialogButtonText}
            btnWidth={100}
            height={43}
          />
          <DialogClose>
            <DialogButton variant="destructive">Close</DialogButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090b",
  },
  content: {
    padding: 24,
    paddingBottom: 48,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
    paddingTop: 20,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#18181b",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#27272a",
  },
  headerTitle: {
    fontSize: 28,
    color: "#fafafa",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#a1a1aa",
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 320,
  },
  section: {
    marginBottom: 32,
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#e4e4e7",
    marginBottom: 8,
    marginLeft: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#a1a1aa",
    lineHeight: 20,
    marginBottom: 20,
    marginLeft: 4,
  },
  exampleGrid: {
    gap: 16,
  },
  exampleCard: {
    backgroundColor: "#18181b",
    borderWidth: 1,
    borderColor: "#27272a",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  exampleHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fafafa",
  },
  exampleDescription: {
    fontSize: 14,
    color: "#a1a1aa",
    lineHeight: 20,
    marginBottom: 16,
  },
  statusText: {
    fontSize: 12,
    color: "#10b981",
    marginTop: 8,
    fontWeight: "500",
  },
  formContent: {
    gap: 16,
    marginVertical: 16,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fafafa",
  },
  inputContainer: {
    backgroundColor: "#09090b",
    borderWidth: 1,
    borderColor: "#27272a",
    borderRadius: 8,
    padding: 12,
  },
  textareaContainer: {
    minHeight: 80,
  },
  inputValue: {
    fontSize: 14,
    color: "#a1a1aa",
    lineHeight: 20,
  },
  pricingContent: {
    alignItems: "center",
    marginVertical: 16,
  },
  priceHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 20,
  },
  priceAmount: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fafafa",
  },
  pricePeriod: {
    fontSize: 16,
    color: "#a1a1aa",
    marginLeft: 4,
  },
  featuresList: {
    gap: 12,
    width: "100%",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  featureText: {
    fontSize: 14,
    color: "#a1a1aa",
  },
  centeredContent: {
    alignItems: "center",
  },
  largeIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  variantGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  variantCard: {
    flex: 1,
    minWidth: "47%",
    backgroundColor: "#18181b",
    borderWidth: 1,
    borderColor: "#27272a",
    borderRadius: 12,
    padding: 16,
  },
  variantHeader: {
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  variantIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  variantTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fafafa",
  },
  practicesList: {
    gap: 16,
  },
  practiceItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    backgroundColor: "#18181b",
    borderWidth: 1,
    borderColor: "#27272a",
    borderRadius: 12,
    padding: 16,
  },
  practiceIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  practiceContent: {
    flex: 1,
  },
  practiceTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fafafa",
    marginBottom: 4,
  },
  practiceDescription: {
    fontSize: 14,
    color: "#a1a1aa",
    lineHeight: 20,
  },
  apiCard: {
    backgroundColor: "#18181b",
    borderWidth: 1,
    borderColor: "#27272a",
    borderRadius: 12,
    padding: 16,
  },
  apiTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fafafa",
    marginBottom: 12,
  },
  apiList: {
    gap: 8,
  },
  apiItem: {
    fontSize: 14,
    color: "#a1a1aa",
    lineHeight: 20,
  },
  apiName: {
    fontWeight: "600",
    color: "#60a5fa",
    fontFamily: "monospace",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    padding: 16,
    backgroundColor: "#18181b",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#27272a",
  },
  footerIcon: {
    marginRight: 8,
  },
  footerText: {
    fontSize: 14,
    color: "#a1a1aa",
    textAlign: "center",
    flex: 1,
    lineHeight: 20,
  },
});
