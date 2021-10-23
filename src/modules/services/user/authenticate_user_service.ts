import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/user_repository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
interface AuthenticateRequest {
    email: string;
    password: string;
}
export class AuthenticateUserService {
    async execute({ email, password }: AuthenticateRequest) {
        const usersRepositories = getCustomRepository(UserRepository);
        // verificar se email existe;
        const user = await usersRepositories.findOne({ email });

        if (!user) {
            throw new Error("Email/Passowrd incorrect ");
        }
        // verificar se senha esta correta;

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Passowrd incorrect ");
        }

        const token = sign(
            {
                email: user.email,
            },
            "4f93ac9d10cb",
            {
                subject: user.id,
                expiresIn: "1d",
            }
        );

        return token;
    }
}
