import prismaClient from "../../prisma";

class ListAasstudioService{
  async execute(){

    const aasstudios = await prismaClient.aasstud.findMany({
      where: {},
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        nome: true,
        fone: true,
        msg: true,
        
      }
    })

    return aasstudios;

  }
}

export { ListAasstudioService }