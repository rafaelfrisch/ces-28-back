import * as models from '../models';
import validator from 'validator';
const chalk = require('chalk')

export const createAdmin = async (name, email, password) => {

    if(name == undefined || email == undefined || password == undefined)
        return console.log(chalk.red("Missing data"))

    if(name.length < 5)
        return console.log(chalk.red("Name is too small"))

    if (!validator.isStrongPassword(password, { minSymbols: 0 }))
        return console.log(chalk.red("Password should have more than 8 letters, 1 number, 1 upper and 1 lowercase letter"))

    if (!validator.isEmail(email))
        return console.log(chalk.red("Email not valid"))

    try {
        const admin = new models.User({ name, email, password, admin: true })
        await admin.save()

        console.log(chalk.green('Admin created succefully', admin))
    } catch (error) {
        console.log(chalk.red('Error when creating user'))
        console.log(chalk.red('Error: ', error))
    }
};
