import React, { useEffect, useState } from "react";
import ScreenWrapper from "../components/ui/custom/screen-wrapper";
import { Avatar } from "../components/ui/lib/avatar/avatar";

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
    </ScreenWrapper>
  );
}
