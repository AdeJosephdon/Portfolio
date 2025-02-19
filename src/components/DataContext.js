import React, { createContext} from "react";

import PortfolioData from "./PortfolioData"

export const DataContext = createContext();

function DataProvider({ children }) {

  const data = PortfolioData


  return (
    <DataContext.Provider
            value={{
                data
            }}
        >
            {children}
        </DataContext.Provider>

  );
}

export default DataProvider;