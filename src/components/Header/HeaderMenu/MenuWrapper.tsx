import React from "react";
import ItemDropdown from "./ItemDropdown";
import MenuDropdown from "./MenuDropdown";

const MenuWrapper = () => {
  const [step, setStep] = React.useState(1);
  return (
    <>
      {step == 1 && <MenuDropdown isShowMenu={false} step={step} setStep={setStep} />}
      {step == 2 && <ItemDropdown step={step} setStep={setStep} />}
    </>
  );
};

export default MenuWrapper;
