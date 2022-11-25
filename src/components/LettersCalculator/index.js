// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  InputLettersCount = event => {
    this.setState({
      count: event.target.value.length,
    })
  }

  render() {
    const {count} = this.state
    console.log(count)

    return (
      <div className="Main-Container">
        <div className="LettersCalculate-Container">
          <div className="Input-Container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label-text" htmlFor="Enter the phrase">
              Enter the phrase
            </label>
            <input
              id="Enter the phrase"
              className="input-calculator"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.InputLettersCount}
            />
            <div>
              <p className="lettersCount">No.of Letters: {count}</p>
            </div>
          </div>
          <div className="Image-Container">
            <img
              className="letters-calculater-image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
