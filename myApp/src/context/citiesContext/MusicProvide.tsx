import { useState } from "react";
import { MusicContext } from "./MusicContext";

export const MusicProvider: any = ({ children }) => {
  const [stationFilter, setStationFilter] = useState("all");

  return (
    <MusicContext.Provider
      value={{
        stationFilter: stationFilter,
        setStationFilter: setStationFilter,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
