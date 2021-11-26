import * as commands from './index'
import mongoose from 'mongoose';
import '../connect';
const yargs = require('yargs')

yargs.command({
    command: 'createAdmin',
    describe: 'Create a new admin',
    builder: {
        name: {
            describe: 'Name of admin',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email of admin',
            demandOption: true,
            type: 'string',
        },
        password: {
            describe: 'Password of admin',
            demandOption: true,
            type: 'string',
        }
    },
    handler: async (argv) => {
        await commands.createAdmin(argv.name, argv.email, argv.password)
        mongoose.connection.close();
    }
})

yargs.parse()
