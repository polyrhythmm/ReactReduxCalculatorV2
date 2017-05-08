export var changeDisplay = (display) => {
  return {
    type: "CHANGE_DISPLAY",
    display
  }
}

export var changeOperator = (operator) => {
  return {
    type: "CHANGE_OPERATOR",
    operator
  }
}

export var changeNumberInit = (currentValue) => {
  return {
    type: "CHANGE_NUMBER_INIT",
    currentValue
  }
}

export var changeNumber = (newValue) => {
  return {
    type: "CHANGE_NUMBER",
    newValue
  }
}

export var changeOperatorMode = (operatorMode) => {
  return {
    type: "CHANGE_OPERATOR_MODE",
    operatorMode
  }
}

export var changeFirstRun = (firstRun) => {
  return {
    type: "CHANGE_FIRSTRUN",
    firstRun
  }
}

export var changeEqualsUsed = (equalsUsed) => {
  return {
    type: "EQUALS_USED",
    equalsUsed
  }
}
export var handleEquals = () => {
  return {
    type: "HANDLE_EQUALS"
  }
}
