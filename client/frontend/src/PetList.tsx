import React from 'react'
import {useState, useEffect} from 'react'
import { allPets } from './Form'
import PetCard from './PetCard';
import { deleted } from './PetCard';
function PetList() {
   
    const [key, setKey] = useState(Math.random() * 10320303)
    const [pets, setPets] = useState<Array<{ name: string; species: string; friendly: boolean; url: string; id: number }>>([]);
    useEffect(() => {
    const unsubscribe = allPets.subscribe(data => {
        setPets(data)
    });

    return () => {
        unsubscribe();

    } 
    }, [allPets])
    
    useEffect(() => {
        const unsubscribe = deleted.subscribe(data => {
            setKey(Math.random() * 3983540933894039 + 993309)
        });
        return unsubscribe()
    }, [deleted])
  return (
    <>
        <h2>Pet List</h2>
        <div key={key} style={{ overflow: 'scroll', border: '1px solid black', display: 'flex', gap:'10px', padding: '10px', flexWrap: 'wrap', height: '400px'}} >
        {
           pets.map((pet) => {
            return (
                <PetCard key={pet.id} petName={pet.name} species={pet.species} url={pet.url}  friendly={pet.friendly} id={pet.id}/>
            )
           })
        }
        </div>
    </>
  )
}

export default PetList