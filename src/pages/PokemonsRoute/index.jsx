import { useSearchParams, Navigate } from "react-router-dom";
import { Pokemons, defaultPage, defaultPerPage } from "../pokemons/";

export const PokemonsRoute = () => {
    const [searchParams] = useSearchParams();

    const page = searchParams?.get("page");
    const perPage = searchParams?.get("perPage");

    if (!page || !perPage) {
        const _page = page || defaultPage;
        const _perPage = perPage || defaultPerPage;

        return <Navigate to={`/pokemons?page=${_page}&perPage=${_perPage}`} replace />;
    }

    return <Pokemons />;
};
