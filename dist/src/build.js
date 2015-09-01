(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Jacob/workspace/gSchool/practice/react-intro/src/js/App.js":[function(require,module,exports){
var Parent = require('./Parent.js');

React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./Parent.js":"/Users/Jacob/workspace/gSchool/practice/react-intro/src/js/Parent.js"}],"/Users/Jacob/workspace/gSchool/practice/react-intro/src/js/Child.js":[function(require,module,exports){
var Child = React.createClass({displayName: "Child",
  render: function () {
    return (
      React.createElement("div", null, 
        "and this is the ", React.createElement("b", null, this.props.name)
      )
    )
  }
});

module.exports = Child;

},{}],"/Users/Jacob/workspace/gSchool/practice/react-intro/src/js/Parent.js":[function(require,module,exports){
var Child = require('./Child.js');

var Parent = React.createClass({displayName: "Parent",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("div", null, " This is a parent. "), 
        React.createElement(Child, {name: "child"})
      )
    )
  }
});


module.exports = Parent;

},{"./Child.js":"/Users/Jacob/workspace/gSchool/practice/react-intro/src/js/Child.js"}]},{},["/Users/Jacob/workspace/gSchool/practice/react-intro/src/js/App.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvSmFjb2Ivd29ya3NwYWNlL2dTY2hvb2wvcHJhY3RpY2UvcmVhY3QtaW50cm8vc3JjL2pzL0FwcC5qcyIsIi9Vc2Vycy9KYWNvYi93b3Jrc3BhY2UvZ1NjaG9vbC9wcmFjdGljZS9yZWFjdC1pbnRyby9zcmMvanMvQ2hpbGQuanMiLCIvVXNlcnMvSmFjb2Ivd29ya3NwYWNlL2dTY2hvb2wvcHJhY3RpY2UvcmVhY3QtaW50cm8vc3JjL2pzL1BhcmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxNQUFNLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztBQ0Z6RCxJQUFJLDJCQUEyQixxQkFBQTtFQUM3QixNQUFNLEVBQUUsWUFBWTtJQUNsQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7QUFBQSxRQUFBLGtCQUFBLEVBQ2Esb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQVMsQ0FBQTtNQUNwQyxDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOzs7QUNWdkIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUVsQyxJQUFJLDRCQUE0QixzQkFBQTtFQUM5QixNQUFNLEVBQUUsWUFBWTtJQUNsQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7UUFDSCxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBLHFCQUF5QixDQUFBLEVBQUE7UUFDOUIsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQTtNQUNqQixDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0g7O0FBRUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFBhcmVudCA9IHJlcXVpcmUoJy4vUGFyZW50LmpzJyk7XG5cblJlYWN0LnJlbmRlcig8UGFyZW50IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwidmFyIENoaWxkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgYW5kIHRoaXMgaXMgdGhlIDxiPnt0aGlzLnByb3BzLm5hbWV9PC9iPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZDtcbiIsInZhciBDaGlsZCA9IHJlcXVpcmUoJy4vQ2hpbGQuanMnKTtcblxudmFyIFBhcmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+IFRoaXMgaXMgYSBwYXJlbnQuIDwvZGl2PlxuICAgICAgICA8Q2hpbGQgbmFtZT1cImNoaWxkXCIvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmVudDtcbiJdfQ==
