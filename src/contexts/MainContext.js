import React, { useEffect, useState } from 'react';

const Context = React.createContext();

const Provider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  const randomizeColor = () => {
    setColor('');
  };

  const increment = () => {
    setCount((prev) => ++prev);
  };

  useEffect(() => {
    return;
  }, []);

  return (
    <Context.Provider
      value={{
        count,
        increment,
        color,
      }}>
      {children}
    </Context.Provider>
  );
};

export { Provider };
export default Context;
