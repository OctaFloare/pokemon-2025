export const PokemonStats = ({ pokemon }) => {

    const firstThreeStats = pokemon.stats.slice(0, 3);

  return (
    <div className="flex justify-center gap-10">
      <h3 className="flex self-center">Stats:</h3>
      <ul className="flex flex-col items-start">
        {firstThreeStats.map(({ stat, base_stat }) => (
          <li key={stat.name}>
            • {stat.name}: {base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};
