import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import { SERVER_URL } from "../../common/environment";

import { IResSource, ProductList } from "../../common/types/products";
import ProductTile from "../ProductTile.tsx/ProductTile";
import Header from "../Header/Header";
import {
	getDeviceCache,
	setDeviceCache,
} from "../../common/helpers/deviceCache";

interface HomeProps {
	resSource: IResSource;
	setResSource: (resSource: IResSource) => void;
}

const Home = (props: HomeProps): JSX.Element => {
	const { resSource, setResSource } = props;
	const [allProducts, setAllProducts] = useState<ProductList>();

	useEffect(() => {
		const fetchAllProducts = async (): Promise<void> => {
			const cachedProducts = (await getDeviceCache(
				`allProducts`
			)) as ProductList | null;

			if (cachedProducts) {
				setAllProducts(cachedProducts);
				setResSource("local");
				return;
			}
			if (SERVER_URL) {
				const url = `${SERVER_URL}/api`;
				const response = await axios.get(url);
				const { data } = response.data;
				setAllProducts(data);
				setResSource(response.data.from);
				await setDeviceCache({
					key: "allProducts",
					value: JSON.stringify(data),
					ttl: 60 * 60 * 24 * 1,
				});
			}
		};
		fetchAllProducts();
	}, [setResSource]);
	return (
		<IonContent>
			<Header title="Home" resSource={resSource} />
			<div className="flex flex-wrap justify-evenly w-full items-start ">
				{allProducts?.map((product) => (
					<ProductTile key={product.id} product={product} />
				))}
			</div>
		</IonContent>
	);
};

export default Home;
