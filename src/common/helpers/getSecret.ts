type SecretType =
	| "VITE_SERVER_URL"
	| "ALL_PRODUCTS_CACHE_TIMEOUT"
	| "PRODUCT_CACHE_TIMEOUT";

const getSecret = (secretType: SecretType): string => {
	// get the secret from the environment variables
	const secret = process.env[secretType];

	// if the secret is not found, throw an error
	if (!secret) {
		throw new Error(`Secret not found: ${secretType}`);
	}

	// return the secret
	return secret;
};

export default getSecret;
