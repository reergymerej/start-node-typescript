import app from './app'
import supertest from 'supertest'

describe('sanity', () => {
  it('should be happy', async () => {
    await supertest(app)
      .get('/hello')
      .expect(200)
      .expect('world')
  })

  it('should not find missing routes', async () => {
    await supertest(app)
      .get('/celina_dr')
      .expect(404)
  })
})
