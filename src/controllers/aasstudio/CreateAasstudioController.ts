import {Request, Response } from 'express'
import { CreateAasstudioService } from '../../services/aasstudio/CreateAasstudioService'


class CreateAasstudioController{
  async handle(req: Request, res: Response){
    const { nome, fone, msg } = req.body;

    const createAasstudioService = new CreateAasstudioService();

    const aasstudio = await createAasstudioService.execute({
      nome,
      fone,
      msg,
    });

    return res.json(aasstudio);
  }
}


export { CreateAasstudioController }
