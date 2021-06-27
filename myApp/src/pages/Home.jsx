import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonLabel,
  IonSelect,
  IonItem,
  IonSelectOption,
  IonButton,
  IonList,
  IonMenuButton,
} from "@ionic/react";
import React, { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { cities } from "../components/ExploreContainer";
import ReactPlayer from "react-player";
import { Selector } from "./Selector";

const Home = (props) => {
  const [selectedPlace, setSelectedPlace] = useState("amsterdam");

  return (
    <IonPage id="main-content">
      <IonContent>
        <IonHeader>
          <IonTitle className="title">Peak</IonTitle>
        </IonHeader>

        <IonList>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <IonMenuButton />
            Cities
          </div>
          <IonItem>
            <IonLabel></IonLabel>
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
        </IonList>

        <div className="video-background">
          <div className="video-foreground">
            <ReactPlayer
              className="iframe"
              playing={true}
              url={cities[selectedPlace].url}
            />
          </div>
        </div>
      </IonContent>
      <ExploreContainer />
    </IonPage>
  );
};

export default Home;
