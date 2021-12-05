import app from '../src/app';
import jwt from 'jsonwebtoken';
import * as models from '../src/models';
const request = require('supertest')


test('Should Login an existing User', async () => {
    const response = await request(app).post('/login').send({
        email: "xxx@gmail.com",
        password: "1a2b3c4D"
    }).expect(200)

    // check if returned token is valid and throws error if token is invalid
    await jwt.verify(response.body.token, process.env.JWT_PRIVATE_KEY)
})

test('Should Check for wrong email or password', async () => {
    await request(app).post('/login').send({
        email: "xxx",
        password: "1a2b3c4D"
    }).expect(404)

    await request(app).post('/login').send({
        email: "xxx@gmail.com",
        password: "1a2b3c4"
    }).expect(400)
})