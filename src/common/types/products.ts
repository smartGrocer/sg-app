interface Product {
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

interface ProductPrice {
	id: number;
	createdAt: string;
	updatedAt: string;
	price: number;
	promo: string;
	promo_price: number;
	promo_expiry: string;
	productId: number;
	storeId: number;
	pack_size: string;
	linkToProduct: string;
}

interface ProductStore {
	id: number;
	createdAt: string;
	updatedAt: string;
	store_name: string;
	location_name: string;
	latitude: number;
	longitude: number;
	address1: string;
	address2: string;
	city: string;
	state: string;
	zip: string;
	phone: string;
	store_description: string;
}

export interface ProductStorePrice extends Product {
	Stores: ProductStore[];
	Prices: ProductPrice[];
}

export type IResSource = "local" | "cache" | "db" | null;
