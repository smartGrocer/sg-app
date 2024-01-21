import { useParams } from "react-router-dom";

const ProductPage = (): JSX.Element => {
	const { id } = useParams<{ id: string }>();
	return <div>ProductPage {id}</div>;
};
export default ProductPage;
