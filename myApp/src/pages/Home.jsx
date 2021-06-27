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
          <div className="sidebar">
            <IonMenuButton />
          </div>
        </IonList>

        <div className="video-background">
          <div className="video-foreground">
            <ReactPlayer
              controls={false}
              className="iframe"
              playing={true}
              loop={true}
              config={{
                youtube: {
                  playerVars: {
                    start: 200,
                    end: 3600,
                    autoplay: 1,
                  },
                },
              }}
              url={cities[selectedCity]?.url}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
