import {actionTypes} from './actions'

export const initialState = {
  error: false,
  products: [],
  cart: [],
  cartCount: 0,
  cartSubTotal: 0,
  showModal: false
}

function setShowModal (state, action) {
  return {
    ...state,
    ...{ showModal: action.showModal }
  }
}

function findProductInCart (state, action) {
  const newProductId = parseInt(action.productId, 10)
  return state.cart.findIndex((product) => {
    return product.id === newProductId
  })
}

function removeFromCart (state, action) {
  const cart = state.cart
  const cartIndex = findProductInCart(state, action)
  cart.splice(cartIndex, 1)
  return {
    ...state,
    ...{ cart: cart }
  }
}

function addToCart (state, action) {
  const cart = state.cart
  const newQuantity = parseInt(action.quantity, 10)
  const newProductId = parseInt(action.productId, 10)
  //check if newQuantity is valid
  if (!Number.isNaN(newQuantity)) {
    const cartIndex = findProductInCart(state, action)
    //if does not exist add to cart, else increment quantity
    if (cartIndex !== -1) {
      cart[cartIndex].quantity += newQuantity
    } else {
      cart.push({
        id: newProductId,
        quantity: newQuantity
      })
    }
  }
  return {
    ...state,
    ...{ cart: cart }
  }
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ products: action.data }
      }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      }

    case actionTypes.ADD_TO_CART:
      return addToCart(state, action)

    case actionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action)

    case actionTypes.SET_SHOW_MODAL:
      return setShowModal(state, action)

    default:
      return state
  }
}

export default reducer
