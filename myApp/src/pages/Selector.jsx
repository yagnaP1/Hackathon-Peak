import {
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
import React, { useState } from "react";
import { cities } from "../components/ExploreContainer";
import "./Selector.css";

export const Selector = () => {
  const [selectedPlace, setSelectedPlace] = useState("amsterdam");

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
                value={selectedPlace}
                onIonChange={(e) => setSelectedPlace(e.detail.value)}
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
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
