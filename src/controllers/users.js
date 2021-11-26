import * as models from '../models';
import validator from 'validator';

export const createUser = async (request, response) => {
    const { name, email, password, admin } = request.body

    if(name == undefined || email == undefined || password == undefined || admin == undefined)
        return response.status(400).send("Missing data")

    if(name.length < 5)
        return response.status(400).send("Name is too small")

    if (!validator.isStrongPassword(password, { minSymbols: 0 }))
        return response.status(400).send("Password should have more than 8 letters, 1 number, 1 upper and 1 lowercase letter")

    if (!validator.isEmail(email))
        return response.status(400).send("Email not valid")

    try {
        // Checking if email is already taken
        const checkEmail = await models.User.find({ email: email })
        if (checkEmail.length > 0)
            return response.status(406).send("User with this email already exists")
        
        const user = new models.User({ name, email, password, admin })
        await user.save()

        response.status(201).send({message: 'User created succefully ', user })
    } catch (error) {
        response.status(400).send({ message: 'Failed to create user', error })
    }
};

export const getUser = async (request, response) => {
    try {
        const user = await models.User.findById(request.params.userid)
        response.status(200).send(user)
    } catch (error) {
        response.status(400).send({ message: 'User not found', error })       
    }
};

export const getAllUsers = async (request, response) => {
    try {
        const users = await models.User.find()
        response.status(200).send(users)
    } catch (error) {
        response.status(400).send({ message: 'Error when getting users', error })
    }
};

export const deleteUser = async (request, response) => {
    try {
        const user = await models.User.findByIdAndDelete(request.params.userid)
        if(!user)
            return response.status(404).send({ message: 'User not found' })

        response.status(200).send({ message: 'User deleted', user })
    } catch (error) {
        response.status(400).send({ message: 'Error when deleting user', error })
    }
};

export const updateUser = (request, response) => {
    const userid = request.params.userid
    const userAuthID = request.loggedUser.id
    const admin = request.loggedUser.admin

    if (userid != userAuthID && !admin)
        return response.status(403).send("User is not allowed to change other user info")
    models.Users.findOne({ _id: userid }, function (err, data) {
        if (!data)
            return response.status(400).send("User id is wrong")
        let newName = request.body.name != undefined ? request.body.name : data.name
        let newEmail = request.body.email != undefined ? request.body.email.toLowerCase() : data.email
        let newPosition = request.body.newPosition != undefined ? request.body.position : data.position
        let newUpdated = Date.now

        models.Users.updateOne({ _id: userid }, { name: newName, email: newEmail, position: newPosition, udapted: newUpdated }).then((result) => {
            return response.status(200).send(result)
        }).catch((error) => {
            return response.status(400).send(error)
        })
    })
};
