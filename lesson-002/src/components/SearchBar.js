import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    console.log('instantiated');
  }

  render = () => {
    console.log('i am rerendered too');
    return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum enim illo excepturi exercitationem rem eligendi dolores, qui ab porro facere quae error ea adipisci vitae blanditiis ipsum sit voluptatibus. Aliquam.</p>
  };
}

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onInputChange = (e) => {
    this.setState({
      term: e.target.value
    });
  };

  render = () => {
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={this.onInputChange} 
        />
        <Test/>
      </div>
    );
  }
}

export default SearchBar;