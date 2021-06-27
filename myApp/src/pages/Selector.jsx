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
import React, { useContext, useState } from "react";
import { CitiesContext } from "../context/citiesContext/CitiesContext";
import "./Selector.css";
import { cities } from "../context/citiesContext/CitiesProvider";

export const Selector = () => {
  const { selectedCity, setSelectedCity } = useContext(CitiesContext);

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
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
