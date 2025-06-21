export interface AvatarItem {
  id: string;
  uri?: string;
  name?: string;
}

interface AvatarGroupProps {
  avatars: AvatarItem[];
  size?: number;
  max?: number;
  overlap?: number;
  onPress?(id: string): void;
}
