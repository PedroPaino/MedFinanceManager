// Importação das bibliotecas necessárias
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class UserService {
    static async registerUser(email: string, password: string, name: string) {
        const userRepository = getRepository(User);
        const hashedPassword = bcrypt.hashSync(password, 8);

        const newUser = userRepository.create({
            email,
            password: hashedPassword,
            name
        });

        await userRepository.save(newUser);

        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });

        return { auth: true, token };
    }

    static async loginUser(email: string, password: string) {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { email } });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 hours
        });

        return { auth: true, token };
    }

    // Você pode adicionar mais métodos aqui conforme necessário
}
