import {Request, Response} from 'express'
import { ListAasstudioService } from '../../services/aasstudio/ListAasstudioService'

class ListAasstudioController{
  async handle(req: Request, res: Response){
    const listAasstudioService = new ListAasstudioService()

    const aasstudio = await listAasstudioService.execute();

    return res.json(aasstudio);

  }
}

export { ListAasstudioController }