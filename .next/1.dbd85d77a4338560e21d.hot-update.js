webpackHotUpdate(1,{

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(216);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(215);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _stringify = __webpack_require__(228);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _getPrototypeOf = __webpack_require__(69);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(73);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(74);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(76);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(75);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(52);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _nodeFetch = __webpack_require__(195);
	
	var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_React$Component) {
	  (0, _inherits3.default)(_class, _React$Component);
	
	  function _class() {
	    (0, _classCallCheck3.default)(this, _class);
	    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'pre',
	        null,
	        (0, _stringify2.default)(this.props.data)
	      );
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function () {
	      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        var res, json;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return (0, _nodeFetch2.default)('http://api.football-data.org/v1/competitions/426/leagueTable');
	
	              case 2:
	                res = _context.sent;
	                _context.next = 5;
	                return res.json();
	
	              case 5:
	                json = _context.sent;
	                return _context.abrupt('return', { data: json });
	
	              case 7:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      function getInitialProps() {
	        return _ref.apply(this, arguments);
	      }
	
	      return getInitialProps;
	    }()
	  }]);
	  return _class;
	}(_react2.default.Component);
	
	exports.default = _class;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanMiXSwibmFtZXMiOlsicHJvcHMiLCJkYXRhIiwicmVzIiwianNvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzZCQVNXO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBTSxpQ0FBZSxLQUFLQSxLQUFMLENBQVdDLElBQTFCO0FBQU4sT0FERjtBQUdEOzs7Ozs7Ozs7Ozt1QkFUbUIseUJBQU0sOERBQU4sQzs7O0FBQVpDLG1COzt1QkFDYUEsSUFBSUMsSUFBSixFOzs7QUFBYkEsb0I7aURBQ0MsRUFBQ0YsTUFBTUUsSUFBUCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFKa0IsZ0JBQU1DLFMiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvU3dhbm4vd29ya3NwYWNlL25leHRqc190ZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjEvY29tcGV0aXRpb25zLzQyNi9sZWFndWVUYWJsZScpXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4ge2RhdGE6IGpzb259XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSl9PC9wcmU+XG4gICAgKVxuICB9XG59XG4iXX0=
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/user"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/user") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(229), __esModule: true };

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(1)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyLmpzPzc4NWY3YjciLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanM/NDU3NCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcz82NzA4Il0sIm5hbWVzIjpbInByb3BzIiwiZGF0YSIsInJlcyIsImpzb24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzhCQVNXO0FBQ1AsY0FDRTtBQUFBO0FBQUE7QUFBTSxrQ0FBZSxLQUFLQSxLQUFMLENBQVdDLElBQTFCO0FBQU4sUUFERjtBQUdEOzs7Ozs7Ozs7Ozt3QkFUbUIseUJBQU0sOERBQU4sQzs7O0FBQVpDLG9COzt3QkFDYUEsSUFBSUMsSUFBSixFOzs7QUFBYkEscUI7a0RBQ0MsRUFBQ0YsTUFBTUUsSUFBUCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FKa0IsZ0JBQU1DLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbkMsbUJBQWtCLHlEOzs7Ozs7O0FDQWxCO0FBQ0Esd0NBQXVDLDBCQUEwQjtBQUNqRSx5Q0FBd0M7QUFDeEM7QUFDQSxHIiwiZmlsZSI6IjEuZGJkODVkNzdhNDMzODU2MGUyMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL2NvbXBldGl0aW9ucy80MjYvbGVhZ3VlVGFibGUnKVxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHtkYXRhOiBqc29ufVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmRhdGEpfTwvcHJlPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdXNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDIyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==