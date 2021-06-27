import { useState } from "react";
import { CitiesContext } from "./CitiesContext";

export const CitiesProvider: any = ({ children }) => {
  const [selectedPlace, setSelectedPlace] = useState("amsterdam");

  return (
    <CitiesContext.Provider value={{ selectedPlace, setSelectedPlace }}>
      {children}
    </CitiesContext.Provider>
  );
};
