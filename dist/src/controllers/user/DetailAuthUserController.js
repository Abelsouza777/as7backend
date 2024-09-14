"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailAuthUserController = void 0;
const DetailAuthUserService_1 = require("../../services/user/DetailAuthUserService");
class DetailAuthUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Recupera o ID do usuário autenticado da solicitação
                const user_id = req.user_id;
                // Instancia o serviço para buscar detalhes do usuário
                const detailAuthUserService = new DetailAuthUserService_1.DetailAuthUserService();
                // Busca as informações do usuário com base no ID
                const user = yield detailAuthUserService.execute(user_id);
                // Retorna as informações do usuário em formato JSON
                return res.json(user);
            }
            catch (error) {
                // Em caso de erro, retorna um status 500 e uma mensagem de erro
                console.error('Erro ao buscar detalhes do usuário:', error);
                return res.status(500).json({ message: 'Erro ao buscar detalhes do usuário' });
            }
        });
    }
}
exports.DetailAuthUserController = DetailAuthUserController;
