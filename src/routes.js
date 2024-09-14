"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const DetailAuthUserController_1 = require("./controllers/user/DetailAuthUserController");
const CreateAasstudioController_1 = require("./controllers/aasstudio/CreateAasstudioController");
//import { ListByCategoryController } from './controllers/product/ListByCategoryController'
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//-- ROTAS USER --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailuserController().handle);
router.get('/meauth', isAuthenticated_1.isAuthenticated, new DetailAuthUserController_1.DetailAuthUserController().handle);
//
//
//
//-- ROTAS AASSTUDIO
router.post('/astudio', isAuthenticated_1.isAuthenticated, upload.single('file'), new CreateAasstudioController_1.CreateAasstudioController().handle);
