var expect = require('expect');
var actions = require('actions');
var df = require('deep-freeze-strict')

describe("Actions", () => {
  it('should generate change displays text', () =>{
    var action = {
      type: "CHANGE_DISPLAY",
      display: "123"
    }

    expect(actions.changeDisplay(action.display)).toEqual(action);
  })

  it('should generate change operator action', () =>{
    var action = {
      type: "CHANGE_OPERATOR",
      operator: "/"
    }

    expect(actions.changeOperator(action.operator)).toEqual(action);
  })

  it('should generate change number init action', () =>{
    var action = {
      type: "CHANGE_NUMBER_INIT",
      currentValue: 123
    }

    expect(actions.changeNumberInit(action.currentValue)).toEqual(action);
  })

  it('should generate change number action', () =>{
    var action = {
      type: "CHANGE_NUMBER",
      newValue: 123
    }

    expect(actions.changeNumber(action.newValue)).toEqual(action);
  })

  it('should generate change operator mode action', () =>{
    var action = {
      type: "CHANGE_OPERATOR_MODE",
      operatorMode: true
    }

    expect(actions.changeOperatorMode(action.operatorMode)).toEqual(action);
  })

  it('should generate change operator mode action', () =>{
    var action = {
      type: "CHANGE_OPERATOR_MODE",
      operatorMode: true
    }

    expect(actions.changeOperatorMode(action.operatorMode)).toEqual(action);
  })

  it('should generate handleEquals action', () =>{
    var action = {
      type: "HANDLE_EQUALS",
      value: "/",
      operatorState: true
    }

    expect(actions.handleEquals(action.value, action.operatorState)).toEqual(action);
  })

  it('should generate handleEquals action', () =>{
    var action = {
      type: "EQUALS_USED",
      equalsUsed: true
    }

    expect(actions.changeEqualsUsed(action.equalsUsed)).toEqual(action);
  })

  it('should generate changeFirstRun action', () =>{
    var action = {
      type: "CHANGE_FIRSTRUN",
      firstRun: false
    }

    expect(actions.changeFirstRun(action.firstRun)).toEqual(action);
  })
})
