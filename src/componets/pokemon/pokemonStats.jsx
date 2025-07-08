export const PokemonStats = ({ pokemon }) => {

    const firstThreeStats = pokemon.stats.slice(0, 3);

  return (
    <div>
      <h3>Stats:</h3>
      <ul>
        {firstThreeStats.map(({ stat, base_stat }) => (
          <li key={stat.name}>
            {stat.name}: {base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};
