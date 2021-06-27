import { useState } from "react";
import { PlaybackContext } from "./PlaybackContext";

export const PlaybackProvider: any = ({ children }) => {
  const [playbackRate, setPlaybackRate] = useState(1);

  return (
    <PlaybackContext.Provider
      value={{
        playbackRate: playbackRate,
        setPlaybackRate: setPlaybackRate,
      }}
    >
      {children}
    </PlaybackContext.Provider>
  );
};
