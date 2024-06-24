import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Expense } from './Expense';
import { Income } from './Income';
import { User } from '../entities/User';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Expense, expense => expense.user)
    expenses: Expense[];

    @OneToMany(() => Income, income => income.user)
    incomes: Income[];
}
