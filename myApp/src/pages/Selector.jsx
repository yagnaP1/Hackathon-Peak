import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import { CitiesContext } from "../context/citiesContext/CitiesContext";
import { cities } from "../context/citiesContext/CitiesProvider";
import { MuteContext } from "../context/citiesContext/MuteContext";
import { Music } from "./Music";
import { Radio } from "./Radio";

export const Selector = () => {
  const { selectedCity, setSelectedCity } = useContext(CitiesContext);
  const { muteState, setMuteState } = useContext(MuteContext);

  return (
    <IonMenu type="overlay" side="end" contentId="main-content">
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle className="title">Peak</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem>
              <IonLabel>Cities</IonLabel>
              <IonSelect
                className="dropdown"
                value={selectedCity}
                onIonChange={(e) => setSelectedCity(e.detail.value)}
              >
                {Object.entries(cities).map(([keyName, city]) => {
                  return (
                    <IonSelectOption key={city.id} value={keyName}>
                      {city.name}
                    </IonSelectOption>
                  );
                })}
              </IonSelect>
            </IonItem>
            {/* Street Sound */}
            <IonItem>
              <IonLabel>Street Sound</IonLabel>
              <IonButton
                onClick={() => {
                  setMuteState(!muteState);
                }}
              >
                Mute
              </IonButton>
            </IonItem>

            {/* Speed */}
            <IonItem>
              <IonLabel>Speed</IonLabel>
              <IonButton>1.0</IonButton>
              <IonButton>1.5</IonButton>
              <IonButton>2.0</IonButton>
            </IonItem>
          </IonMenuToggle>

          {/* Genre selector */}
          <IonItem>
            <IonLabel>Genre</IonLabel>
            <Music />
          </IonItem>

          {/* Stations */}
          <IonItem>
            <Radio />
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
