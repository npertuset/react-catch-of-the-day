import React from 'react';
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {    
    event.preventDefault();

    this.props.history.push(`/store/${this.myInput.current.value}`);
  }

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input 
          type="text" 
          required 
          placeholder="Store Name" 
          defaultValue={ getFunName() }
          ref={this.myInput}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;