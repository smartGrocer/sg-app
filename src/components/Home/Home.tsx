import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { SERVER_URL } from "../../common/environment";

import { ProductList } from "../../common/types/products";
import ProductTile from "../ProductTile.tsx/ProductTile";

const Home = (): JSX.Element => {
	const [allProducts, setAllProducts] = useState<ProductList>();

	useEffect(() => {
		const fetchAllProducts = async (): Promise<void> => {
			if (SERVER_URL) {
				const url = `${SERVER_URL}/api`;
				const response = await axios.get(url);
				const { data } = response.data;
				console.log("response", data);
				setAllProducts(data);
			}
		};
		fetchAllProducts();
	}, []);
	return (
		<IonContent>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "space-between",
					flexWrap: "wrap",

					width: "100%",
				}}
			>
				{allProducts?.map((product) => (
					<ProductTile key={product.id} product={product} />
				))}
			</div>
		</IonContent>
	);
};

export default Home;
