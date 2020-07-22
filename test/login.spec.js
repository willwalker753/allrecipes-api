const app = require('../src/app')

describe('App', () => {
  it('POST /login responds with 200', () => {
  return supertest(app)
    .post('/login')
    .send({"username":"demo","password":"password"})
    .expect(200);
  });
});