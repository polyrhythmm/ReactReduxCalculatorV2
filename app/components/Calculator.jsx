var React = require('react');
//var Button = require('button');
import Button from 'Button'
var {connect} = require('react-redux')
var OutputDisplay = require('OutputDisplay');

var Calculator = React.createClass({

  render: function() {
    return (
      <div className="main">
        <div className = "row expanded">
          <div className = "columns small-12">
            <h1 className="title-text">Calculator</h1>
            <OutputDisplay/>
            <div>
              <Button character="7"/>
              <Button character="8"/>
              <Button character="9"/>
              <Button character="/" operator={true}/>
              <Button character="C"/>
            </div>
            <div>
              <Button character="4"/>
              <Button character="5"/>
              <Button character="6"/>
              <Button character="*" operator={true}/>
            </div>
            <div>
              <Button character="1"/>
              <Button character="2"/>
              <Button character="3"/>
              <Button character="+" operator={true}/>
            </div>
            <div>
              <Button character="0"/>
              <Button character="." operator={true}/>
              <Button character="=" operator={true}/>
              <Button character="-" operator={true}/>

            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = connect(
    (state) => {
      return {
        currentValue : 0,
        newValue : 0,
        operatorMode : false,
        operator : undefined,
        firstRun : true,
        equalsUsed : false
      }
    }
)(Calculator);
