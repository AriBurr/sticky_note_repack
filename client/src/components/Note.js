import React from 'react';
import { connect } from 'react-redux';
import { toggleNote } from '../actions/notes';
import { deleteNote } from '../actions/notes';
import { Card, Button, Form, Input, Divider } from 'semantic-ui-react';

const Note = ({ id, title, body, priority, dispatch }) => {

  const checkPriority = () => {
    return priority ? 'Low Priority' : 'High Priority'
  }

  return (
    <Card>
      <Card.Content
        style={ priority ? { backgroundColor: 'yellow' } : {}}
      >
        Title: { title }
        <Divider />
        { body }
        <Divider />
        <Form.Field
          label={`Change to ${checkPriority()}`}
          control='input'
          type='checkbox'
          onClick={() => dispatch(toggleNote(id))}
        />
      <Divider hidden />
      <Button onClick={ () => dispatch(deleteNote(id)) } className='ui red button'>Delete</Button>
      </Card.Content>
    </Card>
  )
}

export default connect()(Note);
