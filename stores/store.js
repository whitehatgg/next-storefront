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

  @action addToCart = () => {
    this.cart.push('test')
  }

  @action removeFromCart = () => {
    this.cart.pop();
  }
}
