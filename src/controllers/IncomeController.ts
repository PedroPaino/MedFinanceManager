import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Income } from '../entities/Income';

export class IncomeController {
    static getAllIncomes = async (req: Request, res: Response) => {
        const incomeRepository = getRepository(Income);
        try {
            const incomes = await incomeRepository.find();
            res.send(incomes);
        } catch (error) {
            res.status(500).send("Error retrieving incomes.");
        }
    }

    static createIncome = async (req: Request, res: Response) => {
        const incomeRepository = getRepository(Income);
        const incomeData = req.body;

        try {
            const income = incomeRepository.create(incomeData);
            await incomeRepository.save(income);
            res.status(201).send(income);
        } catch (error) {
            res.status(400).send("Error creating income.");
        }
    }

    // Adicionar métodos para atualizar e deletar incomes
}
