import React from 'react';

const Pokeinfo = ({setView,pokemoninfo}) => {
    
    const backHandler = () => {
        setView('')
    }
    
    return (
        <div className = "InfoCard">
            
            {/* <div className='InfoCard_img'> 
                <img src={pokemon.sprites.front_default} alt=''/>
            </div> */}
            
            <div className="Card_types">{pokemoninfo.types.map((type,i) =>{
                        return(
                            <div key = {i} className="Card_type">
                            {type.type.name}
                            </div>
                        )
                    })}
                </div>
                <div className="Card_info">
                    <div className="inline">
                        <p className="inline">Weight: </p><div>{pokemoninfo.weight}</div>
                    </div>
                    <div className="inline">
                        <p className="title">Height: </p><div>{pokemoninfo.height}</div>
                    </div>
                    <div className="ability" >
                        <p className="title">Ability</p>
                        <div>{pokemoninfo.abilities.map((ability,i) =>{
                        return(
                            <div key = {i} >
                            {ability.ability.name}
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="moves">
                        <p className="title">Moves</p>
                        <div>{pokemoninfo.moves.map((move,i) =>{
                        return(
                            <div key = {i} >
                            {move.move.name}
                            </div>
                        )
                    })}
                </div>
            </div>
            <button onClick={backHandler}>Tillbaka</button>
            </div>
    </div>
    )
}

export default Pokeinfo;