'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;
exports.withReduxSaga = withReduxSaga;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = require('next-redux-saga');

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _saga = require('./saga');

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var store = (0, _redux.createStore)(_reducer2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(sagaMiddleware)));

  store.sagaTask = sagaMiddleware.run(_saga2.default);
  return store;
}

function withReduxSaga(BaseComponent) {
  return (0, _nextReduxWrapper2.default)(configureStore)((0, _nextReduxSaga2.default)(BaseComponent));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsIndpdGhSZWR1eCIsIm5leHRSZWR1eFNhZ2EiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInJvb3RSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwicm9vdFNhZ2EiLCJzYWdhTWlkZGxld2FyZSIsImNvbmZpZ3VyZVN0b3JlIiwic3RvcmUiLCJzYWdhVGFzayIsInJ1biIsIndpdGhSZWR1eFNhZ2EiLCJCYXNlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztRQVdPLEFBQVM7UUFXVCxBQUFTOztBQXRCaEIsQUFBUyxBQUFhOztBQUN0QixBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU8sQUFBZSxBQUFvQjs7OztBQUMxQyxBQUFPLEFBQWM7Ozs7OztBQUVyQixJQUFNLGlCQUFOLEFBQXVCLEFBRXZCOztBQUFPLDBCQUFzRDtNQUE3QixBQUE2QixtRkFBZCxBQUFjLEFBQzNEOztNQUFNLFFBQVEsQUFDWiwyQ0FEWSxBQUVaLGNBQ0EsaURBQW9CLDRCQUh0QixBQUFjLEFBR1osQUFBb0IsQUFBZ0IsQUFHdEM7O1FBQUEsQUFBTSxXQUFXLGVBQWpCLEFBQWlCLEFBQWUsQUFBSSxBQUNwQztTQUFBLEFBQU8sQUFDUjtBQUVEOztBQUFPLHVCQUFBLEFBQXdCLGVBQWUsQUFDNUM7U0FBTyxnQ0FBQSxBQUFVLGdCQUFnQiw2QkFBakMsQUFBTyxBQUEwQixBQUFjLEFBQ2hEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nb256YWxvYmVuaXRlei9Eb2N1bWVudHMvc3RvcmVmcm9udC9uZXh0LXN0b3JlZnJvbnQifQ==