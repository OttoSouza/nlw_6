import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/user_repository";
import * as EmailValidator from "email-validator";
import { hash } from "bcryptjs";
import {classToPlain} from "class-transformer"
interface UserRequest {
    name: string;
    password: string;
    email: string;
    admin: boolean;
}

export class CreateUserService {
    async execute({ name, email, admin = false, password }: UserRequest) {
        const usersRepository = getCustomRepository(UserRepository);

        if (!email && !EmailValidator.validate(email)) {
            throw new Error("Email incorreto");
        }

        const userAlreadyExists = await usersRepository.findOne({ email });

        if (userAlreadyExists) {
            throw new Error("User ja existe");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            password: passwordHash,
            email,
            admin,
        });

        await usersRepository.save(user);

        return classToPlain(user);
    }
}
