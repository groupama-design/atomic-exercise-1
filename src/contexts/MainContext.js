import React, { useEffect, useState } from 'react';

import data from 'api.json';

const Context = React.createContext();
const Provider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState(localStorage.getItem('count') || 0);
  const [color, setColor] = useState(null);

  const incrementRandomize = () => {
    // Randomize color
    setColor(Math.round(Math.random() * 7));

    // Increment
    setCount((prev) => ++prev);

    // Persist
    localStorage.setItem('count', count + 1);
  };

  const resetCounter = () => {
    setCount(0);
    localStorage.setItem('count', 0);
  };

  useEffect(() => {
    // Test loading
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
        incrementRandomize,
        isLoading,
        resetCounter,
      }}>
      {children}
    </Context.Provider>
  );
};

export { Provider };
export default Context;
