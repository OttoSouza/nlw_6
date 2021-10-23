import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
interface Payload{
    sub: string;
}

export function ensureAuthenticate(
    req: Request,
    res: Response,
    next: NextFunction
) {
    //recever o token
    const authToken = req.headers.authorization;

    // validar se token esta preenchido
    if (!authToken) {
        return res.status(401).end();
    }
    const [_, token] = authToken.split(" ");

    try {
        // Validar se token é valido
        const { sub } = verify(token, "4f93ac9d10cb") as Payload;

        req.user_id = sub ;

        return next();
    } catch (error) {
        return res.status(401).end();
    }

    // recuperar informacoes do usuario
}
