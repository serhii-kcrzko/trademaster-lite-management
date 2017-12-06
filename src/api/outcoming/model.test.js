import { Outcoming } from '.'

let outcoming

beforeEach(async () => {
  outcoming = await Outcoming.create({ article: 'test', date: 'test', operator: 'test', items: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = outcoming.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(outcoming.id)
    expect(view.article).toBe(outcoming.article)
    expect(view.date).toBe(outcoming.date)
    expect(view.operator).toBe(outcoming.operator)
    expect(view.items).toBe(outcoming.items)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = outcoming.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(outcoming.id)
    expect(view.article).toBe(outcoming.article)
    expect(view.date).toBe(outcoming.date)
    expect(view.operator).toBe(outcoming.operator)
    expect(view.items).toBe(outcoming.items)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
