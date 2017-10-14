import { action, observable } from 'mobx'

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

  @action addToCart = (productId, quantity) => {
    const newQuantity = parseInt(quantity, 10)
    //check if newQuantity is valid
    if (newQuantity) {
      const cartId = this.cart.findIndex((product) => {
        return product.id === productId
      })
      //if does not exist add to cart, else increment quantity
      if (cartId === -1) {
        this.cart.push({
          id: productId,
          quantity: newQuantity
        });
      } else {
        this.cart[cartId].quantity = this.cart[cartId].quantity + newQuantity;
      }
    }
    //reset quantity
    this.resetQuantity()
  }

  @action removeFromCart = (index) => {
    this.cart.splice(index, 1)
  }

  @action setQuantity = (quantity) => {
    this.quantity = quantity;
  }

  @action resetQuantity = () => {
    this.setQuantity(1);
  }
}
