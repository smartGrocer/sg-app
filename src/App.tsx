import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import ProductPage from "./components/ProductPage/ProductPage";

const App = (): JSX.Element => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/" component={Home} />
					<Route path="/product/:id" component={ProductPage} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
