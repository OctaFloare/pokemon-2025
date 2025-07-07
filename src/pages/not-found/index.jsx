import { Navigation } from "../../componets/navigation";
import pageNotFoundImage from "../../assets/page-not-found-0.png";

export const NotFound = () => {

    return <>
        <Navigation /> 
        <img src={pageNotFoundImage} alt="Page Not Found" className="mt-4 self-center" draggable="false" />
    </>
};
