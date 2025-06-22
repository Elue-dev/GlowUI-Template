import { useToast } from "@/app/context/toast-context";
import React, { useEffect } from "react";
import {
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import type {
  Toast as ToastType,
  ToastType as ToastVariant,
} from "./toast.types";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface ToastProps {
  toast: ToastType;
  index: number;
  onHeightChange?: (id: string, height: number) => void;
}

const getBackgroundColor = (type: ToastVariant) => {
  switch (type) {
    case "success":
      return "#001f0f";
    case "error":
      return "#2d0607";
    case "warning":
      return "#1d1f00";
    case "info":
      return "#000d1f";
    default:
      return "#262626";
  }
};

const getTextColor = (type: ToastVariant) => {
  switch (type) {
    case "success":
      return "#59f3a6";
    case "error":
      return "#ff9ea1";
    case "warning":
      return "#f3cf58";
    case "info":
      return "#5896f3";
    default:
      return "#262626";
  }
};

const getIconForType = (type: ToastVariant) => {
  switch (type) {
    case "success":
      return "✓";
    case "error":
      return "✗";
    case "warning":
      return "⚠";
    case "info":
      return "ℹ";
    default:
      return "";
  }
};

export const Toast: React.FC<ToastProps> = ({ toast, index }) => {
  const { dismiss } = useToast();
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(
    toast.options.position === "top" ? -20 : 20
  );
  const scale = useSharedValue(0.95);
  const rotateZ = useSharedValue(toast.options.position === "top" ? -2 : 2);

  const getStackOffset = () => {
    const baseOffset = 8;
    const maxOffset = 20;
    const offset = Math.min(index * baseOffset, maxOffset);
    return toast.options.position === "top" ? -offset : offset;
  };

  const handleDismiss = () => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
      delete: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
    });
    dismiss(toast.id);
    toast.options.onClose?.();
  };

  useEffect(() => {
    const delay = index * 50;

    LayoutAnimation.configureNext({
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    });

    setTimeout(() => {
      opacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      });

      translateY.value = withSpring(getStackOffset(), {
        damping: 20,
        stiffness: 150,
        mass: 0.6,
        velocity: 0.5,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      });

      scale.value = withSpring(1, {
        damping: 20,
        stiffness: 150,
        mass: 0.6,
      });

      rotateZ.value = withTiming(0, {
        duration: 300,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      });
    }, delay);

    if (toast.options.duration > 0) {
      const exitDelay = Math.max(0, toast.options.duration - 500);

      const exitAnimations = () => {
        opacity.value = withTiming(0, {
          duration: 250,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        });

        translateY.value = withTiming(
          toast.options.position === "top" ? -20 : 20,
          {
            duration: 250,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          }
        );

        scale.value = withTiming(0.95, {
          duration: 250,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        });

        setTimeout(() => {
          runOnJS(handleDismiss)();
        }, 250);
      };

      setTimeout(exitAnimations, exitDelay);
    }
  }, [toast, opacity, translateY, scale, rotateZ, index]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateY: translateY.value },
        { scale: scale.value },
        { rotateZ: `${rotateZ.value}deg` },
      ],
      zIndex: 1000 - index,
    };
  });

  const handlePress = () => {
    opacity.value = withTiming(0, {
      duration: 200,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    });

    translateY.value = withTiming(toast.options.position === "top" ? -20 : 20, {
      duration: 200,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    });

    scale.value = withTiming(0.95, {
      duration: 200,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    });

    setTimeout(() => {
      handleDismiss();
    }, 200);
  };

  const backgroundColor = getBackgroundColor(toast.options.type);
  const textColor = getTextColor(toast.options.type);
  const icon = getIconForType(toast.options.type);
  const hideIcon = toast.options.hideIcon;

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        animatedStyle,
        {
          marginTop: index > 0 ? 8 : 0,
          marginBottom: index > 0 ? 0 : 8,
        },
      ]}
    >
      <Pressable
        style={[styles.toast, { backgroundColor }]}
        onPress={handlePress}
        android_ripple={{ color: "rgba(255, 255, 255, 0.1)" }}
      >
        {icon && !hideIcon ? (
          <Text style={[styles.icon, { color: textColor }]}>{icon}</Text>
        ) : null}
        <View style={styles.contentContainer}>
          {typeof toast.content === "string" ? (
            <Text style={[styles.text, { color: textColor }]}>
              {toast.content}
            </Text>
          ) : (
            toast.content
          )}
        </View>
        {toast.options.action && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              toast.options.action?.onPress!();
              dismiss(toast.id);
            }}
          >
            <Text style={styles.actionText}>{toast.options.action.label}</Text>
          </TouchableOpacity>
        )}
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    width: "90%",
    maxWidth: 400,
    alignSelf: "center",
    marginVertical: 4,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  toast: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  icon: {
    fontSize: 20,
    marginRight: 12,
    fontWeight: "bold",
    textAlign: "center",
    width: 24,
  },
  contentContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginLeft: 12,
  },
  actionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
