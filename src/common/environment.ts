import getSecret from "./helpers/getSecret";

export const SERVER_URL = getSecret("SERVER_URL");

export const ALL_PRODUCTS_CACHE_TIMEOUT = getSecret(
	"ALL_PRODUCTS_CACHE_TIMEOUT"
);

export const PRODUCT_CACHE_TIMEOUT = getSecret("PRODUCT_CACHE_TIMEOUT");
