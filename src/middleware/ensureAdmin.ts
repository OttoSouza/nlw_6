import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../modules/repositories/user_repository';

export async function EnsureAdmin(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req;

    const usersRepositories = getCustomRepository(UserRepository)

    const { admin } = await usersRepositories.findOne(user_id)

    if (admin) {
        return next();
    }

    return res.status(401).send({ Error: "Usuário não autorizado" });
}
