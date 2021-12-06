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

yargs.command({
    command: 'createOrders',
    describe: 'Create multiple new orders',
    builder: {
        numOrders: {
            describe: 'Number of orders to create',
            demandOption: true,
            type: 'int',
        },
        minDate: {
            describe: 'Email of admin',
            demandOption: true,
            type: 'string',
        },
        maxDate: {
            describe: 'Email of admin',
            demandOption: true,
            type: 'string',
        },
    },
    handler: async (argv) => {
        await commands.createOrders(argv.numOrders, argv.minDate, argv.maxDate)
        mongoose.connection.close()
    }
})

yargs.parse()
