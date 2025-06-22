import React from "react";
import SuccessDialog from "../components/ui/custom/dialogs/success-dialog";
import ScreenWrapper from "../components/ui/custom/screen-wrapper";
import { useDialogStore } from "../store/useDialogStore";

export default function DialogScreen() {
  const { setOpen } = useDialogStore();

  return (
    <ScreenWrapper>
      {/* <InfoDialog
        title="Alert Dialog"
        description="Information dialog with single action"
        buttonText="Update Now"
        dialogHeader="Update Available"
        dialogDescription="A new version of the app is available. Update now to get the latest
            features and improvements."
        dialogButtonText="Update Now"
        dialogFunction={() => {
          alert("hi");
          setOpen(false);
        }}
      /> */}

      <SuccessDialog
        title="Success"
        description="Show Success"
        buttonText="Update Now"
        dialogHeader="Payment Successful!"
        dialogDescription="Your payment has been processed successfully. You'll eceive a confirmation email shortly."
        dialogButtonText="Continue"
      />
    </ScreenWrapper>
  );
}
