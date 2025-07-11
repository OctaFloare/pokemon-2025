export const PokemonAbilites = ({ abilities }) => {

    const abilitiesArray = abilities.map((ability) => {
        return ability.ability.name
    })

    return <>
        { abilitiesArray.length == 0 && <div>No Abilities</div>}
        { abilitiesArray.length == 1 && <div>Ability: {abilitiesArray[0]}</div>}
        { abilitiesArray.length > 1 && <div>Abilities: {abilitiesArray.join(', ')}.</div>}
    </>
}