interface IDeviceCacheWithTTL {
	key: string;
	value: string;
	ttl: number;
}

export const getDeviceCache = async (key: string): Promise<string | null> => {
	const itemStr = localStorage.getItem(key);

	// if the item doesn't exist, return null
	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);
	const parsedvalue = JSON.parse(item.value);

	const now = new Date();
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null

		localStorage.removeItem(key);
		return null;
	}
	return parsedvalue;
};

export const setDeviceCache = async ({
	key,
	value,
	ttl,
}: IDeviceCacheWithTTL): Promise<void> => {
	const now = new Date();

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value,
		expiry: now.getTime() + ttl * 1000,
		expiry_str: new Date(now.getTime() + ttl * 1000).toLocaleString(),
	};

	localStorage.setItem(key, JSON.stringify(item));
};
