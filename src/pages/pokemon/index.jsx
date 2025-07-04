import { useParams } from "react-router-dom"
import { Navigation } from "../../componets/navigation";

export const Pokemon = () => {
    const { id } = useParams();

    return <>
        <Navigation /> 
        <div>Pokemon nr {id}</div>   
    </>
}