import { useState, useContext, createContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [footerState, setFooterState] = useState(true);

  return (
    <DataContext.Provider
      value={{
        count,
        setCount,
        footerState,
        setFooterState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
