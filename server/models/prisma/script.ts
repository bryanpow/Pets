import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function getPets() {
    try {
        const pets = await prisma.pet.findMany();
        return pets
    }
    catch(error) {
        console.error('Error loading pets', error)
    }
}

async function addPet(name: string, species: string, friendly: boolean, url: string) {
    try {
        const pet =  await prisma.pet.create({data: {name: name, species: species, friendly: friendly, url: url}})
        console.log(pet)
    }

    catch(error) {
        console.error('Error creating pet:', error)
    }
    
}

async function deletePet(id: number) {
   
   try { const deletedPet = await prisma.pet.delete({
        where: {
            id: id
        }
    })}
    catch(error) {
        console.error('Error at attempt to delete pet', error)
    }
}
