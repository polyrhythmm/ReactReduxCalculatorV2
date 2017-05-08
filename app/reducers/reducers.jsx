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
      return {
        ...state,
        operator: action.operator
      }
    case "CHANGE_NUMBER_INIT":
      return {
        ...state,
        currentValue: action.currentValue
      }
    case "CHANGE_NUMBER":
      return {
        ...state,
        newValue: action.newValue
      }
    case "CHANGE_OPERATOR_MODE":
      return {
        ...state,
        operatorMode: action.operatorMode
      }
    case "HANDLE_EQUALS":
      return {
        ...state
      }
    case "CHANGE_FIRSTRUN":
      return {
        ...state,
        firstRun: action.firstRun
      }
    case "EQUALS_USED":
      return {
        ...state,
        equalsUsed: action.equalsUsed
      }
    default:
      return state;
  }
}
