import getSecret from "./helpers/getSecret";

export const SERVER_URL = getSecret("VITE_SERVER_URL");

export const ALL_PRODUCTS_CACHE_TIMEOUT = getSecret(
	"VITE_ALL_PRODUCTS_CACHE_TIMEOUT"
);

export const PRODUCT_CACHE_TIMEOUT = getSecret("VITE_PRODUCT_CACHE_TIMEOUT");
