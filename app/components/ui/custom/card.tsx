import { Href, useRouter } from "expo-router";
import React, { Fragment, ReactNode } from "react";
import { Text, View, ViewStyle } from "react-native";
import {
  CardContent,
  CardHeader,
  CardTitle,
  Card as UICard,
} from "../lib/card/card";

interface CardProps {
  title?: string;
  description?: string;
  content?: string;
  variant?: "default" | "elevated" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  backgroundColor?: string;
  icon?: React.ReactNode;
  link?: string | undefined;
  animationType?: "scale" | "fade" | "slide" | "bounce" | "none";
  style?: ViewStyle;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  content,
  variant = "default",
  size = "md",
  backgroundColor,
  animationType = "scale",
  icon,
  link,
  style,
  children,
}: CardProps) {
  const router = useRouter();

  return (
    <UICard
      variant={variant}
      size={size}
      backgroundColor={backgroundColor}
      onPress={link ? () => router.push(`/${link}` as Href) : () => {}}
      animationType={animationType}
      style={style}
    >
      {children ? (
        children
      ) : (
        <Fragment>
          <CardHeader spacing="md">
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {icon && <View style={{ marginRight: 12 }}>{icon}</View>}
              <View>
                {title && (
                  <CardTitle size="lg" weight="semibold">
                    {title}
                  </CardTitle>
                )}

                {description && <Text>{description}</Text>}
              </View>
            </View>
          </CardHeader>
          {content && (
            <CardContent>
              <Text>{content}</Text>
            </CardContent>
          )}
        </Fragment>
      )}
    </UICard>
  );
}
