import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Product } from '.'

const app = () => express(routes)

let product

beforeEach(async () => {
  product = await Product.create({})
})

test('POST /products 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ article: 'test', title: 'test', image: 'test', cost: 'test', lift: 'test', priority: 'test', complex: 'test', status: 'test', prognosedNeed: 'test', price: 'test', needStatistics: 'test', popularityStatistics: 'test', recipe: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.article).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.cost).toEqual('test')
  expect(body.lift).toEqual('test')
  expect(body.priority).toEqual('test')
  expect(body.complex).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.prognosedNeed).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.needStatistics).toEqual('test')
  expect(body.popularityStatistics).toEqual('test')
  expect(body.recipe).toEqual('test')
})

test('GET /products 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /products/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${product.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(product.id)
})

test('GET /products/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /products/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${product.id}`)
    .send({ article: 'test', title: 'test', image: 'test', cost: 'test', lift: 'test', priority: 'test', complex: 'test', status: 'test', prognosedNeed: 'test', price: 'test', needStatistics: 'test', popularityStatistics: 'test', recipe: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(product.id)
  expect(body.article).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.cost).toEqual('test')
  expect(body.lift).toEqual('test')
  expect(body.priority).toEqual('test')
  expect(body.complex).toEqual('test')
  expect(body.status).toEqual('test')
  expect(body.prognosedNeed).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.needStatistics).toEqual('test')
  expect(body.popularityStatistics).toEqual('test')
  expect(body.recipe).toEqual('test')
})

test('PUT /products/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ article: 'test', title: 'test', image: 'test', cost: 'test', lift: 'test', priority: 'test', complex: 'test', status: 'test', prognosedNeed: 'test', price: 'test', needStatistics: 'test', popularityStatistics: 'test', recipe: 'test' })
  expect(status).toBe(404)
})

test('DELETE /products/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${product.id}`)
  expect(status).toBe(204)
})

test('DELETE /products/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
