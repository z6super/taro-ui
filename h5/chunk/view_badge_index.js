(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"14":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),r=_interopRequireDefault(a(2)),o=a(60),u=a(66),i=_interopRequireDefault(a(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(238);var c=function(e){function BadgePage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BadgePage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BadgePage.__proto__||Object.getPrototypeOf(BadgePage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BadgePage,l.default.Component),n(BadgePage,[{"key":"render","value":function render(){return r.default.createElement(o.View,{"className":"page"},r.default.createElement(i.default,{"title":"Badge 徽标"}),r.default.createElement(o.View,{"className":"doc-body"},r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"数字"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"badge-item"},r.default.createElement(o.View,{"className":"subitem"},r.default.createElement(u.AtBadge,{"value":"10","maxValue":99},r.default.createElement(u.AtButton,{"size":"small","circle":!0},"按钮"))),r.default.createElement(o.View,{"className":"subitem"},r.default.createElement(u.AtBadge,{"value":"100","maxValue":99},r.default.createElement(u.AtButton,{"size":"small"},"按钮")))))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"小红点"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"badge-item"},r.default.createElement(o.View,{"className":"subitem"},r.default.createElement(u.AtBadge,{"dot":!0},r.default.createElement(u.AtButton,{"size":"small","circle":!0},"按钮"))),r.default.createElement(o.View,{"className":"subitem"},r.default.createElement(u.AtBadge,{"dot":!0},r.default.createElement(u.AtButton,{"size":"small"},"按钮")))))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"文本"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"badge-item"},r.default.createElement(o.View,{"className":"subitem"},r.default.createElement(u.AtBadge,{"value":"NEW"},r.default.createElement(u.AtButton,{"size":"small","circle":!0},"按钮"))),r.default.createElement(o.View,{"className":"subitem"},r.default.createElement(u.AtBadge,{"value":"NEW"},r.default.createElement(u.AtButton,{"size":"small"},"按钮")))))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"省略号"),r.default.createElement(o.View,{"className":"panel__content"},r.default.createElement(o.View,{"className":"badge-item"},r.default.createElement(o.View,{"className":"subitem"},r.default.createElement(u.AtBadge,{"value":"···"},r.default.createElement(u.AtButton,{"size":"small","circle":!0},"按钮"))),r.default.createElement(o.View,{"className":"subitem"},r.default.createElement(u.AtBadge,{"value":"···"},r.default.createElement(u.AtButton,{"size":"small"},"按钮"))))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),BadgePage}();t.default=c},"238":function(e,t,a){},"62":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=a(1),r=(_interopRequireDefault(l),_interopRequireDefault(a(2))),o=_interopRequireDefault(a(61)),u=a(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(63);var i=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,l.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(u.View,{"className":"doc-header"},r.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=i,i.defaultProps={"title":"标题"},i.propTypes={"title":o.default.string}},"63":function(e,t,a){}}]);