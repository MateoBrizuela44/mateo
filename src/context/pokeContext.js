import {createContext, useState} from "react";

export const PokeContext = createContext();

export const PokeProvider = ({children}) => {
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  return (
    <PokeContext.Provider
      value={{
        openAlertDialog,
        setOpenAlertDialog,
        isLoading,
        setIsloading,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
