import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ScreenWrapper from "../components/ui/custom/screen-wrapper";
import Text from "../components/ui/custom/text";
import { Avatar } from "../components/ui/lib/avatar/avatar";
import { AvatarGroup } from "../components/ui/lib/avatar/avatar-group";
import { teamMembers } from "../data";

export default function index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function prepare() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    })();
  }, []);

  return (
    <ScreenWrapper>
      <View className="mt-5">
        <Text large centered classNames="mb-5">
          Avatar
        </Text>
        <Avatar
          image={{
            uri: "https://pbs.twimg.com/profile_images/1521991195395870720/8a0-NLLg_400x400.jpg",
            name: "Wisdom Elue",
          }}
          showAvatar={isLoading ? false : true}
          loading={isLoading}
          showOnlineIndicator={true}
          size={80}
        />
      </View>

      <View className="mt-10">
        <Text large centered classNames="mb-5">
          Avatar Group
        </Text>
        <AvatarGroup
          size={80}
          max={4}
          onPress={(id) => console.log(`Avatar ${id} pressed`)}
          overlap={20}
          avatars={teamMembers}
        />
      </View>
    </ScreenWrapper>
  );
}
