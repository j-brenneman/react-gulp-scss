var Child = require('./Child.js');

var Parent = React.createClass({
  render: function () {
    return (
      <div>
        <div> This is a parent. </div>
        <Child name="child"/>
      </div>
    )
  }
});


module.exports = Parent;
