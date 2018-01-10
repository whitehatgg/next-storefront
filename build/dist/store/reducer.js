'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _isNan = require('babel-runtime/core-js/number/is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  error: false,
  products: [],
  cart: [],
  cartCount: 0,
  cartSubTotal: 0,
  showModal: false
};

function setShowModal(state, action) {
  return (0, _extends3.default)({}, state, { showModal: action.showModal });
}

function findProductInCart(state, action) {
  var newProductId = parseInt(action.productId, 10);
  return state.cart.findIndex(function (product) {
    return product.id === newProductId;
  });
}

function removeFromCart(state, action) {
  var cart = state.cart;
  var cartIndex = findProductInCart(state, action);
  cart.splice(cartIndex, 1);
  return (0, _extends3.default)({}, state, { cart: cart });
}

function addToCart(state, action) {
  var cart = state.cart;
  var newQuantity = parseInt(action.quantity, 10);
  var newProductId = parseInt(action.productId, 10);
  //check if newQuantity is valid
  if (!(0, _isNan2.default)(newQuantity)) {
    var cartIndex = findProductInCart(state, action);
    //if does not exist add to cart, else increment quantity
    if (cartIndex !== -1) {
      cart[cartIndex].quantity += newQuantity;
    } else {
      cart.push({
        id: newProductId,
        quantity: newQuantity
      });
    }
  }
  return (0, _extends3.default)({}, state, { cart: cart });
}

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.actionTypes.LOAD_DATA_SUCCESS:
      return (0, _extends3.default)({}, state, { products: action.data });

    case _actions.actionTypes.FAILURE:
      return (0, _extends3.default)({}, state, { error: action.error });

    case _actions.actionTypes.ADD_TO_CART:
      return addToCart(state, action);

    case _actions.actionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action);

    case _actions.actionTypes.SET_SHOW_MODAL:
      return setShowModal(state, action);

    default:
      return state;
  }
}

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL3JlZHVjZXIuanMiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJpbml0aWFsU3RhdGUiLCJlcnJvciIsInByb2R1Y3RzIiwiY2FydCIsImNhcnRDb3VudCIsImNhcnRTdWJUb3RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInN0YXRlIiwiYWN0aW9uIiwiZmluZFByb2R1Y3RJbkNhcnQiLCJuZXdQcm9kdWN0SWQiLCJwYXJzZUludCIsInByb2R1Y3RJZCIsImZpbmRJbmRleCIsInByb2R1Y3QiLCJpZCIsInJlbW92ZUZyb21DYXJ0IiwiY2FydEluZGV4Iiwic3BsaWNlIiwiYWRkVG9DYXJ0IiwibmV3UXVhbnRpdHkiLCJxdWFudGl0eSIsInB1c2giLCJyZWR1Y2VyIiwidHlwZSIsIkxPQURfREFUQV9TVUNDRVNTIiwiZGF0YSIsIkZBSUxVUkUiLCJBRERfVE9fQ0FSVCIsIlJFTU9WRV9GUk9NX0NBUlQiLCJTRVRfU0hPV19NT0RBTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUSxBQUFrQixBQUUxQjs7OztBQUFPLElBQU07U0FBZSxBQUNuQixBQUNQO1lBRjBCLEFBRWhCLEFBQ1Y7UUFIMEIsQUFHcEIsQUFDTjthQUowQixBQUlmLEFBQ1g7Z0JBTDBCLEFBS1osQUFDZDthQU5LLEFBQXFCLEFBTWY7QUFOZSxBQUMxQjs7QUFRRixTQUFBLEFBQVMsYUFBVCxBQUF1QixPQUF2QixBQUE4QixRQUFRLEFBQ3BDO29DQUFBLEFBQ0ssT0FDQSxFQUFFLFdBQVcsT0FGbEIsQUFFSyxBQUFvQixBQUUxQjs7O0FBRUQsU0FBQSxBQUFTLGtCQUFULEFBQTRCLE9BQTVCLEFBQW1DLFFBQVEsQUFDekM7TUFBTSxlQUFlLFNBQVMsT0FBVCxBQUFnQixXQUFyQyxBQUFxQixBQUEyQixBQUNoRDtlQUFPLEFBQU0sS0FBTixBQUFXLFVBQVUsVUFBQSxBQUFDLFNBQVksQUFDdkM7V0FBTyxRQUFBLEFBQVEsT0FBZixBQUFzQixBQUN2QjtBQUZELEFBQU8sQUFHUixHQUhROzs7QUFLVCxTQUFBLEFBQVMsZUFBVCxBQUF5QixPQUF6QixBQUFnQyxRQUFRLEFBQ3RDO01BQU0sT0FBTyxNQUFiLEFBQW1CLEFBQ25CO01BQU0sWUFBWSxrQkFBQSxBQUFrQixPQUFwQyxBQUFrQixBQUF5QixBQUMzQztPQUFBLEFBQUssT0FBTCxBQUFZLFdBQVosQUFBdUIsQUFDdkI7b0NBQUEsQUFDSyxPQUNBLEVBQUUsTUFGUCxBQUVLLEFBQVEsQUFFZDs7O0FBRUQsU0FBQSxBQUFTLFVBQVQsQUFBb0IsT0FBcEIsQUFBMkIsUUFBUSxBQUNqQztNQUFNLE9BQU8sTUFBYixBQUFtQixBQUNuQjtNQUFNLGNBQWMsU0FBUyxPQUFULEFBQWdCLFVBQXBDLEFBQW9CLEFBQTBCLEFBQzlDO01BQU0sZUFBZSxTQUFTLE9BQVQsQUFBZ0IsV0FBckMsQUFBcUIsQUFBMkIsQUFDaEQ7QUFDQTtNQUFJLENBQUMscUJBQUwsQUFBSyxBQUFhLGNBQWMsQUFDOUI7UUFBTSxZQUFZLGtCQUFBLEFBQWtCLE9BQXBDLEFBQWtCLEFBQXlCLEFBQzNDO0FBQ0E7UUFBSSxjQUFjLENBQWxCLEFBQW1CLEdBQUcsQUFDcEI7V0FBQSxBQUFLLFdBQUwsQUFBZ0IsWUFBaEIsQUFBNEIsQUFDN0I7QUFGRCxXQUVPLEFBQ0w7V0FBQSxBQUFLO1lBQUssQUFDSixBQUNKO2tCQUZGLEFBQVUsQUFFRSxBQUViO0FBSlcsQUFDUjtBQUlMO0FBQ0Q7b0NBQUEsQUFDSyxPQUNBLEVBQUUsTUFGUCxBQUVLLEFBQVEsQUFFZDs7O0FBRUQsU0FBQSxBQUFTLFVBQXVDO01BQTlCLEFBQThCLDRFQUF0QixBQUFzQjtNQUFSLEFBQVEsbUJBQzlDOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUsscUJBQUwsQUFBaUIsQUFDZjt3Q0FBQSxBQUNLLE9BQ0EsRUFBRSxVQUFVLE9BRmpCLEFBRUssQUFBbUIsQUFHMUI7O1NBQUsscUJBQUwsQUFBaUIsQUFDZjt3Q0FBQSxBQUNLLE9BQ0EsRUFBRSxPQUFPLE9BRmQsQUFFSyxBQUFnQixBQUd2Qjs7U0FBSyxxQkFBTCxBQUFpQixBQUNmO2FBQU8sVUFBQSxBQUFVLE9BQWpCLEFBQU8sQUFBaUIsQUFFMUI7O1NBQUsscUJBQUwsQUFBaUIsQUFDZjthQUFPLGVBQUEsQUFBZSxPQUF0QixBQUFPLEFBQXNCLEFBRS9COztTQUFLLHFCQUFMLEFBQWlCLEFBQ2Y7YUFBTyxhQUFBLEFBQWEsT0FBcEIsQUFBTyxBQUFvQixBQUU3Qjs7QUFDRTthQXZCSixBQXVCSSxBQUFPLEFBRVo7O0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ29uemFsb2Jlbml0ZXovRG9jdW1lbnRzL3N0b3JlZnJvbnQvbmV4dC1zdG9yZWZyb250In0=