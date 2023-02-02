import { createContext, useState } from "react";

export const InquiryFinalisedContext = createContext({
  isFinalised: false,
  setFinalised: () => null,
});

export const InquiryFinalisedContextProvider = ({ children }) => {
  const [isFinalised, setIsFinalised] = useState(false);

  const value = {
    isFinalised: isFinalised,
    setFinalised: (newValue) => {
      setIsFinalised(newValue);
    },
  };

  return (
    <InquiryFinalisedContext.Provider value={value}>
      {children}
    </InquiryFinalisedContext.Provider>
  );
};
