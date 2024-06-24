import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export class UserController {
    static getAllUsers = async (req: Request, res: Response) => {
        const userRepository = getRepository(User);
        try {
            const users = await userRepository.find();
            res.send(users);
        } catch (e) {
            res.status(500).send();
        }
    }

    static getUserById = async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const userRepository = getRepository(User);
        try {
            const user = await userRepository.findOneOrFail(id);
            res.send(user);
        } catch (e) {
            res.status(404).send("User not found");
        }
    }

    // Métodos para criar, atualizar e deletar usuários podem ser adicionados aqui
}
