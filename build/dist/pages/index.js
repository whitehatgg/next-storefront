'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../store/actions');

var _store = require('../store');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _HomePage = require('../components/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gonzalobenitez/Documents/storefront/next-storefront/pages/index.js?entry';


var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { title: 'Home Page', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_HomePage2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var store = _ref.store;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!store.getState().placeholderData) {
                  store.dispatch((0, _actions.loadData)());
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(_react2.default.Component);

exports.default = (0, _store.withReduxSaga)(Home);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibG9hZERhdGEiLCJ3aXRoUmVkdXhTYWdhIiwiTGF5b3V0IiwiSG9tZVBhZ2UiLCJIb21lIiwic3RvcmUiLCJnZXRTdGF0ZSIsInBsYWNlaG9sZGVyRGF0YSIsImRpc3BhdGNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQVMsQUFBZ0I7O0FBQ3pCLEFBQVMsQUFBcUI7O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7OzZCQU9NLEFBQ1I7NkJBQ0UsQUFBQyxrQ0FBTyxPQUFSLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISztBQUFBOzs7Ozs7WUFUeUIsQSxhQUFBLEE7Ozs7bUJBQzdCO29CQUFJLENBQUMsTUFBQSxBQUFNLFdBQVgsQUFBc0IsaUJBQWlCLEFBQ3JDO3dCQUFBLEFBQU0sU0FBTixBQUFlLEFBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUpjLGdCQUFNLEEsQUFnQnpCOztrQkFBZSwwQkFBZixBQUFlLEFBQWMiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2dvbnphbG9iZW5pdGV6L0RvY3VtZW50cy9zdG9yZWZyb250L25leHQtc3RvcmVmcm9udCJ9