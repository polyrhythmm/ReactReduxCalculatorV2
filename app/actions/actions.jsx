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

export var changeNumber = (currentValue, newValue = 0) => {
  return {
    type: "CHANGE_NUMBER",
    currentValue,
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
export var handleEquals = (value, operatorState) => {
  return {
    type: "HANDLE_EQUALS",
    value,
    operatorState
  }
}
export var handleClear = (currentValue = 0, newValue = 0, operatorMode = false, operator = undefined, firstRun = true, equalsUsed = false, display = "0") => {
  return {
    type: "HANDLE_CLEAR",
    currentValue,
    newValue,
    operatorMode,
    operator,
    firstRun,
    equalsUsed,
    display
  }
}
