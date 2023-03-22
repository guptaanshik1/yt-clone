
import React from "react";

export const FormPageContext = React.createContext(null);

export const useFormPageContext = () => {
  const context = React.useContext(FormPageContext);
  if (!context)
    throw new Error("useFormPageContext can not be used outside it's provider");
  return context;
};
