interface AvatarItem {
  uri: string;
  name?: string;
}

export interface AvatarGroupProps {
  image: AvatarItem;
  size?: number;
  onPress?(id: string): void;
  showBorder?: boolean;
  borderColor?: string;
  borderWidth?: number;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  loading?: boolean;
  showAvatar?: boolean;
  showText?: boolean;
  textPosition?: "top" | "bottom" | "right";
  textStyle?: object;
  shimmerSpeed?: number;
  pressedScale?: number;
  pressedOpacity?: number;
  showOnlineIndicator?: boolean;
  onlineIndicatorColor?: string;
  onlineIndicatorSize?: number;
}
