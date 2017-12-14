import React from 'react';
import { connect } from 'react-redux';
import { toggleNote } from '../actions/notes'
import { Card, Button, Form, Input } from 'semantic-ui-react';

const Note = ({ id, name, priority, dispatch }) => {

  const checkPriority = () => {
    return priority ? 'Low Priority' : 'High Priority'
  }

  return (
    <Card.Content
      style={ priority ? { backgroundColor: 'yellow' } : {}}
    >
      { name }
      <Form.Field
        label={`Change to ${checkPriority()}`}
        control='input'
        type='checkbox'
        onClick={() => dispatch(toggleNote(id))}
      />
    </Card.Content>
  )
}

export default connect()(Note);
