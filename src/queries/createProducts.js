import * as utils from '../utils';
import chalk from 'chalk'

export const createProducts = async (numProducts) => {
    try {

        for(let i=0 ; i < numProducts; i++)
            await utils.createRandomProduct()

    } catch (error) {
        console.log(chalk.red('Error when creating Products'))
        console.log(chalk.red('Error: ', error))
    }
};
