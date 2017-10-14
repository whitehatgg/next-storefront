let store = null

export function initStore(Store, products, isServer) {
  if (isServer) {
    return new Store(products)
  } else {
    if (store === null) {
      store = new Store(products)
    }
    return store
  }
}
