import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import { SERVER_URL } from "../../common/environment";

import { ProductList } from "../../common/types/products";
import ProductTile from "../ProductTile.tsx/ProductTile";
import Header from "../Header/Header";

const Home = (): JSX.Element => {
	const [allProducts, setAllProducts] = useState<ProductList>();

	useEffect(() => {
		const fetchAllProducts = async (): Promise<void> => {
			if (SERVER_URL) {
				const url = `${SERVER_URL}/api`;
				const response = await axios.get(url);
				const { data } = response.data;
				setAllProducts(data);
			}
		};
		fetchAllProducts();
	}, []);
	return (
		<IonContent>
			<Header title="Home" />
			<div className="flex flex-wrap justify-evenly w-full items-start ">
				{allProducts?.map((product) => (
					<ProductTile key={product.id} product={product} />
				))}
			</div>
		</IonContent>
	);
};

export default Home;
