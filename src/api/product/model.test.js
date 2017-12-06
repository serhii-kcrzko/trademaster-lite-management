import { Product } from '.'

let product

beforeEach(async () => {
  product = await Product.create({ article: 'test', title: 'test', image: 'test', cost: 'test', lift: 'test', priority: 'test', complex: 'test', status: 'test', prognosedNeed: 'test', price: 'test', needStatistics: 'test', popularityStatistics: 'test', recipe: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = product.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(product.id)
    expect(view.article).toBe(product.article)
    expect(view.title).toBe(product.title)
    expect(view.image).toBe(product.image)
    expect(view.cost).toBe(product.cost)
    expect(view.lift).toBe(product.lift)
    expect(view.priority).toBe(product.priority)
    expect(view.complex).toBe(product.complex)
    expect(view.status).toBe(product.status)
    expect(view.prognosedNeed).toBe(product.prognosedNeed)
    expect(view.price).toBe(product.price)
    expect(view.needStatistics).toBe(product.needStatistics)
    expect(view.popularityStatistics).toBe(product.popularityStatistics)
    expect(view.recipe).toBe(product.recipe)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = product.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(product.id)
    expect(view.article).toBe(product.article)
    expect(view.title).toBe(product.title)
    expect(view.image).toBe(product.image)
    expect(view.cost).toBe(product.cost)
    expect(view.lift).toBe(product.lift)
    expect(view.priority).toBe(product.priority)
    expect(view.complex).toBe(product.complex)
    expect(view.status).toBe(product.status)
    expect(view.prognosedNeed).toBe(product.prognosedNeed)
    expect(view.price).toBe(product.price)
    expect(view.needStatistics).toBe(product.needStatistics)
    expect(view.popularityStatistics).toBe(product.popularityStatistics)
    expect(view.recipe).toBe(product.recipe)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
