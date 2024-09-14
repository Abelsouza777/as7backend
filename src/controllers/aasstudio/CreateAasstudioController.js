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
exports.CreateAasstudioController = void 0;
const CreateAasstudioService_1 = require("../../services/aasstudio/CreateAasstudioService");
class CreateAasstudioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, fone, msg } = req.body;
            const createAasstudioService = new CreateAasstudioService_1.CreateAasstudioService();
            const aasstudio = yield createAasstudioService.execute({
                nome,
                fone,
                msg,
            });
            return res.json(aasstudio);
        });
    }
}
exports.CreateAasstudioController = CreateAasstudioController;
