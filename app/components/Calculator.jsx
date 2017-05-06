var React = require('react');
var Button = require('button');
var OutputDisplay = require('OutputDisplay');

var Calculator = React.createClass({

  getInitialState: function() {
   return {
     display: "0",
     currentValue:0,
     newValue:0,
     operatorMode: false,
     operator: undefined
   };
 },

   buildNumber: function(value) {


     console.log(value, " build number")
     if(this.state.operatorMode === false)
     {
       console.log("catch 1");
       if(this.state.currentValue === 0)
       {
                console.log("catch 2");
               if(value === ".")
               {
                      console.log("catch 3");
                       if(this.state.currentValue.toString().indexOf(".") === -1)
                       {
                         console.log("catch 4");
                         this.state.currentValue = "0" + value;
                       }

               } else if(value !== 0)
               {
                  console.log("catch 5");
                  this.state.currentValue = value.toString().substring(0, value.length).toString();
               }
       } else {
          console.log("catch 6");
          if(value === "."){
            if(this.state.currentValue.toString().indexOf(".") === -1)
            {
              console.log("catch 7");
                this.state.currentValue += value.toString();
            }
          } else {
            console.log("catch 8", this.state.currentValue);
            if(this.state.currentValue === 0)
            {

              this.state.currentValue += Number(value).toString();

            }
          }
       }

     this.changeState(this.state.currentValue)
   } else {


        console.log("catch 9");
         if(this.state.newValue === 0)
         {
           console.log("catch 10");
           if(value === ".")
           {
             console.log("catch 11");
             if(this.state.newValue.toString().indexOf(".") === -1)
             {
              console.log("catch 12");
               this.state.newValue = "0" + value;
             }
           } else if(value !== 0)
           {
             console.log("catch 13");
              this.state.newValue = value.toString().substring(0, value.length).toString();
           }
       } else {
         console.log("catch 14");

          if(value === "."){
            console.log("catch 15");
            if(this.state.newValue.toString().indexOf(".") === -1)
            {
                console.log("catch 16");
                this.state.newValue += value.toString();
            }
          } else {
              console.log("catch 17")
              this.state.newValue += Number(value).toString();
          }
       }
       this.changeState(this.state.newValue);
      }
   },

   buildOperator: function(value, operatorState) {

     console.log("build operator", this.state.operator)
     if(this.state.currentValue !== 0)
     {
       if(this.state.operatorMode === true)
       {
          this.handleEquals(this.state.currentValue, true);
          console.log("handle equals")
       } else {
          this.state.operator = value;
          this.state.operatorMode = true;
       }
     }

   },
   handleDivide: function(value){
     this.state.currentValue = Number(this.state.currentValue) / Number(this.state.newValue);
     this.changeState( this.state.currentValue);
   },
   handlePlus: function(value) {
     console.log("handlePlus")
     this.state.currentValue = Number(this.state.currentValue) + Number(this.state.newValue);
     this.changeState( this.state.currentValue);
   },
   handleMinus: function(value) {
     this.state.currentValue = Number(this.state.currentValue) - Number(this.state.newValue);
     this.changeState( this.state.currentValue);
   },
   handleMultiply: function(value) {
     this.state.currentValue = Number(this.state.currentValue) * Number(this.state.newValue);
     this.changeState( this.state.currentValue);
   },
   handleEquals: function(value, operatorState = false) {
     console.log(this.state.operator)
     if(this.state.operator === "+")
      {
        console.log("plus");
        this.handlePlus();
      }  else if(this.state.operator === '-')
      {
        this.handleMinus();
        console.log('minus')
      } else if(this.state.operator === '/')
      {
        console.log('divide');
        this.handleDivide();
      } else if(this.state.operator === '*')
      {
        this.handleMultiply();
        console.log('multiply')
      }

      if(operatorState)
      {
        this.state.newValue = 0;
      } else {
        this.state.newValue = 0;
        this.state.operatorMode = false;
      }

   },

   clear: function(value, operatorState) {
     this.state.currentValue = 0;
     this.state.newValue = 0;
     this.operatorMode = false;
     this.operator = undefined;

     this.changeState(this.state.currentValue);
   },
  changeState: function(value) {
    var num = value;

    if(value % 1 != 0)
    {
      num = Number(value).toFixed(2).toString()
    }
    this.setState( {
      display : num
    })
  },

  render: function() {
    return (
      <div className="main">
        <div className = "row expanded">
          <div className = "columns small-12">
            <h1 className="title-text">Calculator</h1>
            <OutputDisplay display={this.state.display}/>
            <div>
              <Button character="7" onNumberChange={this.buildNumber}/>
              <Button character="8" onNumberChange={this.buildNumber}/>
              <Button character="9" onNumberChange={this.buildNumber}/>
              <Button character="/" onOperatorChange={this.buildOperator} operator={true}/>
              <Button character="C" onOperatorChange={this.clear}/>
            </div>
            <div>
              <Button character="4" onNumberChange={this.buildNumber}/>
              <Button character="5" onNumberChange={this.buildNumber}/>
              <Button character="6" onNumberChange={this.buildNumber}/>
              <Button character="*" onOperatorChange={this.buildOperator} operator={true}/>
            </div>
            <div>
              <Button character="1" onNumberChange={this.buildNumber}/>
              <Button character="2" onNumberChange={this.buildNumber}/>
              <Button character="3" onNumberChange={this.buildNumber}/>
              <Button character="+" onOperatorChange={this.buildOperator} operator={true}/>
            </div>
            <div>
              <Button character="0" onNumberChange={this.buildNumber}/>
              <Button character="." onOperatorChange={this.buildNumber} operator={true}/>
              <Button character="=" onOperatorChange={this.handleEquals} operator={true}/>
              <Button character="-" onOperatorChange={this.buildOperator} operator={true}/>

            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Calculator;
