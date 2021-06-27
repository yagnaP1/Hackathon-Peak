import React, { useContext } from "react";
import "react-h5-audio-player/lib/styles.css";
import { IonSelect, IonSelectOption } from "@ionic/react";
import { MusicContext } from "../context/citiesContext/MusicContext";
import "./Home.css";

export const Music = () => {
  const { setStationFilter } = useContext(MusicContext);

  const filter = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ];

  return (
    <div>
      {/* filter */}
      <IonSelect
        className="filter"
        onIonChange={(e) => setStationFilter(e.detail.value)}
      >
        <IonSelectOption className="selectedGenre">
          {filter.map((genre, index) => {
            return (
              <IonSelectOption key={index} value={genre}>
                {genre}
              </IonSelectOption>
            );
          })}
        </IonSelectOption>
      </IonSelect>
    </div>
  );
};
