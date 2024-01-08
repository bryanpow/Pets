import React from 'react';
import { signal, effect } from '@preact/signals-react';
import { allPets } from './Form';
interface petParam {
    petName: string;
    url: string;
    friendly: boolean;
    species: string;
    id: number
}

export const deleted = signal(0)
const PetCard: React.FC<petParam> = ({petName, url, friendly, species, id}) => {

    const handleClick = async() => {
        const url = `http://localhost:3000/${id}`;
        try {
             await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            allPets.value = allPets.value.filter(pet => pet.id !== id)
        }
        catch(error) {
            console.error(error)
        }
    }
  return (
    <div key={id}>
       <h3>{petName}</h3>
       <img src={url} ></img>
       <p>{friendly}</p>
       <p>Species:{species}</p>
       <button onClick={handleClick}>Remove</button>
    </div>
  )
}

export default PetCard