var React = require('react');

var Button = React.createClass({

  getInitialState: function(){
    return {
      active: false,
      btnClassName: "button"
    }
  },


  handleClick: function(e) {


    var value = this.props.character.toString();

    this.state.active = !this.state.active;

    if(value.match(/[0-9]/))
    {
      this.props.onNumberChange(Number(value));
    } else {
      this.props.onOperatorChange(value, false);
    }
  },

  render: function() {
    var {character, operator} = this.props;
    var {active} = this.state;



    return (
        <button className="button" type="button" ref="btn" onClick={this.handleClick}><span className="button-text">{character}</span></button>
    )
  }
});

module.exports = Button;
