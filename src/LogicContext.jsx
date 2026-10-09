import { useContext, createContext, useState } from "react";

// Create context
const LogicContext = createContext();

// Create Provider to manage the logic and state
export function LogicProvider({ children }) {
  const randomNumber = () => {
    return Math.floor(Math.random() * (9 - 1) + 1);
  };

  const [scores] = useState([1, 2, 3]);
  const [moleLocation, setMoleLocation] = useState(randomNumber);
  const [isMole, setIsMole] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentScore, setCurrentScore] = useState();

  const toggleStart = () => setHasStarted(!hasStarted);

  const value = {
    scores,
    currentScore,
    moleLocation,
    isMole,
    hasStarted,
    toggleStart,
  };

  return (
    <LogicContext.Provider value={value}>{children}</LogicContext.Provider>
  );
}

export function useLogic() {
  const context = useContext(LogicContext);
  if (!context) throw Error("useLogic must be used within a Logic Provider");
  return context;
}
