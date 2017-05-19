var React = require('react');
var actions = require('actions')
var {connect} = require('react-redux');

var Button = React.createClass({

  changeNumber: function (value) {
    console.log(this.props.currentValue);
    var {dispatch} = this.props;
    dispatch(actions.changeNumber(5));
    console.log(this.props.currentValue,  " current value")

    if(this.props.operatorMode === false)
    {
      console.log("catch 1");
      console.log(this.props.currentValue, ' state.currentValue')
      if(this.props.currentValue === 0)
      {
               console.log("catch 2");
             if(!this.props.equalsUsed)
             {
               if(value === ".")
               {
                      console.log("catch 3");
                       if(this.props.currentValue.toString().indexOf(".") === -1)
                       {
                         console.log("catch 4");
                         dispatch(actions.changeNumber("0" + value));
                         dispatch(actions.changeDisplay(this.props.currentValue.toString()))
                         //this.props.currentValue = "0" + value;
                       }

               } else if(value !== 0)
               {
                  console.log("catch 5");
                  console.log(value.toString());
                  console.log(this.props.currentValue);

                  dispatch(actions.changeNumber(value.toString()));
                  console.log(this.props.currentValue)
                  dispatch(actions.changeDisplay(this.props.currentValue.toString()))
                //  this.props.currentValue = value.toString();
               }
             }

             var num = this.props.currentValue;

             if(this.props.currentValue % 1 != 0)
             {
               num = Number(this.props.currentValue).toString()
             }

             //this.props.display = num
             dispatch(actions.changeDisplay(num.toString()))
             return {
               ...this.props,
               currentValue: num,
               newValue: this.props.newValue
             }

      } else {
         console.log("catch 6");
         if(value === "."){
           console.log("catch 7");
           if(this.props.currentValue.toString().indexOf(".") === -1)
           {
               console.log("catch 8");
               dispatch(actions.changeNumber(this.props.currentValue += value.toString()))
               //this.props.currentValue += value.toString();
           }
         } else {
             console.log("catch 9")
             console.log(this.props.operatorMode)
             if(!this.props.equalsUsed)
             {
               dispatch(actions.changeNumber(this.props.currentValue += value.toString()))
               //this.props.currentValue += Number(value).toString();
             } else {
               dispatch(actions.changeNumber( Number(value).toString()))
               //this.props.currentValue = Number(value).toString();
              dispatch(actions.changeEqualsUsed(false));
              // this.props.equalsUsed = false;
             }
         }
      }

      var num = state.currentValue;

      if(state.currentValue % 1 != 0)
      {
        num = Number(state.currentValue).toString()
      }

      //state.display = num
      dispatch(actions.changeDisplay(num.toString()))

      return {
        ...this.props,
        currentValue: num,
        newValue: this.props.newValue
      }

  } else {


       console.log("catch 10");
        if(this.props.newValue === 0)
        {
          console.log("catch 11");
          if(value === ".")
          {
            console.log("catch 12");
            if(this.props.newValue.toString().indexOf(".") === -1)
            {
             console.log("catch 13");
              dispatch(actions.changeNumber(this.props.currentValue, "0" + value))
            //  this.props.newValue = "0" + value;
            }
          } else if(value !== 0)
          {
            console.log("catch 14");
            dispatch(actions.changeNumber(this.props.currentValue,  value.toString()))
             //this.props.newValue = value.toString()
          }
      } else {
        console.log("catch 15");

         if(value === "."){
           console.log("catch 16");
           if(this.props.newValue.toString().indexOf(".") === -1)
           {
               console.log("catch 17");
               console.log(this.props.operatorMode)
               dispatch(actions.changeNumber(this.props.currentValue,  this.props.newValue += value.toString()))
               //this.props.newValue += value.toString();
           }
         } else {
             console.log("catch 18")
             console.log(this.props.operatorMode)
             dispatch(actions.changeNumber(this.props.currentValue,  Number(value).toString()))
            // this.props.newValue += Number(value).toString();
         }
      }

      var num = this.props.newValue;

      if(this.props.newValue % 1 != 0)
      {
        num = Number(this.props.newValue).toString()
      }

      //this.props.display = num
      dispatch(actions.changeDisplay(num));

      return {
        ...this.props,
        currentValue : this.props.currentValue,
        newValue: num
      }
     }


  },
  changeOperator: function() {

  },
  handleEquals: function() {

  },
  handleClick: function(e) {

    var value = this.props.character.toString();

    var dispatch = this.props.dispatch;

    if(value.match(/[0-9]/))
    {
      this.changeNumber(value);
    //  this.props.onNumberChange(Number(value));
    } else if(value === "+" || value === "-" || value === "/" || value === "*"){
        dispatch(actions.changeOperator(value))
      //  this.props.onOperatorChange(value, false);
    } else if(value === "=")
    {
        dispatch(actions.handleEquals(value, true))
    } else if(value === "C")
    {
        dispatch(actions.handleClear())
    }
  },

  render: function() {
    var {character, operator} = this.props;

    return (
        <button className="button" type="button" ref="btn" onClick={this.handleClick}><span className="button-text">{character}</span></button>
    )
  }
});

export default connect(
  (state) => {
    return {
      display: state.display,
      currentValue: state.currentValue,
      newValue: state.newValue,
      operatorMode: state.operatorMode,
      operator: state.operator,
      firstRun: state.firstRun
    }
  }
)(Button);
