import Store from '../../stores/store'
import products from '../../data/products.json'

describe('Store Test', () => {
  let store = null
  beforeEach(() => {
    store = new Store(products)
  })

  it("creates new store", () => {
    expect(store.products.length).toBe(6)
  })

  it("inserts product into cart", () => {
  	const productId = store.products[3].id
  	const quantity = 1
  	store.addToCart(productId, quantity)
  	const cartIndex = store.findProductInCart(productId)
    expect(cartIndex).toBe(0)
  })

  it("returns cart count", () => {
  	const productId = store.products[2].id
  	const quantity = 3
  	store.addToCart(productId, quantity)
    expect(store.cartCount).toBe(3)
  })
})
