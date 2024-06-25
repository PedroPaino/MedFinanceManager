import { getRepository } from 'typeorm';
import { User } from '../entities/User;
import { UserController } from '../controllers/UserController';
import { mockRequest, mockResponse } from './mocks';

describe('UserController Tests', () => {
    test('Get All Users - Success', async () => {
        const req = mockRequest();
        const res = mockResponse();
        const expectedUsers = [{ id: 1, name: 'John Doe' }];

        jest.spyOn(getRepository(User), 'find').mockResolvedValue(expectedUsers);

        await UserController.getAllUsers(req, res);
        expect(res.send).toHaveBeenCalledWith(expectedUsers);
    });

    // Mais testes podem ser adicionados aqui
});
