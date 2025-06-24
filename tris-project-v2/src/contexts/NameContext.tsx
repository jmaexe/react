import { createContext, useContext, useState } from "react";

type NameContextType = {
  name: string | null;
  setName: (name: string) => void;
  clearName: () => void;
};

const NameContext = createContext<NameContextType | undefined>(undefined);

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setNameState] = useState(() => localStorage.getItem("name"));

  const setName = (name: string) => {
    localStorage.setItem("name", name);
    setNameState(name);
  };

  const clearName = () => {
    localStorage.removeItem("name");
    setNameState(null);
  };

  return (
    <NameContext.Provider value={{ name, setName, clearName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const context = useContext(NameContext);
  if (!context) throw new Error("useName must be used within NameProvider");
  return context;
};
