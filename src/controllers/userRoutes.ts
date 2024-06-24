import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);

// Outras rotas para POST, PUT, DELETE podem ser definidas aqui

export default router;
