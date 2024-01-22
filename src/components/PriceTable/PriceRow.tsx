import { ProductPrice } from "../../common/types/products";

interface PriceRowProps {
	PriceRowData: ProductPrice;
	storeName: string;
	locationName: string;
}

const PriceRow = (props: PriceRowProps): JSX.Element => {
	const { PriceRowData, storeName, locationName } = props;

	const {
		price,
		promo,
		promo_price: promoPrice,
		promo_expiry: promoExpiry,
		linkToProduct,
		updatedAt,
	} = PriceRowData;

	// show a row with the above information, with each of them being a column

	return (
		<div className="flex flex-row justify-between">
			<div className="flex flex-col">
				<span>{storeName}</span>
				<span>{locationName}</span>
			</div>
			<div className="flex flex-col">
				<span>{price}</span>
				<span>{promo}</span>
				<span>{promoPrice}</span>
				<span>{promoExpiry}</span>
				<span>{linkToProduct}</span>
				<span>{updatedAt}</span>
			</div>
		</div>
	);
};

export default PriceRow;
