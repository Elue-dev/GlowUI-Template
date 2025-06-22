import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import ScreenWrapper from "../components/ui/custom/screen-wrapper";
import {
  showCustomToast,
  showLoadingToast,
  showToast,
} from "../components/ui/custom/toasts";
import { ToastProviderWithViewport } from "../components/ui/lib/toast";
import { useToast } from "../context/toast-context";

function HookExampleScreen() {
  const toast = useToast();

  const showProgressToast = async () => {
    const id = showLoadingToast();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    toast.dismiss(id);
    showToast({
      type: "success",
      description: "The operation was successfully completed!",
    });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={showProgressToast}>
      <Feather name="refresh-cw" size={16} color="#E5E7EB" />
      <Text style={styles.buttonText}>Show Progress Toast</Text>
    </TouchableOpacity>
  );
}

function ToastScreen() {
  return (
    <ScreenWrapper>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Types</Text>
        <Text style={styles.sectionDescription}>
          Standard toast notifications with different semantic types
        </Text>

        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              showToast({
                type: "success",
                description: "Your profile has been updated!",
              })
            }
          >
            <AntDesign name="checkcircle" size={16} color="#10B981" />
            <Text style={styles.buttonText}>Success</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              showToast({
                type: "error",
                description: "Failed to save changes. Please try again",
                actionLabel: "Retry",
                onPress: () => alert("Retried!"),
              })
            }
          >
            <MaterialIcons name="error-outline" size={16} color="#EF4444" />
            <Text style={styles.buttonText}>Error</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              showToast({
                type: "warning",
                description: "Your session will expire in 5 minutes.",
              })
            }
          >
            <Feather name="alert-triangle" size={16} color="#F59E0B" />
            <Text style={styles.buttonText}>Warning</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              showToast({
                type: "info",
                description: "New features are now available in settings.",
                actionLabel: "Settings",
                onPress: () => alert("Navigated to settings!"),
              })
            }
          >
            <Feather name="info" size={16} color="#3B82F6" />
            <Text style={styles.buttonText}>Info</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Advanced Usage</Text>
        <Text style={styles.sectionDescription}>
          Custom components, positioning, and interactive features
        </Text>

        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              showCustomToast({
                type: "success",
                variant: "success",
                title: "Success",
                description: "Your operation was successful! Congratulations!",
              })
            }
          >
            <Feather name="code" size={16} color="#8B5CF6" />
            <Text style={styles.buttonText}>Custom Component (Success)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              showCustomToast({
                type: "error",
                variant: "error",
                title: "An Error Occured",
                description:
                  "Your operation was unsuccessful! Please try again!",
              })
            }
          >
            <Feather name="code" size={16} color="#8B5CF6" />
            <Text style={styles.buttonText}>Custom Component (Error)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              showCustomToast({
                type: "info",
                variant: "info",
                title: "Not Allowed",
                description: "This feature is only available for pro users",
              })
            }
          >
            <Feather name="code" size={16} color="#8B5CF6" />
            <Text style={styles.buttonText}>Custom Component (Info)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              showCustomToast({
                type: "warning",
                variant: "warning",
                title: "Are you sure?",
                description: "Are you sure you want to perform this operation",
              })
            }
          >
            <Feather name="code" size={16} color="#8B5CF6" />
            <Text style={styles.buttonText}>Custom Component (Warning)</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hook Example</Text>
        <Text style={styles.sectionDescription}>
          Using the useToast hook for programmatic control
        </Text>

        <HookExampleScreen />
      </View>
    </ScreenWrapper>
  );
}

export default function ToastDemo() {
  return (
    <SafeAreaProvider>
      <ToastProviderWithViewport>
        <ToastScreen />
      </ToastProviderWithViewport>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#9CA3AF",
    lineHeight: 24,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#F3F4F6",
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 20,
    lineHeight: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#1a1a1a",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minWidth: 140,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#E5E7EB",
  },
  customToast: {
    padding: 4,
  },
  customToastHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    gap: 8,
  },
  customToastTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  customToastMessage: {
    color: "#D1D5DB",
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    paddingVertical: 32,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
});
