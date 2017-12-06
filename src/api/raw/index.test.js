import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Raw } from '.'

const app = () => express(routes)

let raw

beforeEach(async () => {
  raw = await Raw.create({})
})

test('POST /raws 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ article: 'test', name: 'test', limit: 'test', image: 'test', status: 'test', quantity: 'test', prognosedNeed: 'test', prognosedPrice: 'test', actualPrice: 'test', needStatistics: 'test', priceStatistics: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.article).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.limit).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.quantity).toEqual('test')
  expect(body.prognosedNeed).toEqual('test')
  expect(body.prognosedPrice).toEqual('test')
  expect(body.actualPrice).toEqual('test')
  expect(body.needStatistics).toEqual('test')
  expect(body.priceStatistics).toEqual('test')
})

test('GET /raws 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /raws/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${raw.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(raw.id)
})

test('GET /raws/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /raws/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${raw.id}`)
    .send({ article: 'test', name: 'test', limit: 'test', image: 'test', status: 'test', quantity: 'test', prognosedNeed: 'test', prognosedPrice: 'test', actualPrice: 'test', needStatistics: 'test', priceStatistics: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(raw.id)
  expect(body.article).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.limit).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.quantity).toEqual('test')
  expect(body.prognosedNeed).toEqual('test')
  expect(body.prognosedPrice).toEqual('test')
  expect(body.actualPrice).toEqual('test')
  expect(body.needStatistics).toEqual('test')
  expect(body.priceStatistics).toEqual('test')
})

test('PUT /raws/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ article: 'test', name: 'test', limit: 'test', image: 'test', status: 'test', quantity: 'test', prognosedNeed: 'test', prognosedPrice: 'test', actualPrice: 'test', needStatistics: 'test', priceStatistics: 'test' })
  expect(status).toBe(404)
})

test('DELETE /raws/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${raw.id}`)
  expect(status).toBe(204)
})

test('DELETE /raws/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
