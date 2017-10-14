import { action, observable, computed } from 'mobx'

export default class Store {
  @observable products = []
  @observable checkoutBool = false
  @observable cart = []
  @observable cartSubTotal = 0
  @observable cartTotal = 0
  @observable quantity = 1

  constructor (products) {
    this.products = products
  }

  @computed get cartCount() {
    return this.cart.reduce((accumulator, product) => {
      return accumulator + product.quantity
    }, 0)
  }

  @action addToCart = (productId, quantity) => {
    const newQuantity = parseInt(quantity, 10)
    const newProductId = parseInt(productId, 10)
    //check if newQuantity is valid
    if (newQuantity) {
      const cartIndex = this.findProductInCart(newProductId)
      //if does not exist add to cart, else increment quantity
      if (cartIndex !== -1) {
        this.cart[cartIndex].quantity += newQuantity;
      } else {
        this.cart.push({
          id: newProductId,
          quantity: newQuantity
        })
      }
    }
    //reset quantity
    this.resetProductQuantity()
  }

  @action removeFromCart = (productId) => {
    const cartIndex = this.findProductInCart(productId)
    this.cart.splice(cartIndex, 1)
  }

  @action setCartQuantity = (productId, quantity) => {
    const newQuantity = parseInt(quantity, 10)
    const newProductId = parseInt(productId, 10)
    const cartIndex = this.findProductInCart(newProductId)
    if (newQuantity && cartIndex  !== -1) {
      this.cart[cartIndex].quantity = newQuantity
    }
  }

  @action setProductQuantity = (quantity) => {
    const newQuantity = parseInt(quantity, 10)
    this.quantity = newQuantity
  }

  @action resetProductQuantity = () => {
    this.setProductQuantity(1)
  }

  @action getProductById = (productId) => {
    const newProductId = parseInt(productId, 10)
    return this.products.find(product => product.id === newProductId)
  }

  @action findProductInCart = (productId) => {
    const newProductId = parseInt(productId, 10)
    return this.cart.findIndex((product) => {
      return product.id === newProductId
    })
  }
}
