import { action, observable, computed } from 'mobx'

export default class Store {
  @observable products = []
  @observable checkoutBool = false
  @observable cart = []
  @observable tax = 0.10
  @observable quantity = 1
  @observable showModal = false

  constructor (products) {
    this.products = products
  }

  getProductById = (productId) => {
    const newProductId = parseInt(productId, 10)
    return this.products.find(product => product.id === newProductId)
  }

  findProductInCart = (productId) => {
    const newProductId = parseInt(productId, 10)
    return this.cart.findIndex((product) => {
      return product.id === newProductId
    })
  }

  @computed get cartCount() {
    return this.cart.reduce((accumulator, cartProduct) => {
      return accumulator + cartProduct.quantity
    }, 0)
  }

  @computed get cartTax() {
    let total = this.cartSubTotal
    return total * this.tax
  }

  @computed get cartSubTotal() {
    return this.cart.reduce((accumulator, cartProduct) => {
      const product = this.getProductById(cartProduct.id)
      return accumulator + (cartProduct.quantity * product.price)
    }, 0)
  }

  @computed get cartTotal() {
    let total = this.cartSubTotal
    let tax = this.cartTax
    return total += tax
  }

  @action addToCart = (productId, quantity) => {
    const newQuantity = parseInt(quantity, 10)
    const newProductId = parseInt(productId, 10)
    //check if newQuantity is valid
    if (!Number.isNaN(newQuantity)) {
      const cartIndex = this.findProductInCart(newProductId)
      //if does not exist add to cart, else increment quantity
      if (cartIndex !== -1) {
        this.cart[cartIndex].quantity += newQuantity
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
    if (!Number.isNaN(newQuantity) && cartIndex  !== -1) {
      this.cart[cartIndex].quantity = newQuantity
    }
  }

  @action setProductQuantity = (quantity) => {
    const newQuantity = parseInt(quantity, 10)
    if (!Number.isNaN(newQuantity)) {
      this.quantity = newQuantity
    }
  }

  @action resetProductQuantity = () => {
    this.setProductQuantity(1)
  }

  @action setShowModal = (showModal) => {
    this.showModal = showModal
  }
}
