export const adminAuthMiddleware = (req, res, next) => {
    if(!req.loggedUser.admin)
        return res.status(403).send('Access restricted to admins')
    next()
};
