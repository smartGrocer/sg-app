import { IonButton, IonIcon, IonItem } from "@ionic/react";
import { bagAdd, eye } from "ionicons/icons";
import { Product } from "../../common/types/products";

interface ActionButtonsProps {
	product: Product;
}

const ActionButtons = (props: ActionButtonsProps): JSX.Element => {
	const { product } = props;
	return (
		<IonItem className="flex flex-col justify-center">
			<IonButton href={`/product/${product.product_id}`}>
				<IonIcon icon={eye} size="small" />
			</IonButton>
			<IonButton>
				<IonIcon icon={bagAdd} size="small" />
			</IonButton>
		</IonItem>
	);
};
export default ActionButtons;
