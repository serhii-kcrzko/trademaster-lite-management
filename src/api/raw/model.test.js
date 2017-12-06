import { Raw } from '.'

let raw

beforeEach(async () => {
  raw = await Raw.create({ article: 'test', name: 'test', limit: 10, image: 'test', status: 0, quantity: 15, prognosedNeed: 4, prognosedPrice: 25.65, actualPrice: 26.63, needStatistics: [0, 1, 2, 3, 4], priceStatistics: [1, 2, 3, 4] })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = raw.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(raw.id)
    expect(view.article).toBe(raw.article)
    expect(view.name).toBe(raw.name)
    expect(view.limit).toBe(raw.limit)
    expect(view.image).toBe(raw.image)
    expect(view.status).toBe(raw.status)
    expect(view.quantity).toBe(raw.quantity)
    expect(view.prognosedNeed).toBe(raw.prognosedNeed)
    expect(view.prognosedPrice).toBe(raw.prognosedPrice)
    expect(view.actualPrice).toBe(raw.actualPrice)
    expect(view.needStatistics).toBe(raw.needStatistics)
    expect(view.priceStatistics).toBe(raw.priceStatistics)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = raw.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(raw.id)
    expect(view.article).toBe(raw.article)
    expect(view.name).toBe(raw.name)
    expect(view.limit).toBe(raw.limit)
    expect(view.image).toBe(raw.image)
    expect(view.status).toBe(raw.status)
    expect(view.quantity).toBe(raw.quantity)
    expect(view.prognosedNeed).toBe(raw.prognosedNeed)
    expect(view.prognosedPrice).toBe(raw.prognosedPrice)
    expect(view.actualPrice).toBe(raw.actualPrice)
    expect(view.needStatistics).toBe(raw.needStatistics)
    expect(view.priceStatistics).toBe(raw.priceStatistics)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
