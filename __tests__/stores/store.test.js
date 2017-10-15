import Store from '../../stores/store'
import products from '../../data/products.json'

describe('Store Test', () => {
  it("creates new store", () => {
    const store = new Store(products)
    expect(store.products.length).toBe(6)
  })
})
