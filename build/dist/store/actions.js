'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadData = loadData;
exports.loadDataSuccess = loadDataSuccess;
exports.failure = failure;
exports.setShowModal = setShowModal;
exports.addToCart = addToCart;
exports.removeFromCart = removeFromCart;
var actionTypes = exports.actionTypes = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  FAILURE: 'FAILURE',
  SET_SHOW_MODAL: 'SET_SHOW_MODAL',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART'
};

function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data: data
  };
}

function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error: error
  };
}

function setShowModal(showModal) {
  return {
    type: actionTypes.SET_SHOW_MODAL,
    showModal: showModal
  };
}

function addToCart(productId, quantity) {
  return {
    type: actionTypes.ADD_TO_CART,
    productId: productId,
    quantity: quantity
  };
}

function removeFromCart(productId) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    productId: productId
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL2FjdGlvbnMuanMiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJMT0FEX0RBVEEiLCJMT0FEX0RBVEFfU1VDQ0VTUyIsIkZBSUxVUkUiLCJTRVRfU0hPV19NT0RBTCIsIkFERF9UT19DQVJUIiwiUkVNT1ZFX0ZST01fQ0FSVCIsImxvYWREYXRhIiwidHlwZSIsImxvYWREYXRhU3VjY2VzcyIsImRhdGEiLCJmYWlsdXJlIiwiZXJyb3IiLCJzZXRTaG93TW9kYWwiLCJzaG93TW9kYWwiLCJhZGRUb0NhcnQiLCJwcm9kdWN0SWQiLCJxdWFudGl0eSIsInJlbW92ZUZyb21DYXJ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQVNPLEFBQVM7UUFJVCxBQUFTO1FBT1QsQUFBUztRQU9ULEFBQVM7UUFPVCxBQUFTO1FBUVQsQUFBUztBQTFDVCxJQUFNO2FBQWMsQUFDZCxBQUNYO3FCQUZ5QixBQUVOLEFBQ25CO1dBSHlCLEFBR2hCLEFBQ1Q7a0JBSnlCLEFBSVQsQUFDaEI7ZUFMeUIsQUFLWixBQUNiO29CQU5LLEFBQW9CLEFBTVAsQUFHcEI7QUFUMkIsQUFDekI7O0FBUUssb0JBQXFCLEFBQzFCO1NBQU8sRUFBQyxNQUFNLFlBQWQsQUFBTyxBQUFtQixBQUMzQjtBQUVEOztBQUFPLHlCQUFBLEFBQTBCLE1BQU0sQUFDckM7O1VBQ1EsWUFERCxBQUNhLEFBQ2xCO1VBRkYsQUFBTyxBQUlSO0FBSlEsQUFDTDtBQUtKOztBQUFPLGlCQUFBLEFBQWtCLE9BQU8sQUFDOUI7O1VBQ1EsWUFERCxBQUNhLEFBQ2xCO1dBRkYsQUFBTyxBQUlSO0FBSlEsQUFDTDtBQUtKOztBQUFPLHNCQUFBLEFBQXVCLFdBQVcsQUFDdkM7O1VBQ1EsWUFERCxBQUNhLEFBQ2xCO2VBRkYsQUFBTyxBQUlSO0FBSlEsQUFDTDtBQUtKOztBQUFPLG1CQUFBLEFBQW9CLFdBQXBCLEFBQStCLFVBQVUsQUFDOUM7O1VBQ1EsWUFERCxBQUNhLEFBQ2xCO2VBRkssQUFHTDtjQUhGLEFBQU8sQUFLUjtBQUxRLEFBQ0w7QUFNSjs7QUFBTyx3QkFBQSxBQUF5QixXQUFXLEFBQ3pDOztVQUNRLFlBREQsQUFDYSxBQUNsQjtlQUZGLEFBQU8sQUFJUjtBQUpRLEFBQ0wiLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ29uemFsb2Jlbml0ZXovRG9jdW1lbnRzL3N0b3JlZnJvbnQvbmV4dC1zdG9yZWZyb250In0=