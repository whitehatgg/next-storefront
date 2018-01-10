'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gonzalobenitez/Documents/storefront/next-storefront/components/CartMenuItem.js';

exports.default = function (_ref) {
	var product = _ref.product,
	    quantity = _ref.quantity,
	    remove = _ref.remove;

	return _react2.default.createElement('tr', {
		className: 'jsx-717847010' + ' ' + 'cart-menu-item',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('td', {
		className: 'jsx-717847010',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement('img', { src: '/static/' + product.image, className: 'jsx-717847010',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	})), _react2.default.createElement('td', {
		className: 'jsx-717847010' + ' ' + 'cart-menu-description',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-717847010',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, product.brand), _react2.default.createElement('div', {
		className: 'jsx-717847010',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, product.title + ' x ' + quantity), _react2.default.createElement('span', {
		className: 'jsx-717847010' + ' ' + 'price',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement(_reactIntl.FormattedNumber, { value: product.price * quantity, style: 'currency', currency: 'USD', __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}))), _react2.default.createElement('td', {
		className: 'jsx-717847010',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement('a', { onClick: remove, className: 'jsx-717847010',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, 'X')), _react2.default.createElement(_style2.default, {
		styleId: '717847010',
		css: '.cart-menu-item.jsx-717847010{width:100%}.cart-menu-item.jsx-717847010 img.jsx-717847010{width:80px;height:80px}.cart-menu-item.jsx-717847010 td.jsx-717847010:last-child{text-align:right}.cart-menu-description.jsx-717847010{padding:0 40px 0 10px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FydE1lbnVJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCYyxBQUdnQixBQUlBLEFBS2EsQUFJSSxXQVo3QixBQUlhLE1BS1AsS0FJQSxDQVJOIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2FydE1lbnVJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nb256YWxvYmVuaXRlei9Eb2N1bWVudHMvc3RvcmVmcm9udC9uZXh0LXN0b3JlZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtYXR0ZWROdW1iZXIgfSBmcm9tICdyZWFjdC1pbnRsJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBwcm9kdWN0LCBxdWFudGl0eSwgcmVtb3ZlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgXHQ8dHIgY2xhc3NOYW1lPVwiY2FydC1tZW51LWl0ZW1cIiA+XG4gIFx0XHQ8dGQ+XG5cdFx0XHQ8aW1nIHNyYz17IGAvc3RhdGljLyR7IHByb2R1Y3QuaW1hZ2UgfWAgfSAvPlxuXHQgICAgPC90ZD5cblx0ICAgIDx0ZCBjbGFzc05hbWU9XCJjYXJ0LW1lbnUtZGVzY3JpcHRpb25cIj5cblx0ICAgIFx0PGRpdj57IHByb2R1Y3QuYnJhbmQgfTwvZGl2PlxuXHQgICAgXHQ8ZGl2PnsgYCR7IHByb2R1Y3QudGl0bGUgfSB4ICR7IHF1YW50aXR5IH1gIH08L2Rpdj5cblx0ICAgIFx0PHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj48Rm9ybWF0dGVkTnVtYmVyIHZhbHVlPXsgcHJvZHVjdC5wcmljZSAqIHF1YW50aXR5IH0gc3R5bGU9XCJjdXJyZW5jeVwiIGN1cnJlbmN5PXsgJ1VTRCcgfSAvPjwvc3Bhbj5cblx0ICAgIDwvdGQ+XG5cdCAgICA8dGQ+XG5cdCAgICBcdDxhIG9uQ2xpY2s9eyByZW1vdmUgfT5YPC9hPlxuXHRcdDwvdGQ+XG5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHQuY2FydC1tZW51LWl0ZW0ge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblxuXHRcdFx0LmNhcnQtbWVudS1pdGVtIGltZyB7XG5cdFx0XHRcdHdpZHRoOiA4MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0XHR9XG5cdFx0XHRcblx0ICAgICAgICAuY2FydC1tZW51LWl0ZW0gdGQ6bGFzdC1jaGlsZCB7XG5cdCAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAuY2FydC1tZW51LWRlc2NyaXB0aW9uIHtcblx0ICAgICAgICBcdHBhZGRpbmc6IDAgNDBweCAwIDEwcHg7XG5cdCAgICAgICAgfVxuXHRcdGB9PC9zdHlsZT5cbiAgICA8L3RyPlxuICApXG59Il19 */\n/*@ sourceURL=components/CartMenuItem.js */'
	}));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FydE1lbnVJdGVtLmpzIl0sIm5hbWVzIjpbIkZvcm1hdHRlZE51bWJlciIsIkxpbmsiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJyZW1vdmUiLCJpbWFnZSIsImJyYW5kIiwidGl0bGUiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQU8sQUFFUDs7Ozs7Ozs7a0JBQWUsZ0JBQW1DO0tBQWhDLEFBQWdDLGVBQWhDLEFBQWdDO0tBQXZCLEFBQXVCLGdCQUF2QixBQUF1QjtLQUFiLEFBQWEsY0FBYixBQUFhLEFBQ2hEOzt3QkFDQyxjQUFBO3FDQUFBLEFBQWM7O2FBQWQ7ZUFBQSxBQUNDO0FBREQ7QUFBQSxFQUFBLGtCQUNDLGNBQUE7YUFBQTs7YUFBQTtlQUFBLEFBQ0Q7QUFEQztBQUFBLDJDQUNJLGtCQUFrQixRQUF2QixBQUErQixrQkFBL0I7O2FBQUE7ZUFGQSxBQUNDLEFBQ0QsQUFFRTtBQUZGO3NCQUVFLGNBQUE7cUNBQUEsQUFBYzs7YUFBZDtlQUFBLEFBQ0M7QUFERDtBQUFBLG9CQUNDLGNBQUE7YUFBQTs7YUFBQTtlQUFBLEFBQU87QUFBUDtBQUFBLFlBREQsQUFDQyxBQUFlLEFBQ2Ysd0JBQUEsY0FBQTthQUFBOzthQUFBO2VBQUEsQUFBVztBQUFYO0FBQUEsWUFBQSxBQUFtQixnQkFGcEIsQUFFQyxBQUFnQyxBQUNoQywyQkFBQSxjQUFBO3FDQUFBLEFBQWdCOzthQUFoQjtlQUFBLEFBQXdCO0FBQXhCO0FBQUEsb0JBQXdCLEFBQUMsNENBQWdCLE9BQVEsUUFBQSxBQUFRLFFBQWpDLEFBQXlDLFVBQVcsT0FBcEQsQUFBMEQsWUFBVyxVQUFyRSxBQUFnRjthQUFoRjtlQVAzQixBQUlFLEFBR0MsQUFBd0IsQUFFekI7QUFGeUI7dUJBRXpCLGNBQUE7YUFBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLG9CQUNDLGNBQUEsT0FBRyxTQUFILEFBQWEsbUJBQWI7O2FBQUE7ZUFBQTtBQUFBO0lBVkgsQUFTRSxBQUNDO1dBVkg7T0FERCxBQUNDLEFBaUNGO0FBakNFO0FBRkgiLCJmaWxlIjoiQ2FydE1lbnVJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nb256YWxvYmVuaXRlei9Eb2N1bWVudHMvc3RvcmVmcm9udC9uZXh0LXN0b3JlZnJvbnQifQ==