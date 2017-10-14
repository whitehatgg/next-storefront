import { action, observable } from 'mobx'

export default class Store {
  @observable products = []
  @observable checkoutBool = false
  @observable cart = []
  @observable cartSubTotal = 0
  @observable cartTotal = 0

  constructor (products) {
    this.products = products
  }

  @action addToCart = (product) => {
    this.cart.push(product)
  }

  @action removeFromCart = (index) => {
    this.cart.splice(index, 1)
  }
}
