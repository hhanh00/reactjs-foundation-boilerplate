import React from 'react'
import ReactDOM from 'react-dom'
import { Foundation } from 'foundation-sites/js/foundation.core'
import { Toggler } from 'foundation-sites/js/foundation.toggler'

class App extends React.Component {
  _menu = React.createRef()

  componentDidMount() {
    this.toggler = new Toggler($(this._menu.current))
  }
  
  render() {
    return <div className="button-group" ref={this._menu} data-toggler='.small'>
      <div className="button" onClick={this._toggle}>One</div>
      <div className="button">Two</div>
      <div className="button">Three</div>
    </div>
  }

  _toggle = () => {
    this.toggler.toggle()
  }
}

Foundation.addToJquery($)

ReactDOM.render(<App />,
document.getElementById('app'))
