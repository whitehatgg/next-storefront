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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _index = require('next/dist/lib/router/index.js');

var _actions = require('../store/actions');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _CartMenuItem = require('./CartMenuItem');

var _CartMenuItem2 = _interopRequireDefault(_CartMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gonzalobenitez/Documents/storefront/next-storefront/components/CartMenu.js';


var ProductList = function (_Component) {
  (0, _inherits3.default)(ProductList, _Component);

  function ProductList() {
    (0, _classCallCheck3.default)(this, ProductList);

    return (0, _possibleConstructorReturn3.default)(this, (ProductList.__proto__ || (0, _getPrototypeOf2.default)(ProductList)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProductList, [{
    key: 'getProductById',
    value: function getProductById(productId) {
      var newProductId = parseInt(productId, 10);
      return this.props.products.find(function (product) {
        return product.id === newProductId;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          showModal = _props.showModal,
          cartCount = _props.cartCount,
          cartSubTotal = _props.cartSubTotal,
          cart = _props.cart,
          router = _props.router;

      return _react2.default.createElement('div', {
        onBlur: function onBlur() {
          return _this2.props.dispatch((0, _actions.setShowModal)(false));
        },
        tabIndex: '0',
        className: 'jsx-996526401' + ' ' + 'cart-menu',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('a', {
        onClick: function onClick() {
          return _this2.props.dispatch((0, _actions.setShowModal)(!showModal));
        },
        className: 'jsx-996526401',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('span', {
        className: 'jsx-996526401',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'My Cart'), ' (', _react2.default.createElement('span', {
        className: 'jsx-996526401' + ' ' + ((cart.length ? 'light' : '') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, cartCount), ') ', _react2.default.createElement('span', {
        className: 'jsx-996526401',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, '\u25BC')), _react2.default.createElement('div', {
        className: 'jsx-996526401' + ' ' + ((!showModal ? 'hidden' : 'cart-dropdown') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('table', {
        className: 'jsx-996526401',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('tbody', {
        className: 'jsx-996526401',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, cart.map(function (cartProduct) {
        return _react2.default.createElement(_CartMenuItem2.default, {
          product: _this2.getProductById(cartProduct.id),
          quantity: cartProduct.quantity,
          key: cartProduct.id,
          remove: function remove() {
            return _this2.props.dispatch((0, _actions.removeFromCart)(cartProduct.id, 1));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        });
      })), _react2.default.createElement('tfoot', {
        className: 'jsx-996526401',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('tr', {
        className: 'jsx-996526401',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('td', {
        className: 'jsx-996526401',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Subtotal'), _react2.default.createElement('td', {
        className: 'jsx-996526401',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, '\xA0'), _react2.default.createElement('td', {
        className: 'jsx-996526401',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_reactIntl.FormattedNumber, { value: cartSubTotal, style: 'currency', currency: 'USD', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }))))), _react2.default.createElement('a', { onClick: function onClick(e) {
          router.push('/cart');
          _this2.props.dispatch((0, _actions.setShowModal)(false));
        }, className: 'jsx-996526401' + ' ' + 'button white push-left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'View Cart'), _react2.default.createElement('button', {
        className: 'jsx-996526401' + ' ' + 'push-right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Checkout')), _react2.default.createElement(_style2.default, {
        styleId: '996526401',
        css: '.cart-menu.jsx-996526401{padding:15px 30px;display:inline-block;float:right;position:relative}.cart-menu.jsx-996526401 span.light.jsx-996526401{color:#e74c3c}.cart-menu.jsx-996526401 .cart-dropdown.jsx-996526401{position:absolute;right:0;background-color:#ffffff;padding:20px;width:400px}.cart-menu.jsx-996526401 .cart-dropdown.jsx-996526401 table.jsx-996526401{width:100%}.cart-menu.jsx-996526401 .cart-dropdown.jsx-996526401 table.jsx-996526401 td.jsx-996526401:last-child{text-align:right}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FydE1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURvQixBQUcrQixBQU9KLEFBSUksQUFRUCxBQUlNLFdBSG5CLEdBWkEsR0FnQkEsQ0F2QnVCLEFBV2IsUUFDaUIsYUFYYixZQUNNLEFBV0wsYUFDRCxLQVhkLE9BWUEiLCJmaWxlIjoiY29tcG9uZW50cy9DYXJ0TWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ29uemFsb2Jlbml0ZXovRG9jdW1lbnRzL3N0b3JlZnJvbnQvbmV4dC1zdG9yZWZyb250Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgRm9ybWF0dGVkTnVtYmVyIH0gZnJvbSAncmVhY3QtaW50bCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHNldFNob3dNb2RhbCwgcmVtb3ZlRnJvbUNhcnQgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IENhcnRNZW51SXRlbSBmcm9tICcuL0NhcnRNZW51SXRlbSdcblxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGdldFByb2R1Y3RCeUlkIChwcm9kdWN0SWQpIHtcbiAgICBjb25zdCBuZXdQcm9kdWN0SWQgPSBwYXJzZUludChwcm9kdWN0SWQsIDEwKVxuICAgIHJldHVybiB0aGlzLnByb3BzLnByb2R1Y3RzLmZpbmQocHJvZHVjdCA9PiBwcm9kdWN0LmlkID09PSBuZXdQcm9kdWN0SWQpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgc2hvd01vZGFsLCBjYXJ0Q291bnQsIGNhcnRTdWJUb3RhbCwgY2FydCwgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1tZW51XCJcbiAgICAgICAgb25CbHVyPXsgKCkgPT4gdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRTaG93TW9kYWwoZmFsc2UpKSB9XG4gICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICA+XG4gICAgICAgIDxhIFxuICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLnByb3BzLmRpc3BhdGNoKHNldFNob3dNb2RhbCghc2hvd01vZGFsKSkgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4+TXkgQ2FydDwvc3Bhbj4gKDxzcGFuIGNsYXNzTmFtZT17IGNhcnQubGVuZ3RoID8gJ2xpZ2h0JyA6ICcnIH0+eyBjYXJ0Q291bnQgfTwvc3Bhbj4pIDxzcGFuPuKWvDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT17ICFzaG93TW9kYWwgPyAnaGlkZGVuJyA6ICdjYXJ0LWRyb3Bkb3duJyB9XG4gICAgICAgID5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNhcnQubWFwKCggY2FydFByb2R1Y3QgKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJ0TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9eyB0aGlzLmdldFByb2R1Y3RCeUlkKGNhcnRQcm9kdWN0LmlkKSB9XG4gICAgICAgICAgICAgICAgICBxdWFudGl0eT17IGNhcnRQcm9kdWN0LnF1YW50aXR5IH1cbiAgICAgICAgICAgICAgICAgIGtleT17IGNhcnRQcm9kdWN0LmlkIH1cbiAgICAgICAgICAgICAgICAgIHJlbW92ZT17KCkgPT4gdGhpcy5wcm9wcy5kaXNwYXRjaChyZW1vdmVGcm9tQ2FydChjYXJ0UHJvZHVjdC5pZCwgMSkpIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDx0Zm9vdD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5TdWJ0b3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxGb3JtYXR0ZWROdW1iZXIgdmFsdWU9eyBjYXJ0U3ViVG90YWwgfSBzdHlsZT1cImN1cnJlbmN5XCIgY3VycmVuY3k9eyAnVVNEJyB9IC8+PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8YSBvbkNsaWNrPXsgKGUpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvY2FydCcpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldFNob3dNb2RhbChmYWxzZSkpXG4gICAgICAgICAgfSB9IGNsYXNzTmFtZT1cImJ1dHRvbiB3aGl0ZSBwdXNoLWxlZnRcIj5WaWV3IENhcnQ8L2E+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwdXNoLXJpZ2h0XCIgPkNoZWNrb3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNhcnQtbWVudSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcnQtbWVudSBzcGFuLmxpZ2h0IHtcbiAgICAgICAgICAgIGNvbG9yOiAjZTc0YzNjO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJ0LW1lbnUgLmNhcnQtZHJvcGRvd24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FydC1tZW51IC5jYXJ0LWRyb3Bkb3duIHRhYmxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJ0LW1lbnUgLmNhcnQtZHJvcGRvd24gdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzaG93TW9kYWwsIGNhcnRDb3VudCwgY2FydFN1YlRvdGFsLCBjYXJ0LCBwcm9kdWN0cyB9KSA9PiAoeyBzaG93TW9kYWwsIGNhcnRDb3VudCwgY2FydFN1YlRvdGFsLCBjYXJ0LCBwcm9kdWN0cyB9KVxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvZHVjdExpc3QpKSJdfQ== */\n/*@ sourceURL=components/CartMenu.js */'
      }));
    }
  }]);

  return ProductList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var showModal = _ref.showModal,
      cartCount = _ref.cartCount,
      cartSubTotal = _ref.cartSubTotal,
      cart = _ref.cart,
      products = _ref.products;
  return { showModal: showModal, cartCount: cartCount, cartSubTotal: cartSubTotal, cart: cart, products: products };
};
exports.default = (0, _index.withRouter)((0, _reactRedux.connect)(mapStateToProps)(ProductList));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FydE1lbnUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiRm9ybWF0dGVkTnVtYmVyIiwid2l0aFJvdXRlciIsInNldFNob3dNb2RhbCIsInJlbW92ZUZyb21DYXJ0IiwiTGluayIsIkNhcnRNZW51SXRlbSIsIlByb2R1Y3RMaXN0IiwicHJvZHVjdElkIiwibmV3UHJvZHVjdElkIiwicGFyc2VJbnQiLCJwcm9wcyIsInByb2R1Y3RzIiwiZmluZCIsInByb2R1Y3QiLCJpZCIsInNob3dNb2RhbCIsImNhcnRDb3VudCIsImNhcnRTdWJUb3RhbCIsImNhcnQiLCJyb3V0ZXIiLCJkaXNwYXRjaCIsImxlbmd0aCIsIm1hcCIsImNhcnRQcm9kdWN0IiwiZ2V0UHJvZHVjdEJ5SWQiLCJxdWFudGl0eSIsImUiLCJwdXNoIiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUyxBQUFjLEFBQXNCOztBQUM3QyxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFrQjs7Ozs7Ozs7O0ksQUFFbkI7Ozs7Ozs7Ozs7O21DLEFBRVksV0FBVyxBQUN6QjtVQUFNLGVBQWUsU0FBQSxBQUFTLFdBQTlCLEFBQXFCLEFBQW9CLEFBQ3pDO2tCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsS0FBSyxtQkFBQTtlQUFXLFFBQUEsQUFBUSxPQUFuQixBQUEwQjtBQUExRCxBQUFPLEFBQ1IsT0FEUTs7Ozs2QkFHQzttQkFBQTs7bUJBQ3FELEtBRHJELEFBQzBEO1VBRDFELEFBQ0EsbUJBREEsQUFDQTtVQURBLEFBQ1csbUJBRFgsQUFDVztVQURYLEFBQ3NCLHNCQUR0QixBQUNzQjtVQUR0QixBQUNvQyxjQURwQyxBQUNvQztVQURwQyxBQUMwQyxnQkFEMUMsQUFDMEMsQUFD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