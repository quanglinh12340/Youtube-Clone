import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);

  return (
    <AppContext.Provider value={{ sidebar, setSidebar, category, setCategory }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
