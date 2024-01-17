import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { SERVER_URL } from "./common/environment";

function App() {
	const [allProducts, setAllProducts] = useState([]);

	const fetchAllProducts = async () => {
		if (!SERVER_URL) {
			return [];
		}
		const url = `${SERVER_URL}/api`;
		console.log("SERVER_URL", url);
		const response = await axios.get(url);
		console.log("response", response.data.data);
		setAllProducts(response.data.data);
	};

	useEffect(() => {
		fetchAllProducts();
	}, []);

	return (
		<div className="App">
			{/* show all products as tiles */}
			<div className="grid grid-cols-3 gap-4">
				{allProducts.map((product: any) => (
					<div className="bg-white shadow-md rounded-lg overflow-hidden">
						<div className="p-4">
							<h3 className="font-bold text-xl mb-2">
								{product.name}
							</h3>
							<p className="text-gray-700 text-base">
								{product.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
