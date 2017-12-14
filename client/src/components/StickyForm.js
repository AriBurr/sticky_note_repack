import React from 'react';
import { connect } from 'react-redux';
import { addNote } from  '../actions/notes';
import { nextId } from '../actions/nextId';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class StickyForm extends React.Component {
  state = { name: '' };

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { id, dispatch } = this.props;
    const note = { id, name };
    dispatch(addNote(note));
    dispatch(nextId());
    this.setState({ name: '' })
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          required
          label="Sticky Note"
          value={this.state.name}
          control={TextArea}
          onChange={this.handleChange}
        />
      <Button className='ui primary button' type='submit'>Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(StickyForm);
