import { Incoming } from '.'

let incoming

beforeEach(async () => {
  incoming = await Incoming.create({ article: 'test', date: 'test', operator: 'test', items: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = incoming.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(incoming.id)
    expect(view.article).toBe(incoming.article)
    expect(view.date).toBe(incoming.date)
    expect(view.operator).toBe(incoming.operator)
    expect(view.items).toBe(incoming.items)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = incoming.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(incoming.id)
    expect(view.article).toBe(incoming.article)
    expect(view.date).toBe(incoming.date)
    expect(view.operator).toBe(incoming.operator)
    expect(view.items).toBe(incoming.items)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
