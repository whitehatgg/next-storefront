'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

require('isomorphic-unfetch');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(loadDataSaga),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

_es6Promise2.default.polyfill();

function loadDataSaga() {
  var res, data;
  return _regenerator2.default.wrap(function loadDataSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('http://localhost:3000/static/products.json');

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          data = _context.sent;
          _context.next = 9;
          return (0, _effects.put)((0, _actions.loadDataSuccess)(data));

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context['catch'](0);
          _context.next = 15;
          return (0, _effects.put)((0, _actions.failure)(_context.t0));

        case 15:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 11]]);
}

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.all)([(0, _effects.takeLatest)(_actions.actionTypes.LOAD_DATA, loadDataSaga)]);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

exports.default = rootSaga;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL3NhZ2EuanMiXSwibmFtZXMiOlsibG9hZERhdGFTYWdhIiwicm9vdFNhZ2EiLCJkZWxheSIsImFsbCIsImNhbGwiLCJwdXQiLCJ0YWtlIiwidGFrZUxhdGVzdCIsImVzNnByb21pc2UiLCJhY3Rpb25UeXBlcyIsImZhaWx1cmUiLCJsb2FkRGF0YVN1Y2Nlc3MiLCJwb2x5ZmlsbCIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJMT0FEX0RBVEEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFROztBQUNSLEFBQVEsQUFBSyxBQUFNLEFBQUssQUFBTTs7QUFDOUIsQUFBTzs7OztBQUNQOztBQUVBLEFBQVEsQUFBYSxBQUFTLEFBQXVCOzs7O3NEQUkxQyxBO3VEQVVBLEE7O0FBWlgscUJBQUEsQUFBVzs7QUFFWCxTQUFBLEFBQVcsZUFBWDtXQUFBO3FFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTswQkFBQTtpQkFFc0IsTUFGdEIsQUFFc0IsQUFBTTs7YUFBbEI7QUFGVix5QkFBQTswQkFBQTtpQkFHdUIsSUFIdkIsQUFHdUIsQUFBSTs7YUFBakI7QUFIViwwQkFBQTswQkFBQTtpQkFJVSxrQkFBSSw4QkFKZCxBQUlVLEFBQUksQUFBZ0I7O2FBSjlCOzBCQUFBO0FBQUE7O2FBQUE7MEJBQUE7MENBQUE7MEJBQUE7aUJBTVUsa0JBQUksK0JBTmQsQUFNVTs7YUFOVjthQUFBOzBCQUFBOztBQUFBO3lCQUFBOzs7QUFVQSxTQUFBLEFBQVcsV0FBWDtrRUFBQTtjQUFBO3lDQUFBO2FBQUE7MkJBQUE7aUJBQ1Esa0JBQUksQ0FDUix5QkFBVyxxQkFBWCxBQUF1QixXQUYzQixBQUNRLEFBQUksQUFDUixBQUFrQzs7YUFGdEM7YUFBQTsyQkFBQTs7QUFBQTtlQUFBO0FBTUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2FnYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ29uemFsb2Jlbml0ZXovRG9jdW1lbnRzL3N0b3JlZnJvbnQvbmV4dC1zdG9yZWZyb250In0=