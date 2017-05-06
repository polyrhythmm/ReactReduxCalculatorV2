var React = require('react');

var OutputDisplay = React.createClass({

  render: function() {
    var {display} = this.props;

    return (
      <div className="display-output">
        <h3 className="output-text">{display}</h3>
      </div>
    )
  }
});

module.exports = OutputDisplay;
