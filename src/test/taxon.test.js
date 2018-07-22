const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)

const url = '/api/taxa'

describe('the simplest test', async () => {
  beforeAll(async () => {
   	jest.setTimeout(30000)
  })

  test('tautology', async () => {
      expect(true).toBe(true)
  })
  
  afterAll(async () => {
    server.close()
		mongoose.disconnect()
  })

})
