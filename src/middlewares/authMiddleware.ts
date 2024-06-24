import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { IncomeController } from '../controllers/IncomeController';
import { authMiddleware } from '../middlewares/authMiddleware';


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).send({ message: 'No token provided!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized!' });
        }
        req.userId = decoded?.id;
        next();
    });
};
