import { IonButton } from "@ionic/react";
import { ProductStorePrice } from "../../common/types/products";

interface IPriceTableProps {
	product: ProductStorePrice;
}

// A scrollable table that displays the prices of a product at different stores and over time.
const PriceTable = (props: IPriceTableProps): JSX.Element => {
	const { product } = props;
	const { Prices, Stores } = product;
	console.log(product);

	return (
		<div>
			<table
				className="table-fixed border-collapse border border-gray-800 
				overflow-scroll w-full
			"
			>
				<thead>
					<tr>
						<th className="w-1/2 border border-gray-800">Store</th>
						<th className="w-1/2 border border-gray-800">
							Store Name and Location
						</th>
						<th className="w-1/2 border border-gray-800">
							Last updated
						</th>

						<th className="w-1/2 border border-gray-800">Price</th>
						<th className="w-1/2 border border-gray-800">
							Promo Price
						</th>
						<th className="w-1/2 border border-gray-800">
							Promo Expiry
						</th>
						<th className="w-1/2 border border-gray-800">Link</th>
					</tr>
				</thead>
				<tbody>
					{Prices.map((price) => {
						const store = Stores.find(
							(str) => str.id === price.storeId
						);
						return (
							<tr key={price.id}>
								<td className="border border-gray-800">
									{store?.location_name}
								</td>
								<td className="border border-gray-800">
									{`${store?.store_name} | ${store?.address1}`}
								</td>
								<td className="border border-gray-800">
									{price?.updatedAt &&
										new Date(
											price.updatedAt
										).toLocaleString()}
								</td>
								<td className="border border-gray-800">
									{price?.price}
								</td>
								<td className="border border-gray-800">
									{price?.promo_price}
								</td>
								<td className="border border-gray-800">
									{price?.promo_expiry &&
										new Date(
											price.promo_expiry
										).toLocaleString()}
								</td>
								<td className="border border-gray-800">
									{price?.linkToProduct && (
										<IonButton href={price.linkToProduct}>
											Link
										</IonButton>
									)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default PriceTable;
