import { IonContent, IonList, IonMenuButton, IonPage } from "@ionic/react";
import { useContext } from "react";
import ReactPlayer from "react-player";
import { CitiesContext } from "../context/citiesContext/CitiesContext";
import { cities } from "../context/citiesContext/CitiesProvider";
import "./Home.css";

const Home = (props) => {
  const { selectedCity } = useContext(CitiesContext);

  return (
    <IonPage id="main-content">
      <IonContent>
        <IonList>
          <div
            className="sidebar"
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <IonMenuButton />
          </div>
        </IonList>

        <div className="video-background">
          <div className="video-foreground">
            <ReactPlayer
              controls={false}
              className="iframe"
              playing={true}
              url={cities[selectedCity]?.url}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
