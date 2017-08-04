import React, { Component } from 'react';
import {Panel, FormGroup, Button} from 'react-bootstrap';
import AppActions from '../actions/AppActions';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {
        name:'',
        email:'',
        phone:''
      }
    }
  }

  handleSubmit(event) {
    if(this.refs.name.value === '') {
      alert("Name is required");
    } else {

    }

    event.preventDefault();
  }

  render() {
    return (
      <Panel header="Add Contact">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <input
              className="form-control"
              type="text"
              ref="name"
              placeholder="Add Name"
            />
          </FormGroup>
          <FormGroup>
            <input
              className="form-control"
              type="text"
              ref="email"
              placeholder="Add Email"
            />
          </FormGroup>
          <FormGroup>
            <input
              className="form-control"
              type="text"
              ref="phone"
              placeholder="Add Phone"
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </Panel>
    );
  }
}

export default AddContact;
