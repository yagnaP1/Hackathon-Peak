import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import { Redirect, Route } from "react-router-dom";
import { CitiesProvider } from "./context/citiesContext/CitiesProvider";
import { MusicProvider } from "./context/musicContext/MusicProvide";
import { MuteProvider } from "./context/muteContext/MuteProvider";
import { PlaybackProvider } from "./context/playbackContext/PlaybackProvider";
import Home from "./pages/Home.jsx";
import { Selector } from "./pages/Nav.jsx";

const App: React.FC = () => (
  <CitiesProvider>
    <MusicProvider>
      <MuteProvider>
        <PlaybackProvider>
          <IonApp>
            <IonReactRouter>
              <Selector />
              <IonRouterOutlet id="main">
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
              </IonRouterOutlet>
            </IonReactRouter>
          </IonApp>
        </PlaybackProvider>
      </MuteProvider>
    </MusicProvider>
  </CitiesProvider>
);

export default App;
