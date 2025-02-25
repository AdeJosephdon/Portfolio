import { useState, createContext} from "react";

import PortfolioData from "./PortfolioData"

export const DataContext = createContext();

function DataProvider({ children }) {

  const data = PortfolioData

  const [isDark, setIsDark] = useState(false)

  function colorMode() {
    setIsDark(prevmode => !prevmode)
  }


  return (
    <DataContext.Provider
            value={{
                data,
                isDark,
                colorMode
            }}
        >
            {children}
        </DataContext.Provider>

  );
}

export default DataProvider;