import { MusicContext } from "../context/citiesContext/MusicContext";
import React, { useContext, useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import { IonContent } from "@ionic/react";
import AudioPlayer from "react-h5-audio-player";
import "./Home.css";

export const Radio = () => {
  const [stations, setStations] = useState();
  const { stationFilter } = useContext(MusicContext);

  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      setStations(data);
    });
  }, [stationFilter]);

  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window));

    const stations = await api
      .searchStations({
        language: "english",
        tag: stationFilter,
        limit: 5,
      })
      .then((data) => {
        return data;
      });
    return stations;
  };

  return (
    <IonContent>
      {stations?.map((station, index) => {
        return (
          <div key={station.id}>
            <div className="stationName">{station.name}</div>
            <AudioPlayer
              src={station.urlResolved}
              showJumpControls={false}
              layout="stacked"
              customProgressBarSection={[]}
              customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
              autoPlayAfterSrcChange={false}
            />
          </div>
        );
      })}
    </IonContent>
  );
};
