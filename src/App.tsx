import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import ProductPage from "./components/ProductPage/ProductPage";
import { IResSource } from "./common/types/products";

const App = (): JSX.Element => {
	const [resSource, setResSource] = useState<IResSource>(null);

	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/">
						<Home
							resSource={resSource}
							setResSource={setResSource}
						/>
					</Route>
					<Route path="/product/:id">
						<ProductPage
							resSource={resSource}
							setResSource={setResSource}
						/>
					</Route>
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
