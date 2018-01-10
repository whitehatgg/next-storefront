'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactRedux = require('react-redux');

var _actions = require('../store/actions');

var _ProductItem = require('./ProductItem');

var _ProductItem2 = _interopRequireDefault(_ProductItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gonzalobenitez/Documents/storefront/next-storefront/components/ProductList.js';


var ProductList = function (_Component) {
  (0, _inherits3.default)(ProductList, _Component);

  function ProductList() {
    (0, _classCallCheck3.default)(this, ProductList);

    return (0, _possibleConstructorReturn3.default)(this, (ProductList.__proto__ || (0, _getPrototypeOf2.default)(ProductList)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProductList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var products = this.props.products;

      return _react2.default.createElement('div', { className: 'product-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, products.map(function (product) {
        return _react2.default.createElement(_ProductItem2.default, { product: product, key: product.id, add: function add() {
            _this2.props.dispatch((0, _actions.addToCart)(product.id, 1));
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        });
      }));
    }
  }]);

  return ProductList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var products = _ref.products;
  return { products: products };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProductList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdExpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiYWRkVG9DYXJ0IiwiUHJvZHVjdEl0ZW0iLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwicHJvcHMiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJkaXNwYXRjaCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFTLEFBQWlCOztBQUMxQixBQUFPLEFBQWlCOzs7Ozs7Ozs7SUFFbEIsQTs7Ozs7Ozs7Ozs7NkJBQ007bUJBQUE7O1VBQUEsQUFDQSxXQUFhLEtBRGIsQUFDa0IsTUFEbEIsQUFDQSxBQUNSOzs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBRUM7QUFGRDtPQUFBLFdBRUMsQUFBUyxJQUFJLFVBQUEsQUFBRSxTQUFhLEFBQzFCOytCQUFPLEFBQUMsdUNBQVksU0FBYixBQUF1QixTQUFVLEtBQU0sUUFBdkMsQUFBK0MsSUFBSyxLQUFNLGVBQU0sQUFBRTttQkFBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLHdCQUFVLFFBQVYsQUFBa0IsSUFBdEMsQUFBb0IsQUFBc0IsQUFBSztBQUFqSDtzQkFBQTt3QkFBUCxBQUFPLEFBQ1I7QUFEUTtTQUFBO0FBSlosQUFDRSxBQUVDLEFBTUo7Ozs7O0FBWnVCLEE7O0FBZTFCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHNCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO1NBQWdCLEVBQUUsVUFBckIsQUFBbUI7QUFBM0MsQUFDQTtrQkFBZSx5QkFBQSxBQUFRLGlCQUF2QixBQUFlLEFBQXlCIiwiZmlsZSI6IlByb2R1Y3RMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nb256YWxvYmVuaXRlei9Eb2N1bWVudHMvc3RvcmVmcm9udC9uZXh0LXN0b3JlZnJvbnQifQ==