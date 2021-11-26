import * as models from '../models';
import * as constants from '../settings';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await models.User.findOne({ email: email })

        if (user == undefined)
            return res.status(404).json({ erro: 'Usuario nao encontrado!' })

        user.comparePassword(password, async function (err, isMatch) {
            if(err) 
                throw err;
            if(!isMatch)
                return res.status(400).send({ message: "Password does not match" })

            const token = await jwt.sign({id: user._id, email: user.email, admin: user.admin}, constants.jwtPrivateKey, {expiresIn: '48h'})
            res.status(200).json({ message: 'Authentication successfully', token: token});            
        })
    } catch (err) {
        res.status(400).json({ erro: err.stack });
    }
};
