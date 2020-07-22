const app = require('../src/app')
const { v4: uuidv4 } = require('uuid');
const supertest = require('supertest');

describe('App', () => {
    it('POST /favorite responds with 200', () => {
        let userId = uuidv4();
        let recipeId = uuidv4();
        return supertest(app)
            .post('/favorite')
            .send({"userId":userId,"recipeId":recipeId})
            .expect(200);
    });
    it('POST /favorite/get responds with 200', () => {
        let userId = 'demo';
        return supertest(app)
            .post('/favorite/get')
            .send({"userId":userId})
            .expect(200);
    });
    it('POST /favorite/delete responds with 200', () => {
        let userId = 'demo';
        let recipeId = uuidv4();
        supertest(app)
            .post('/favorite')
            .send({"userId":userId,"recipeId":recipeId})
        return supertest(app)
            .post('/favorite/delete')
            .send({"userId":userId,"recipeId":recipeId})
            .expect(200);
    });
});