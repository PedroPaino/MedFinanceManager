import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Expense } from '../entities/Expense';

export class ExpenseController {
    static getAllExpenses = async (req: Request, res: Response) => {
        const expenseRepository = getRepository(Expense);
        try {
            const expenses = await expenseRepository.find();
            res.send(expenses);
        } catch (error) {
            res.status(500).send("Error retrieving expenses.");
        }
    }

    static createExpense = async (req: Request, res: Response) => {
        const expenseRepository = getRepository(Expense);
        const expenseData = req.body;

        try {
            const expense = expenseRepository.create(expenseData);
            await expenseRepository.save(expense);
            res.status(201).send(expense);
        } catch (error) {
            res.status(400).send("Error creating expense.");
        }
    }

    // Adicionar métodos para atualizar e deletar expenses
}
