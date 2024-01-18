import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";

const App = (): JSX.Element => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/" component={Home} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
