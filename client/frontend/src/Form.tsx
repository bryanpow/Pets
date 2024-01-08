import React from 'react';
import { useState, useEffect } from 'react';
import { signal, effect } from '@preact/signals-react';

export const allPets = signal<Array<{ name: string; species: string; friendly: boolean; url: string; id: number }>>([])
export function Form() {
    const [petName, setPetName] = useState('');
    const [url, setUrl] = useState('');
    const [petSpecies, setPetSpecies] = useState('');
    const [friendly, setFriendly] = useState(false);
    useEffect( () => {
            const api = `http://localhost:3000/`;
            let data = null
            const fetchData = async() => {
                try {
                    const res = await fetch(api);
                    data = await res.json();
                    allPets.value =  await data;
                    console.log(allPets.value)
                }
                catch(error) {
                    console.error(error)
                }
            }
           fetchData() 
    }, [])
    

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const api = `http://localhost:3000/`
        try {
            const res = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: petName,
                    species: petSpecies,
                    friendly: friendly,
                    url: url
                })
            })
            const newPet = await res.json();
            allPets.value = [...allPets.value, newPet];
            console.log(newPet);
            }
       catch(error) {
        console.error(error);
       }
        setPetName('');
        setUrl('');
        setPetSpecies('');
        setFriendly(false);
    }
    
  return (
    <>
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap:'20px', width: '300px'}}>
        <h1 >Add a new Pet!</h1>
        <div>
            <label htmlFor='name' className='pl-10'>Pet Name<span className='sup'>*</span> </label>
            <input name='name' id='name' value={petName} onChange={(e) => setPetName(e.target.value)} required></input>
        </div>
        <div>
            <label htmlFor='pic' >Profile Picture<span className='sup'>*</span> </label>
            <input name='pic' id='pic' placeholder='Picture URL' value={url} onChange={(e) => setUrl(e.target.value)} required></input>
        </div>
        <div style={{border: '1px solid gray', paddingLeft: '10px', paddingBottom: '10px'}}>
            <p>Species<span className='sup'>*</span></p>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label>
                <input type='radio' name='species' value='cat' checked={petSpecies === 'cat'}  onChange={(e) => setPetSpecies(e.target.value)} required />Cat
                </label>
                
                <label>
                <input type='radio' name='species' value='dog' checked={petSpecies === 'dog'}   onChange={(e) => setPetSpecies(e.target.value)}  required />Dog
                </label>
                
                <label>
                <input type='radio' name='species' value='bird' checked={petSpecies === 'bird'}  onChange={(e) => setPetSpecies(e.target.value)}  required />Bird
                 </label>
            </div>
 
        </div>
        <div>
                <label htmlFor='friend'>Are They Friendly?</label>
                <input type='checkbox' name='friend' checked={friendly}  onChange={(e) => setFriendly(e.target.checked)} id='friend' />
        </div>
        <button type='submit' onSubmit={handleSubmit}>Add Pet!</button>
    </form>
    </>

  )
}

