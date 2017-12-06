import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Incoming } from '.'

const app = () => express(routes)

let incoming

beforeEach(async () => {
  incoming = await Incoming.create({})
})

test('POST /incomings 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ article: 'test', date: 'test', operator: 'test', items: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.article).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.operator).toEqual('test')
  expect(body.items).toEqual('test')
})

test('GET /incomings 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /incomings/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${incoming.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(incoming.id)
})

test('GET /incomings/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /incomings/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${incoming.id}`)
    .send({ article: 'test', date: 'test', operator: 'test', items: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(incoming.id)
  expect(body.article).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.operator).toEqual('test')
  expect(body.items).toEqual('test')
})

test('PUT /incomings/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ article: 'test', date: 'test', operator: 'test', items: 'test' })
  expect(status).toBe(404)
})

test('DELETE /incomings/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${incoming.id}`)
  expect(status).toBe(204)
})

test('DELETE /incomings/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
