const app = require('../src/app')
const { v4: uuidv4 } = require('uuid');

describe('App', () => {
    it('POST /register responds with 200', () => {
        let username = uuidv4();
        let password = uuidv4();
        return supertest(app)
            .post('/register')
            .send({"username":username,"password":password})
            .expect(200);
    });
});