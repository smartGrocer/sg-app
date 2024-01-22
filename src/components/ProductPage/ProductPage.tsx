import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { IResSource, ProductStorePrice } from "../../common/types/products";
import { PRODUCT_CACHE_TIMEOUT, SERVER_URL } from "../../common/environment";
import {
	getDeviceCache,
	setDeviceCache,
} from "../../common/helpers/deviceCache";
import PriceTable from "../PriceTable/PriceTable";

interface ProductPageProps {
	resSource: IResSource;
	setResSource: (resSource: IResSource) => void;
}

const ProductPage = (props: ProductPageProps): JSX.Element => {
	const { resSource, setResSource } = props;
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<ProductStorePrice>(
		{} as ProductStorePrice
	);

	useEffect(() => {
		const fetchProduct = async (): Promise<void> => {
			const cachedProduct = (await getDeviceCache(
				id
			)) as ProductStorePrice | null;

			if (cachedProduct) {
				setProduct(cachedProduct);
				setResSource("local");
				return;
			}

			if (SERVER_URL) {
				const url = `${SERVER_URL}/api/product/${id}`;
				const response = await axios.get(url);
				const { data } = response.data;
				setProduct(data);
				setResSource(response.data.from);
				await setDeviceCache({
					key: id,
					value: JSON.stringify(data),
					ttl: Number(PRODUCT_CACHE_TIMEOUT),
				});
			}
		};
		fetchProduct();
	}, []);
	return (
		<div className="flex flex-col jusitfy-center">
			<Header
				title={`Product ${id.charAt(0).toUpperCase()}${id.slice(1)}`}
				resSource={resSource}
			/>
			<img
				className="mx-auto h-1/2 shadow-lg shadow-slate-400 rounded-3xl my-5 min-h-96"
				alt={`Product: ${product?.product_name} Brand: ${product?.brand_name}`}
				src={product?.linkToImage}
			/>
			<div className="flex flex-col items-center">
				<h1 className="text-2xl font-bold">{product?.product_name}</h1>
				<h2 className="text-xl">{product?.brand_name}</h2>
				<h3 className="text-lg">
					{product?.pack_size}{" "}
					{product?.unit ? `• ${product.unit}` : ""}
					{product?.unit_type ? ` (${product.unit_type})` : null}
				</h3>
				<h3 className="text-lg">{}</h3>
			</div>

			<div className="flex flex-col items-center">
				<p>{product?.description}</p>
			</div>

			{product?.id && (
				<div className="flex flex-col items-center">
					<PriceTable product={product} />
				</div>
			)}
		</div>
	);
};
export default ProductPage;
