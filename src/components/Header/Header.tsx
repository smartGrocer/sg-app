import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { IResSource } from "../../common/types/products";
import SourceIcon from "./SourceIcon";

interface HeaderProps {
	title: string;
	resSource: IResSource;
}

const Header = (props: HeaderProps): JSX.Element => {
	const { title, resSource } = props;
	return (
		<IonHeader>
			<IonToolbar>
				<div className="flex flex-row items-center mr-2">
					<IonTitle className="text-3xl">{title}</IonTitle>
					<div className="flex flex-row justify-end">
						<span className="flex align-middle">
							<SourceIcon resSource={resSource} />
						</span>
					</div>
				</div>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
