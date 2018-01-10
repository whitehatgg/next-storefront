webpackHotUpdate(5,{

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _isNan = __webpack_require__(469);

var _isNan2 = _interopRequireDefault(_isNan);

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _actions = __webpack_require__(397);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/gonzalobenitez/Documents/storefront/next-storefront/store/reducer.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/gonzalobenitez/Documents/storefront/next-storefront/store/reducer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40YzU5ZmQ0OWZmNTBlNjIwOWNkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlci5qcz9hODkyNWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWN0aW9uVHlwZXN9IGZyb20gJy4vYWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZXJyb3I6IGZhbHNlLFxuICBwcm9kdWN0czogW10sXG4gIGNhcnQ6IFtdLFxuICBjYXJ0Q291bnQ6IDAsXG4gIGNhcnRTdWJUb3RhbDogMCxcbiAgc2hvd01vZGFsOiBmYWxzZVxufVxuXG5mdW5jdGlvbiBzZXRTaG93TW9kYWwgKHN0YXRlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi57IHNob3dNb2RhbDogYWN0aW9uLnNob3dNb2RhbCB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFByb2R1Y3RJbkNhcnQgKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3QgbmV3UHJvZHVjdElkID0gcGFyc2VJbnQoYWN0aW9uLnByb2R1Y3RJZCwgMTApXG4gIHJldHVybiBzdGF0ZS5jYXJ0LmZpbmRJbmRleCgocHJvZHVjdCkgPT4ge1xuICAgIHJldHVybiBwcm9kdWN0LmlkID09PSBuZXdQcm9kdWN0SWRcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQgKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3QgY2FydCA9IHN0YXRlLmNhcnRcbiAgY29uc3QgY2FydEluZGV4ID0gZmluZFByb2R1Y3RJbkNhcnQoc3RhdGUsIGFjdGlvbilcbiAgY2FydC5zcGxpY2UoY2FydEluZGV4LCAxKVxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnsgY2FydDogY2FydCB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9DYXJ0IChzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IGNhcnQgPSBzdGF0ZS5jYXJ0XG4gIGNvbnN0IG5ld1F1YW50aXR5ID0gcGFyc2VJbnQoYWN0aW9uLnF1YW50aXR5LCAxMClcbiAgY29uc3QgbmV3UHJvZHVjdElkID0gcGFyc2VJbnQoYWN0aW9uLnByb2R1Y3RJZCwgMTApXG4gIC8vY2hlY2sgaWYgbmV3UXVhbnRpdHkgaXMgdmFsaWRcbiAgaWYgKCFOdW1iZXIuaXNOYU4obmV3UXVhbnRpdHkpKSB7XG4gICAgY29uc3QgY2FydEluZGV4ID0gZmluZFByb2R1Y3RJbkNhcnQoc3RhdGUsIGFjdGlvbilcbiAgICAvL2lmIGRvZXMgbm90IGV4aXN0IGFkZCB0byBjYXJ0LCBlbHNlIGluY3JlbWVudCBxdWFudGl0eVxuICAgIGlmIChjYXJ0SW5kZXggIT09IC0xKSB7XG4gICAgICBjYXJ0W2NhcnRJbmRleF0ucXVhbnRpdHkgKz0gbmV3UXVhbnRpdHlcbiAgICB9IGVsc2Uge1xuICAgICAgY2FydC5wdXNoKHtcbiAgICAgICAgaWQ6IG5ld1Byb2R1Y3RJZCxcbiAgICAgICAgcXVhbnRpdHk6IG5ld1F1YW50aXR5XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLnsgY2FydDogY2FydCB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlciAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0FEX0RBVEFfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IHByb2R1Y3RzOiBhY3Rpb24uZGF0YSB9XG4gICAgICB9XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLkZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBlcnJvcjogYWN0aW9uLmVycm9yIH1cbiAgICAgIH1cblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQUREX1RPX0NBUlQ6XG4gICAgICByZXR1cm4gYWRkVG9DYXJ0KHN0YXRlLCBhY3Rpb24pXG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFTU9WRV9GUk9NX0NBUlQ6XG4gICAgICByZXR1cm4gcmVtb3ZlRnJvbUNhcnQoc3RhdGUsIGFjdGlvbilcblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX1NIT1dfTU9EQUw6XG4gICAgICByZXR1cm4gc2V0U2hvd01vZGFsKHN0YXRlLCBhY3Rpb24pXG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvcmVkdWNlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFFQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFFQTtBQUhBO0FBSUE7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==