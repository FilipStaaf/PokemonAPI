import React from 'react';  
import './style.css';
import pokemonType from '../../helpers/pokemonTypes';
function Card({ pokemon, removePokemon,pokemoninformation }) {

    const pokemoninfohandler = () => {
        const pokeinfo = pokemon
        pokemoninformation(pokeinfo)
        
    }
    const removehandler = () =>{
        const rpokemon= pokemon
        removePokemon(rpokemon)
    }
    return(
        <div className='Card'>
            <div className='Card_img'> 
              <img src={pokemon.sprites.front_default} onClick={pokemoninfohandler} alt=''/>
            </div>   

            <div className='Card_name'>{pokemon.name}</div>

            <div className='Card_types'>
                {pokemon.types.map(type => {
                    return(
                        <div className='Card_type' 
                            style={{backgroundColor: pokemonType[type.type.name]}}>
                            {type.type.name}
                        </div>
                    )       
                })}
            </div>

            <button className="Card_removeBtn" onClick={removehandler}>Radera Pokemon</button>
        </div>
    );
}
export default Card;