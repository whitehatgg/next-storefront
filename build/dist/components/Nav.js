'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _CartMenu = require('./CartMenu');

var _CartMenu2 = _interopRequireDefault(_CartMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gonzalobenitez/Documents/storefront/next-storefront/components/Nav.js';

exports.default = function (_ref) {
	var store = _ref.store;

	return _react2.default.createElement('div', {
		className: 'jsx-3560967205' + ' ' + 'nav',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement('h1', {
		className: 'jsx-3560967205' + ' ' + 'col col-3',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('a', {
		className: 'jsx-3560967205',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement('img', { src: '/static/logo.png', className: 'jsx-3560967205',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	})))), _react2.default.createElement('nav', {
		className: 'jsx-3560967205' + ' ' + 'col col-6',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('ul', {
		className: 'jsx-3560967205',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('li', {
		className: 'jsx-3560967205',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement('a', { href: '/', className: 'jsx-3560967205',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'Home'))), _react2.default.createElement('li', {
		className: 'jsx-3560967205',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement(_link2.default, { prefetch: true, href: '/cart', __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement('a', { href: '/cart', className: 'jsx-3560967205',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, 'Cart'))))), _react2.default.createElement('div', {
		className: 'jsx-3560967205' + ' ' + 'col col-3',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement(_CartMenu2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	})), _react2.default.createElement(_style2.default, {
		styleId: '3560967205',
		css: '.nav.jsx-3560967205{position:fixed;z-index:1000;font-family:Arial,"Helvetica Neue",Helvetica,sans-serif;background:#ffffff;display:block;width:100%;border-bottom:2px solid #f2f2f2;text-transform:uppercase;font-weight:bold;font-size:0.8em}.nav.jsx-3560967205 h1.jsx-3560967205{display:inline-block}.nav.jsx-3560967205 nav.jsx-3560967205{display:inline-block;display:inline-block;vertical-align:middle;float:none;text-align:center}.nav.jsx-3560967205 nav.jsx-3560967205 ul.jsx-3560967205{padding-left:0;margin-bottom:0;list-style:none;display:inline-block}.nav.jsx-3560967205 nav.jsx-3560967205 ul.jsx-3560967205 li.jsx-3560967205{float:left;margin-right:30px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCZSxBQUdzQixBQWFNLEFBSUEsQUFRTixBQU9KLFdBQ08sSUFoQ0wsQUF5QkcsTUFabEIsQUFJdUIsT0FoQnNDLENBZ0M3RCxFQVBrQixXQVJNLEtBU0QsaUJBUlYsSUFTYixPQVJvQixTQWxCSSxTQW1CeEIsVUFsQmdCLGNBQ0gsV0FDcUIsZ0NBQ1AseUJBQ1IsaUJBQ0QsZ0JBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nb256YWxvYmVuaXRlei9Eb2N1bWVudHMvc3RvcmVmcm9udC9uZXh0LXN0b3JlZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBDYXJ0TWVudSBmcm9tICcuL0NhcnRNZW51J1xuXG5leHBvcnQgZGVmYXVsdCAoeyBzdG9yZSB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJjb2wgY29sLTNcIj5cblx0XHRcdCAgPExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdCAgICA8YT48aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIi8+PC9hPlxuXHRcdFx0ICA8L0xpbms+XG5cdFx0XHQ8L2gxPlxuXHRcdFx0PG5hdiBjbGFzc05hbWU9XCJjb2wgY29sLTZcIj5cblx0XHRcdCAgPHVsPlxuXHRcdFx0ICAgIDxsaT48TGluayBwcmVmZXRjaCBocmVmPVwiL1wiPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L0xpbms+PC9saT5cblx0XHRcdCAgICA8bGk+PExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9jYXJ0XCI+PGEgaHJlZj1cIi9jYXJ0XCI+Q2FydDwvYT48L0xpbms+PC9saT5cblx0XHRcdCAgPC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLTNcIj5cblx0XHRcdCAgPENhcnRNZW51IC8+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQubmF2IHtcblx0XHRcdFx0ICBwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdCAgei1pbmRleDogMTAwMDtcblx0XHRcdFx0ICBmb250LWZhbWlseTogQXJpYWwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXHRcdFx0ICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcblx0XHRcdFx0ICBkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0ICB3aWR0aDogMTAwJTtcblx0XHRcdFx0ICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YyZjJmMjtcblx0XHRcdFx0ICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHQgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHQgIGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubmF2IGgxIHtcblx0XHRcdFx0ICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubmF2IG5hdiB7XG5cdFx0XHRcdCAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHQgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0ICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0XHQgIGZsb2F0OiBub25lO1xuXHRcdFx0XHQgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5uYXYgbmF2IHVsIHtcblx0XHRcdFx0ICBwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHRcdCAgbWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdFx0ICBsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHQgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5uYXYgbmF2IHVsIGxpIHtcblx0XHRcdFx0ICBmbG9hdDogbGVmdDtcblx0XHRcdFx0ICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG5cdFx0XHRcdH1cblx0ICAgICAgXHRgfTwvc3R5bGU+XG5cdFx0PC9kaXY+XG5cdClcbn1cbiJdfQ== */\n/*@ sourceURL=components/Nav.js */'
	}));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbImluamVjdCIsIm9ic2VydmVyIiwiTGluayIsIkNhcnRNZW51Iiwic3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFROztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjLEFBRXJCOzs7Ozs7OztrQkFBZSxnQkFBZTtLQUFaLEFBQVksYUFBWixBQUFZLEFBQzdCOzt3QkFDQyxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNDO0FBREQ7QUFBQSxFQUFBLGtCQUNDLGNBQUE7c0NBQUEsQUFBYzs7YUFBZDtlQUFBLEFBQ0U7QUFERjtBQUFBLG9CQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO2FBQVg7ZUFBQSxBQUNFO0FBREY7b0JBQ0UsY0FBQTthQUFBOzthQUFBO2VBQUEsQUFBRztBQUFIO0FBQUEsMkNBQVEsS0FBTCxBQUFTLCtCQUFUOzthQUFBO2VBSFIsQUFDQyxBQUNFLEFBQ0UsQUFBRyxBQUdQO0FBSE87d0JBR1AsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFDRTtBQURGO0FBQUEsb0JBQ0UsY0FBQTthQUFBOzthQUFBO2VBQUEsQUFDRTtBQURGO0FBQUEsb0JBQ0UsY0FBQTthQUFBOzthQUFBO2VBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjthQUFwQjtlQUFBLEFBQXdCO0FBQXhCO29CQUF3QixjQUFBLE9BQUcsTUFBSCxBQUFRLGdCQUFSOzthQUFBO2VBQUE7QUFBQTtJQUQ5QixBQUNFLEFBQUksQUFBd0IsQUFDNUIsMkJBQUEsY0FBQTthQUFBOzthQUFBO2VBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjthQUFwQjtlQUFBLEFBQTRCO0FBQTVCO29CQUE0QixjQUFBLE9BQUcsTUFBSCxBQUFRLG9CQUFSOzthQUFBO2VBQUE7QUFBQTtJQVRyQyxBQU1DLEFBQ0UsQUFFRSxBQUFJLEFBQTRCLEFBR3BDLDZCQUFBLGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBLEFBQ0U7QUFERjtBQUFBLG9CQUNFLEFBQUM7O2FBQUQ7ZUFiSCxBQVlDLEFBQ0U7QUFBQTtBQUFBO1dBYkg7T0FERCxBQUNDLEFBd0REO0FBeERDO0FBRkYiLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nb256YWxvYmVuaXRlei9Eb2N1bWVudHMvc3RvcmVmcm9udC9uZXh0LXN0b3JlZnJvbnQifQ==