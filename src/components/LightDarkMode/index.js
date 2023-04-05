// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'darkMode' : 'lightMode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click to change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
