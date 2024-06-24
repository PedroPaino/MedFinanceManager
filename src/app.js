import express from 'express';
import { createConnection } from 'typeorm';
import incomeRoutes from './routes/incomeRoutes';
import expenseRoutes from './routes/expenseRoutes';

const express = require('express');
const { createConnection } = require('typeorm');
const app = express();

app.use(express.json()); // Middleware para parsear JSON
app.use('/users', userRoutes);
app.use('/incomes', incomeRoutes);
app.use('/expenses', expenseRoutes);
app.use('/api/incomes', incomeRoutes);

createConnection().then(connection => {
    // Seu banco de dados está conectado e configurado
    console.log('Database connected!');

    // Configurações adicionais e rotas virão aqui

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Database connection failed:', error);
});

module.exports = app;
