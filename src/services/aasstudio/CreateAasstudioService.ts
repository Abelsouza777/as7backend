import prismaClient from "../../prisma";

interface AasstudioRequest{
  nome: string;
  fone: string;
  msg: string;
}

class CreateAasstudioService{
  async execute({nome, fone, msg}: AasstudioRequest){

    const aasstudio = await prismaClient.aasstud.create({
      data:{
        nome: nome,
        fone: fone,
        msg: msg
        
      }
    })

    return aasstudio;

  }
}

export { CreateAasstudioService }

