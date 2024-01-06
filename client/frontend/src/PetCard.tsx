import React from 'react'

interface petParam {
    petName: string;
    url: string;
    friendly: string;
    species: string
}
const PetCard: React.FC<petParam> = ({petName, url, friendly, species}) => {
  return (
    <div>
       <h3>{petName}</h3>
       <img src={url} ></img>
       <p>{friendly}</p>
       <p>Species:{species}</p>
    </div>
  )
}

export default PetCard