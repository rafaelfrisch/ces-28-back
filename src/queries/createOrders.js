import * as utils from '../utils';
import chalk from 'chalk'

export const createOrders = async (numOrders, minDate, maxDate) => {
    try {
        
        for(let i=0; i < numOrders; i++)
            await utils.createRandomOrder(minDate, maxDate)

    } catch (error) {
        console.log(chalk.red('Error when creating orders'))
        console.log(chalk.red('Error: ', error))
    }
};
