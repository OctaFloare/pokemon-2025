import { useParams } from "react-router-dom"

export const Pokemon = () => {
    const { id } = useParams();

    return <>
        <a href="/">Home</a>
        <div>Pokemon nr {id}</div>   
    </>
}