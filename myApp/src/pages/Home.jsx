import { IonContent, IonList, IonMenuButton, IonPage } from "@ionic/react";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import ExploreContainer, { cities } from "../components/ExploreContainer";
import "./Home.css";
import { useContext } from "react";
import { CitiesContext } from "../context/citiesContext/CitiesContext";

const Home = (props) => {
  const [selectedPlace, setSelectedPlace] = useState("amsterdam");
  // const cities: any = useContext(CitiesContext);

  // cities.setSelectedPlace("amsterdam");

  return (
    <IonPage id="main-content">
      <IonContent>
        <IonList>
          <div
            className="sidebar"
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <IonMenuButton />
          </div>
          {/* <IonItem>
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
          </IonItem> */}
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
