import logo from "../../assets/Pokemon-Symbol-logo.png";

export const Navigation = () => {
    return (
        <div className="flex gap-4 bg-gradient-to-r from-blue-300 to-amber-500 absolute left-0 top-0 w-full justify-center text-3xl p-1 shadow-[0_0_15px_#facc15]">
            <img src={logo} alt="Logo" className="w-13 h-13 absolute left-1 top-0" />
            <a className="!text-yellow-400 hover:!text-yellow-300 hover:bg-[#578ac5] !border !border-yellow-400 hover:!border-yellow-300 px-2 py-1 rounded" href="/">Home</a>
            <a className="!text-yellow-400 hover:!text-yellow-300 hover:bg-[#578ac5] !border !border-yellow-400 hover:!border-yellow-300 px-2 py-1 rounded" href="/pokemons">Pokemons</a>
        </div>

    );
}
