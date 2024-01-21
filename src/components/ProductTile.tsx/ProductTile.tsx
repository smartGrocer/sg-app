import {
	IonButton,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonIcon,
	IonItem,
} from "@ionic/react";
import { bagAdd, eye } from "ionicons/icons";
import { Product } from "../../common/types/products";

interface ProductTileProps {
	product: Product;
}

const ProductTile = (props: ProductTileProps): JSX.Element => {
	const { product } = props;

	return (
		<IonCard
			style={{
				maxWidth: "120px",
				marginRight: "5px",
				marginLeft: "5px",
				marginBottom: "20px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				height: "100%",
				maxHeight: "300px",
				borderRadius: "20px",
				boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.45)",
			}}
		>
			<img
				alt={`Product: ${product.product_name} Brand: ${product.brand_name}`}
				src={product.linkToImage}
				height={120}
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
			<IonItem
				style={{
					// space between buttons
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<IonButton href={`/product/${product.id}`}>
					<IonIcon icon={eye} size="small" />
				</IonButton>
				<IonButton>
					<IonIcon icon={bagAdd} size="small" />
				</IonButton>
			</IonItem>
		</IonCard>
	);
};

export default ProductTile;
