import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Outcoming } from '.'

const app = () => express(routes)

let outcoming

beforeEach(async () => {
  outcoming = await Outcoming.create({})
})

test('POST /outcomings 201', async () => {
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

test('GET /outcomings 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /outcomings/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${outcoming.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(outcoming.id)
})

test('GET /outcomings/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /outcomings/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${outcoming.id}`)
    .send({ article: 'test', date: 'test', operator: 'test', items: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(outcoming.id)
  expect(body.article).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.operator).toEqual('test')
  expect(body.items).toEqual('test')
})

test('PUT /outcomings/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ article: 'test', date: 'test', operator: 'test', items: 'test' })
  expect(status).toBe(404)
})

test('DELETE /outcomings/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${outcoming.id}`)
  expect(status).toBe(204)
})

test('DELETE /outcomings/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
