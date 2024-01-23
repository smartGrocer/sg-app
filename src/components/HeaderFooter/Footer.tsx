import { IonFooter, IonTitle, IonToolbar } from "@ionic/react";

const Footer = (): JSX.Element => {
	return (
		<IonFooter>
			<IonToolbar>
				<IonTitle className="text-3xl">Footer</IonTitle>
			</IonToolbar>
		</IonFooter>
	);
};

export default Footer;
