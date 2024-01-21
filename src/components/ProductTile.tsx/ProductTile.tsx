import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
} from "@ionic/react";

import { Product } from "../../common/types/products";
import ActionButtons from "./ActionButtons";

interface ProductTileProps {
	product: Product;
}

const ProductTile = (props: ProductTileProps): JSX.Element => {
	const { product } = props;

	return (
		<IonCard className="max-w-32 mx-1 my-2.5 flex flex-col h-full max-h-80 rounded-3xl shadow-lg shadow-slate-400 items-center">
			<img
				alt={`Product: ${product.product_name} Brand: ${product.brand_name}`}
				src={product.linkToImage}
				height={120}
			/>
			<IonCardHeader>
				<IonCardSubtitle className="line-clamp-1 text-ellipsis h-5 text-sm">
					{product.brand_name ? product.brand_name : ""}
				</IonCardSubtitle>
				<IonCardTitle className="text-base h-12 text-ellipsis line-clamp-2">
					{product.product_name ? product.product_name : ""}
				</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>{`${product.pack_size} • ${product.unit}`}</IonCardContent>
			<ActionButtons product={product} />
		</IonCard>
	);
};

export default ProductTile;
