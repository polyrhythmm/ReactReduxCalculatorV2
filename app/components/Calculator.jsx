var React = require('react');
var Button = require('button');
var OutputDisplay = require('OutputDisplay');

var Calculator = React.createClass({

  getInitialState: function() {
   return {
     display: "0",
     currentValue:0,
     operatorMode: false
   };
 },

   buildNumber: function(value) {

     var newValue;

     if(this.state.currentValue === 0)
     {
       if(value !== 0)
       {
          newValue = value.toString().substring(0, value.length);
          this.state.currentValue = newValue.toString();
       }
     } else {
        newValue = value.toString();
        this.state.currentValue += newValue.toString();
     }

     this.changeState(this.state.currentValue)
   },

   buildOperator: function(value) {
     console.log(value);
     if(value === "+")
     {
       console.log("plus");
     }  else if(value === '-')
     {
       console.log('minus')
     } else if(value === '/')
     {
       console.log('divide')
     } else if(value === '*')
     {
       console.log('multiply')
     } else if(value === '=')
     {
       console.log('equals')
     }
   },
  changeState: function(value) {

    this.setState( {
      display : value,
    })

  },

  render: function() {
    return (
      <div className="main">
        <h1>Calculator</h1>
        <OutputDisplay display={this.state.display}/>
        <div>
          <Button character="1" onNumberChange={this.buildNumber}/>
          <Button character="2" onNumberChange={this.buildNumber}/>
          <Button character="3" onNumberChange={this.buildNumber}/>
        </div>
        <div>
          <Button character="4" onNumberChange={this.buildNumber}/>
          <Button character="5" onNumberChange={this.buildNumber}/>
          <Button character="6" onNumberChange={this.buildNumber}/>
        </div>
        <div>
          <Button character="7" onNumberChange={this.buildNumber}/>
          <Button character="8" onNumberChange={this.buildNumber}/>
          <Button character="9" onNumberChange={this.buildNumber}/>
        </div>
        <div>
          <Button character="0" onNumberChange={this.buildNumber}/>
          <Button character="*" onOperatorChange={this.buildOperator} operator={true}/>
          <Button character="/" onOperatorChange={this.buildOperator} operator={true}/>
          <Button character="+" onOperatorChange={this.buildOperator} operator={true}/>
          <Button character="-" onOperatorChange={this.buildOperator} operator={true}/>
          <Button character="=" onOperatorChange={this.buildOperator} operator={true}/>
        </div>


      </div>
    )
  }
});

module.exports = Calculator;
