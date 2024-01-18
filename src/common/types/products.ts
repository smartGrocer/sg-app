export interface Product {
	id: number;
	createdAt: string;
	updatedAt: string;
	chain_brand: string;
	brand_name: string;
	product_name: string;
	product_id: string;
	description: string;
	unit: string;
	unit_type: string;
	linkToImage: string;
	pack_size: string;
}

export type ProductList = Product[];
