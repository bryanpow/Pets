
const express = require ('express');
const { getPets, addPet, deletePet } = require('/Users/bryan/Projects/pet-project/server/models/prisma/script.ts');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.get('/', async(req, res) => {
    try {
        const pets = await getPets();
        res.send(pets)
    }
    catch(error) {
        res.status(500).send()
    }
})

app.post('/', async(req, res) => {
    const pet = req.body
    try {
      const addedPet =  await addPet(pet.name, pet.species, pet.friendly, pet.url);
        res.send(addedPet)
    }
    catch(error) {
        res.status(500).send('')
    }
})

app.delete('/:id', async(req, res) => {
    const id = parseInt(req.params.id); 

    try {
        
        const deletedPet = await deletePet(id); 

            res.status(204).send(); 
        } catch (error) {
        console.error('Error deleting pet', error);
        res.status(500).send('Internal Server Error'); 
    }
})
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})