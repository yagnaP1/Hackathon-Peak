import { useState } from "react";
import { MuteContext } from "./MuteContext";

export const MuteProvider: any = ({ children }) => {
  const [muteState, setMuteState] = useState(false);

  return (
    <MuteContext.Provider
      value={{
        muteState: muteState,
        setMuteState: setMuteState,
      }}
    >
      {children}
    </MuteContext.Provider>
  );
};
