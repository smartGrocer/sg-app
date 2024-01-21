import { IonIcon } from "@ionic/react";
import { code, codeDownload, codeWorking, refresh } from "ionicons/icons";
import { IResSource } from "../../common/types/products";

interface SourceIconProps {
	resSource: IResSource;
}
const SourceIcon = (props: SourceIconProps): JSX.Element => {
	const { resSource } = props;
	switch (resSource) {
		case "local":
			return <IonIcon icon={code} size="small" />;
		case "cache":
			return <IonIcon icon={codeWorking} size="small" />;
		case "db":
			return <IonIcon icon={codeDownload} size="small" />;
		default:
			return <IonIcon icon={refresh} size="small" />;
	}
};

export default SourceIcon;
