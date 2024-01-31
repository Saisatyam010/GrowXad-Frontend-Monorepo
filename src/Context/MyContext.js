import { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState({
    user: null,
    isAuthenticated: false,
  });
  console.log(sharedState)

  const updateSharedState = (newState) => {
    setSharedState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <MyContext.Provider value={{ sharedState, updateSharedState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };