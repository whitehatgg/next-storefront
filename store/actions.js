export const actionTypes = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  FAILURE: 'FAILURE',
  SET_SHOW_MODAL: 'SET_SHOW_MODAL',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART'
}

export function loadData () {
  return {type: actionTypes.LOAD_DATA}
}

export function loadDataSuccess (data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  }
}

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function setShowModal (showModal) {
  return {
    type: actionTypes.SET_SHOW_MODAL,
    showModal
  }
}

export function addToCart (productId, quantity) {
  return {
    type: actionTypes.ADD_TO_CART,
    productId,
    quantity
  }
}

export function removeFromCart (productId) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    productId
  }
}
