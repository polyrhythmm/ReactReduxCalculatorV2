
var stateDefault = {
  display: "0",
  currentValue:0,
  newValue:0,
  operatorMode: false,
  operator: undefined,
  firstRun: true
}

export var reducer = (state = stateDefault, action) => {
  //state = state || {name: "Anonymous"}
  switch(action.type)
  {
    case "CHANGE_DISPLAY" :
      return {
        ...state,
        display : action.display
      }
    case "CHANGE_OPERATOR":

    if(state.currentValue !== 0)
    {
      if(state.operatorMode === true)
      {
         //this.handleEquals(state.currentValue, true);
        // reducer(...state, {type: "HANDLE_EQUALS", operatorState: true, value: state.currentValue})
         state.operator = action.operator;
         console.log("handle equals")
      } else {
         state.operator = action.operator;
         state.operatorMode = true;
      }
    } else {
      state.operator = action.operator;
      //reducer(...state, {type: "HANDLE_EQUALS", operatorState: true, value: state.currentValue})
    //  this.handleEquals(state.currentValue, true);

    }
      return {
        ...state,
        operator: action.operator
      }

    case "CHANGE_NUMBER":
      return {
        ...state,
        currentValue: action.currentValue,
        newValue: action.newValue
      }

    case "CHANGE_OPERATOR_MODE":

      return {
        operatorMode: action.operatorMode
      }
    case "HANDLE_EQUALS":

    var output;


      if(state.operator === "+")
       {
         console.log("plus");
         output = Number(state.currentValue) + Number(state.newValue);
       }  else if(state.operator === '-')
       {
         output = Number(state.currentValue) - Number(state.newValue);
         console.log('minus')
       } else if(state.operator === '/')
       {
         console.log('divide');
          output = Number(state.currentValue) / Number(state.newValue);

       } else if(state.operator === '*')
       {
         output = Number(state.currentValue) * Number(state.newValue);
         console.log('multiply')
       }

       state.equalsUsed = true;

       if(action.operatorState)
       {
         state.newValue = 0;
       } else {
         state.newValue = 0;
         state.operatorMode = false;
       }


       state.display = output
      console.log(output);

      return {
        ...state,
        value: state.display,
        operatorState: action.operatorState
      }
    case "HANDLE_CLEAR":

      return {

        display : action.display,
        currentValue : action.currentValue,
        newValue : action.newValue,
        operatorMode : action.operatorMode,
        operator : action.operator,
        firstRun : action.firstRun,
        equalsUsed : action.equalsUsed
      }



    case "CHANGE_FIRSTRUN":
      return {
        firstRun: action.firstRun
      }
    case "EQUALS_USED":
      return {
        equalsUsed: action.equalsUsed
      }
    default:
      return state;
  }
}
