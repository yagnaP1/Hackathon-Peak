import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonLabel,
  IonSelect,
  IonItem,
  IonSelectOption,
  IonFooter,
  IonList,
  IonMenu,
  IonToolbar,
  IonMenuToggle,
} from "@ionic/react";
import React, { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { cities } from "../components/ExploreContainer";
import ReactPlayer from "react-player";

const Home = (props) => {
  const [selectedPlace, setSelectedPlace] = useState("amsterdam");

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonTitle className="title">Peak</IonTitle>
        </IonHeader>

        <IonMenu side="start" menuId="first">
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Peak</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem>
                <IonLabel>Cities</IonLabel>
                <IonSelect
                  className="dropdown"
                  value={selectedPlace}
                  onIonChange={(e) => setSelectedPlace(e.detail.value)}
                >
                  {Object.entries(cities).map(([keyName, city]) => {
                    return (
                      <IonMenuToggle key={city.id} value={keyName}>
                        {city.name}
                      </IonMenuToggle>
                    );
                  })}
                </IonSelect>
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        {/* <IonList>
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
        </IonList> */}

        <div className="video-background">
          <div className="video-foreground">
            <ReactPlayer
              className="iframe"
              Autoplay={true}
              playing={true}
              url={cities[selectedPlace].url}
            />
          </div>
        </div>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;

{
  /* <iframe
  title={cities[selectedPlace]}
  src={cities[selectedPlace].url}
  allow="autoplay"
  allowFullScreen={false}
></iframe> */
}
