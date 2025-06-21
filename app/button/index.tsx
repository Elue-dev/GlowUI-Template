import { useCallback, useState } from "react";
import Button from "../components/ui/custom/button";
import ScreenWrapper from "../components/ui/custom/screen-wrapper";

export default function ButtonScreen() {
  const [primaryLoading, setPrimaryLoading] = useState(false);
  const [primaryLoadingV2, setPrimaryLoadingV2] = useState(false);
  const [gradentLoading, setGradientLoading] = useState(false);

  const handlePrimaryPress = useCallback<() => any | Function>(() => {
    setPrimaryLoading(true);
    setTimeout(() => {
      setPrimaryLoading(false);
    }, 2000);
  }, []);

  const handlePrimaryPressV2 = useCallback<() => any | Function>(() => {
    setPrimaryLoadingV2(true);
    setTimeout(() => {
      setPrimaryLoadingV2(false);
    }, 2000);
  }, []);

  const handleGradientPress = useCallback<() => any | Function>(() => {
    setGradientLoading(true);
    setTimeout(() => {
      setGradientLoading(false);
    }, 2000);
  }, []);

  return (
    <ScreenWrapper>
      <Button
        isLoading={primaryLoading}
        onPress={handlePrimaryPress}
        title="Primary with animation"
      />

      <Button
        title="Primary without animation"
        isLoading={primaryLoadingV2}
        onPress={handlePrimaryPressV2}
        noAmination
      />

      <Button
        title="Gradient button"
        isLoading={gradentLoading}
        onPress={handleGradientPress}
        gradientColors={["#667eea", "#764ba2"]}
      />
    </ScreenWrapper>
  );
}
