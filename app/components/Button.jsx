var React = require('react');

var Button = React.createClass({

  getInitialState: function(){
    return {
      active: false
    }
  },


  handleClick: function(e) {
    var value = this.refs.btn.innerHTML;

    this.state.active = !this.state.active;

    if(value.match(/[0-9]/))
    {
      this.props.onNumberChange(Number(value));
    } else {
      this.props.onOperatorChange(value);
    }



  },

  render: function() {
    var {character, operator} = this.props;
    var {active} = this.state;


    var returnButton = () => {

            if(operator)
            {
              console.log("operator");
              return <button type="button" ref="btn" className="button success" onClick={this.handleClick}>{character}</button>
            } else {
              return <button type="button" ref="btn" className="button" onClick={this.handleClick}>{character}</button>
            }


    }
    return (
        returnButton()
    )
  }
});

module.exports = Button;
