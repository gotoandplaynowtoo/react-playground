import React, { Component } from 'react';

class FormApp extends Component {
  state = {
    gender: 'f',
    fname: 'John Doe',
    course: 'comsci',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? Provident, maiores, tenetur facere a beatae nulla sint dolor dolore, aliquid consectetur ullam porro placeat enim explicabo! Tenetur, assumenda ut?'
  };

  onChangeForm = (e) => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render = () => {
    return (
      <div 
        style={{
          padding: 10,
          border: '1px solid #222',
          margin: '6px 0'
        }}
      >
        <form 
          ref={(el) => this.frm = el}
          onSubmit={this.onSubmitForm}
          onChange={this.onChangeForm}
        >
          <div>
            <input 
              type="text" 
              name='fname'
              defaultValue={this.state.fname}
            />
          </div>
          <div>
            <div>
              <input 
                type='radio' 
                name='gender' 
                value='m'
                defaultChecked={this.state.gender === 'm'}
              />Male
            </div>
            <div>
              <input 
                type='radio' 
                name='gender' 
                value='f'
                defaultChecked={this.state.gender === 'f'}
              />Female
            </div>
          </div>
          <div>
            <select 
              name="course" 
              defaultValue={this.state.course}
            >
              <option value="it">I.T</option>
              <option value="hrm">HRM</option>
              <option value="comsci">Computer Science</option>
            </select>
          </div>
          <div>
            <textarea 
              name="message" 
              cols="30" 
              rows="10"
              defaultValue={this.state.message}
            ></textarea>
          </div>
          <div>
            <input list='browsers' name='browsers'/>
            <datalist id='browsers'>
              <option value="ie"/>
              <option value="chrome"/>
              <option value="safari"/>
              <option value="moz"/>
            </datalist>
          </div>
          <div><button type='submit'>submit</button></div>
        </form>
      </div>
    );
  };
}

export default FormApp;