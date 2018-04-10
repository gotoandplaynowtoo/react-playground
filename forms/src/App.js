import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: 'm',
      upload: null,
      js: false,
      php: false,
      node: false,
      position: 'back-end'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {

    const {target} = e;
    const {name, value} = target;

    if(target.type === 'file') {
      this.setState({
        [name]: this.fileInput.files
      });      
    } 
    if(target.type === 'checkbox') {
      this.setState({
        [name]: target.checked
      });            
    } else {
      this.setState({
        [name]: value
      });      
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <div><input type='text' name='name'/></div>
          <div>
            <input 
              type='radio' 
              name='gender' 
              value='m'
              defaultChecked 
            />
              Male
          </div>
          <div>
            <input 
              type='radio' 
              name='gender' 
              value='f'
            />
              Female
          </div>
          <div>
            <input 
              type="file" 
              name='upload' 
              ref={fileInput => this.fileInput = fileInput}
            />
          </div>
          <div>
            <input type="checkbox" name='js'/> Javascript
            <input type="checkbox" name='php'/> PHP
            <input type="checkbox" name='node'/> Node.js
          </div>
          <div>
            <select name="position" defaultValue={this.state.position}>
              <option value="dev-ops">Dev-ops</option>
              <option value="back-end">Back-end</option>
              <option value="front-end">Front-end</option>
            </select>
          </div>
          <div><button type='submit'>Submit</button></div>
        </form>
      </div>
    );
  }

}

export default App;
