import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import incomeRoutes from './routes/incomeRoutes';
import expenseRoutes from './routes/expenseRoutes';
import userRoutes from './routes/userRoutes';  // Garanta que você tenha esse arquivo e importe corretamente.

const app = express();

// Configuração do CORS para aceitar requisições do frontend
app.use(cors({
  origin: 'http://localhost:3000'  // Substitua pela URL/porta do seu frontend se necessário
}));

// Middleware para parsear JSON
app.use(express.json());

// Configurações de rotas
app.use('/users', userRoutes);
app.use('/incomes', incomeRoutes);
app.use('/expenses', expenseRoutes);

// Estabelecer conexão com o banco de dados
createConnection().then(connection => {
    console.log('Database connected!');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Database connection failed:', error);
});

export default app;  // Usando exportação ES6 se você estiver usando módulos ES6 consistentemente
