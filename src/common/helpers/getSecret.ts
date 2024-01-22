type SecretType =
	| "VITE_SERVER_URL"
	| "VITE_ALL_PRODUCTS_CACHE_TIMEOUT"
	| "VITE_PRODUCT_CACHE_TIMEOUT";

const getSecret = (secretType: SecretType): string => {
	// get the secret from the environment variables
	// import.meta.env.
	const secret = import.meta.env[secretType];

	// if the secret is not found, throw an error
	if (!secret) {
		throw new Error(`Secret not found: ${secretType}`);
	}

	// return the secret
	return secret;
};

export default getSecret;
