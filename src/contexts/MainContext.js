import React, { useEffect, useState } from 'react';

import data from 'api.json';
console.log(data);

const Context = React.createContext();

const Provider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  const randomizeColor = () => {
    setColor('');
  };

  const increment = () => {
    setCount((prev) => ++prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return;
  }, []);

  return (
    <Context.Provider
      value={{
        color,
        count,
        data,
        increment,
        isLoading,
        randomizeColor,
      }}>
      {children}
    </Context.Provider>
  );
};

export { Provider };
export default Context;
