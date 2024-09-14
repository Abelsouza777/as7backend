import { Request, Response } from 'express';
import { DetailAuthUserService } from '../../services/user/DetailAuthUserService';

class DetailAuthUserController {
  async handle(req: Request, res: Response) {
    try {
      // Recupera o ID do usuário autenticado da solicitação
      const user_id = req.user_id;

      // Instancia o serviço para buscar detalhes do usuário
      const detailAuthUserService = new DetailAuthUserService();

      // Busca as informações do usuário com base no ID
      const user = await detailAuthUserService.execute(user_id);

      // Retorna as informações do usuário em formato JSON
      return res.json(user);
    } catch (error) {
      // Em caso de erro, retorna um status 500 e uma mensagem de erro
      console.error('Erro ao buscar detalhes do usuário:', error);
      return res.status(500).json({ message: 'Erro ao buscar detalhes do usuário' });
    }
  }
}

export { DetailAuthUserController };
