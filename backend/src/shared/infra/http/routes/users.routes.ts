import { Router } from 'express';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController';
import { GetUserController } from '../../../../modules/accounts/useCases/getUser/GetUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();
const createUserController = new CreateUserController();
const getUserController = new GetUserController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.get('/', ensureAuthenticated, getUserController.handle);

export { usersRoutes };
