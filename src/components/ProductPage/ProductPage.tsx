import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Product } from "../../common/types/products";
import { SERVER_URL } from "../../common/environment";

const ProductPage = (): JSX.Element => {
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		const fetchProduct = async (): Promise<void> => {
			if (SERVER_URL) {
				const url = `${SERVER_URL}/api/product/${id}`;
				const response = await axios.get(url);
				const { data } = response.data;
				setProduct(data);
			}
		};
		fetchProduct();
	}, [id]);
	return (
		<div className="flex flex-col jusitfy-center">
			<Header
				title={`Product ${id.charAt(0).toUpperCase()}${id.slice(1)}`}
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
		</div>
	);
};
export default ProductPage;
