import {
	IonButton,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
} from "@ionic/react";
import { Product } from "../../common/types/products";

interface ProductTileProps {
	product: Product;
}

const ProductTile = (props: ProductTileProps): JSX.Element => {
	const { product } = props;
	return (
		<IonCard
			style={{
				width: "100%",
				maxWidth: "150px",
				// margin: "auto",
				// space between cards
				margin: "10px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				height: "100%",
				maxHeight: "300px",
				borderRadius: "20px",
			}}
		>
			<img
				alt={`Product: ${product.product_name} Brand: ${product.brand_name}`}
				src={product.linkToImage}
				height={150}
			/>

			<IonCardHeader>
				<IonCardSubtitle
					style={{
						// font size
						fontSize: "14px",

						// text overflow with ellipsis if longer than 1 lines
						overflow: "hidden",
						textOverflow: "ellipsis",
						display: "-webkit-box",
						WebkitLineClamp: 1,
						WebkitBoxOrient: "vertical",

						height: "20px",
					}}
				>
					{product.brand_name ? product.brand_name : ""}
				</IonCardSubtitle>
				<IonCardTitle
					style={{
						// font size
						fontSize: "16px",

						// text overflow with ellipsis if longer than 2 lines
						overflow: "hidden",
						textOverflow: "ellipsis",
						display: "-webkit-box",
						WebkitLineClamp: 2,
						WebkitBoxOrient: "vertical",

						height: "40px",
					}}
				>
					{product.product_name ? product.product_name : ""}
				</IonCardTitle>
			</IonCardHeader>
			{/* add to cart button */}
			<IonButton>Add to Cart</IonButton>
		</IonCard>
	);
};

export default ProductTile;
