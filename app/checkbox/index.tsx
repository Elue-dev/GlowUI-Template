import React, { useState } from "react";
import Checkbox from "../components/ui/custom/checkbox";
import ScreenWrapper from "../components/ui/custom/screen-wrapper";

export default function index() {
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
  });

  const updateAgreement =
    (key: keyof typeof agreements) => (checked: boolean) => {
      setAgreements((prev) => ({ ...prev, [key]: checked }));
    };

  return (
    <ScreenWrapper>
      <Checkbox
        isChecked={agreements.terms}
        label="I agree to the Terms of Service"
        onPress={updateAgreement("terms")}
      />

      <Checkbox
        isChecked={agreements.privacy}
        label="I accept the provacy policy"
        onPress={updateAgreement("privacy")}
        activeColor="#fff"
        checkMarkColor="#000"
      />
    </ScreenWrapper>
  );
}
