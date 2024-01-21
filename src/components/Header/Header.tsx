import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

interface HeaderProps {
	title: string;
}

const Header = (props: HeaderProps): JSX.Element => {
	const { title } = props;
	return (
		<IonHeader>
			<IonToolbar>
				<IonTitle className="text-3xl">{title}</IonTitle>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
