import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonLabel,
  IonSelect,
  IonItem,
  IonList,
  IonSelectOption,
  IonItemDivider,
} from "@ionic/react";
import React, { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { cities } from "../components/ExploreContainer";

type Cities = typeof cities[number];
const compareWith = (o1: Cities, o2: Cities) => {
  return o1 && o2 ? o1.id === o2.id : o1 === o2;
};

const Home: React.FC = (props) => {
  const [selectedPlace, setSelectedPlace] = useState<Cities[]>([]);

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonTitle className="title">Peak</IonTitle>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>Cities</IonLabel>
            <IonSelect
              compareWith={compareWith}
              value={selectedPlace}
              multiple
              onIonChange={(e) => setSelectedPlace(e.detail.value)}
            >
              {cities.map((city) => (
                <IonSelectOption key={city.id} value={city}>
                  {city.name}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItemDivider>Selected City</IonItemDivider>
          {selectedPlace.length ? (
            selectedPlace.map((city) => (
              <IonItem key={city.id}>{city.name}</IonItem>
            ))
          ) : (
            <IonItem>(none selected)</IonItem>
          )}
        </IonList>
        <IonContent>
          {cities.map((city) => (
            {selectedPlace.name === city.name ?
            (<iframe
              key={city.id}
              title={city.name}
              src={city.url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={false}
            ></iframe>) : 
          ))}
        </IonContent>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
