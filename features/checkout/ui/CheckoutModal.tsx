import { Modal } from "@/shared/ui/Modal/Modal";
import { ConfirmStep } from "./ConfirmStep";
import { FormStep } from "./FormStep";
import { SuccessForm } from "./SuccesForm";
import { useCheckoutStore } from "../model/useCheckoutStore";
import { AddressStep } from "./AddressStep";
import { PaymentStep } from "./PaymentStep";
import { UserInfoStep } from "./UserInfoStep";


export const CheckoutModal = ({ total } : { total: number }) => {
  const { step, close } = useCheckoutStore();

  return (
    <Modal open={step !== null} onClose={close}>
      {step === "confirm" && <ConfirmStep total={total} />}
      {step === "userInfo" && <UserInfoStep />}
      {step === "payment" && <PaymentStep />}
      {step === "success" && <SuccessForm />}

    </Modal>
  );
};