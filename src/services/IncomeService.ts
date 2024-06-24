import { getRepository } from 'typeorm';
import { Income } from '../entities/Income';

export class IncomeService {
    static async calculateTotalIncome(userId: number): Promise<number> {
        const incomeRepository = getRepository(Income);
        const incomes = await incomeRepository.find({ where: { user: userId } });
        return incomes.reduce((total, current) => total + current.amount, 0);
    }

    // Mais métodos que lidam com lógicas complexas podem ser adicionados aqui
}
