import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Toast, ToastPosition, ToastType } from "../../lib/toast";

interface BaseToastProps {
  type: ToastType;
  title?: string;
  description: string;
  duration?: number;
  variant?: ToastType;
  position?: ToastPosition;
  actionLabel?: string;
  onPress?: VoidFunction;
}

export function showToast({
  type,
  description,
  duration = 4000,
  actionLabel,
  position = "bottom",
  onPress,
}: BaseToastProps) {
  Toast.show(description, {
    type,
    duration,
    position,
    action: {
      label: actionLabel ? actionLabel : "Dismiss",
      onPress: onPress ? onPress : () => Toast.dismiss,
    },
  });
}

export function showCustomToast({
  type = "default",
  title,
  description,
  variant = "default",
  duration = 4000,
  position = "bottom",
  actionLabel,
  onPress,
}: BaseToastProps) {
  Toast.show(
    <CustomToastComponent
      variant={variant}
      title={title}
      description={description}
    />,
    {
      type,
      duration,
      position,
      hideIcon: true,
      action: {
        label: actionLabel ? actionLabel : "Dismiss",
        onPress: onPress ? onPress : () => Toast.dismiss,
      },
    }
  );
}

function CustomToastComponent({
  variant,
  title,
  description,
}: {
  variant: ToastType;
  title?: string;
  description: string;
}) {
  const icons: Record<ToastType, keyof typeof MaterialIcons.glyphMap> = {
    success: "check-circle",
    info: "info",
    default: "info",
    error: "error",
    warning: "warning",
  };

  const colors: Record<ToastType, string> = {
    success: "#59f3a6",
    info: "#5896f3",
    default: "#262626",
    error: "#ff9ea1",
    warning: "#f3cf58",
  };

  return (
    <View style={{ padding: 12 }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}
      >
        <MaterialIcons
          name={icons[variant]}
          size={20}
          color={colors[variant]}
          style={{ marginRight: 6 }}
        />
        {title && (
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "600" }}>
            {title}
          </Text>
        )}
      </View>
      <Text style={{ color: "#D1D5DB", fontSize: 14, lineHeight: 20 }}>
        {description}
      </Text>
    </View>
  );
}

export function LoadingToastComponent({
  title = "Processing",
  description = "Please wait while we process your request...",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <View style={styles.customToast}>
      <View style={styles.customToastHeader}>
        <MaterialIcons name="hourglass-empty" size={18} color="#8B5CF6" />
        <Text style={styles.customToastTitle}>{title}</Text>
      </View>
      <Text style={styles.customToastMessage}>{description}</Text>
    </View>
  );
}

export function showLoadingToast() {
  const id = Toast.show(<LoadingToastComponent />, {
    duration: 0,
    action: {
      label: "Cancel",
      onPress: () => {
        Toast.dismiss(id);
        showToast({
          type: "warning",
          description: "Operation cancelled",
          actionLabel: "Retry",
          onPress: () => alert("Retry pressed"),
        });
      },
    },
  });

  return id;
}

export const styles = StyleSheet.create({
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
});
