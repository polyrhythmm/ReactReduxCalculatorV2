var React = require('react');

var OutputDisplay = React.createClass({
 
  render: function() {
    var {display} = this.props;

    return (
      <div>
        {display}
      </div>
    )
  }
});

module.exports = OutputDisplay;
