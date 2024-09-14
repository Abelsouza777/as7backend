import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'
import { DetailAuthUserController } from './controllers/user/DetailAuthUserController'


import { CreateAasstudioController } from './controllers/aasstudio/CreateAasstudioController'
//import { ListByCategoryController } from './controllers/product/ListByCategoryController'


import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated,  new DetailuserController().handle )

router.get('/meauth', isAuthenticated,  new DetailAuthUserController().handle )


//
//
//
//-- ROTAS AASSTUDIO
router.post('/astudio', isAuthenticated, upload.single('file'), new CreateAasstudioController().handle )

//router.get('/category/product', isAuthenticated, new ListByCategoryController().handle )
//
//
//
//

// -- Rotas Solution
//router.put('/solution/:id', isAuthenticated, new EditSolutionController().handle )



export { router }; 