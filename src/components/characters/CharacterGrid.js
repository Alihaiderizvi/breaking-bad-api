import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items,isLoading}) => {
    
    return isLoading ? <Spinner/> : (
        <section className='cards'>
            {items.map((item,index) => (
                <CharacterItem key={index} item={item}/>
            ))}
        </section>
    )
}

export default CharacterGrid
