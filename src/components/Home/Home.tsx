import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import { useLocation } from "react-router-dom";
import {
	ALL_PRODUCTS_CACHE_TIMEOUT,
	SERVER_URL,
} from "../../common/environment";

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
	const location = useLocation();

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const page = queryParams.get("page");

		setResSource(null);
		const fetchAllProducts = async (): Promise<void> => {
			const cachedProducts = (await getDeviceCache(
				`allProducts-${page}`
			)) as ProductList | null;

			if (cachedProducts) {
				setAllProducts(cachedProducts);
				setResSource("local");
				return;
			}

			if (SERVER_URL) {
				const url = `${SERVER_URL}/api${page ? `?page=${page}` : ""}`;

				const response = await axios.get(url);
				const { data } = response.data;
				setAllProducts(data);
				setResSource(response.data.from);
				await setDeviceCache({
					key: `allProducts-${page}`,
					value: JSON.stringify(data),
					ttl: Number(ALL_PRODUCTS_CACHE_TIMEOUT),
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
