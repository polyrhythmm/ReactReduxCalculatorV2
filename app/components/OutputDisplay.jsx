var React = require('react');
var {connect} = require('react-redux');

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

module.exports = connect(
  (state) => {
    return {
      display : state.display
    }
  }
)(OutputDisplay);
