import * as constants from '../settings';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader)
        return res.status(401).json({ message: "Nenhum token enviado!" });

    const token = authHeader.replace('Bearer ', '');

    if (!token)
        return res.status(401).json({ message: "Nenhum token enviado!" });

    try {
        const data = await jwt.verify(token, constants.jwtPrivateKey)
        req.token = token;
        req.loggedUser = { id: data.id, email: data.email, admin: data.admin };
        next();
    } catch (error) {
        res.status(401).json({message: "Token não é válido!", error});
    }
};
