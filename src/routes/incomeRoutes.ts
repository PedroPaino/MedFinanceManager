import { Router } from 'express';
import { IncomeController } from '../controllers/IncomeController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Usando o middleware para proteger uma rota
router.get('/', authMiddleware, IncomeController.getAllIncomes);

export default router;
