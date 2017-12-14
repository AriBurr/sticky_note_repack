import React from 'react';
import { connect } from 'react-redux';
import { toggleNote } from '../actions/notes';
import { deleteNote } from '../actions/notes';
import { updateNote } from '../actions/notes';
import { editStatus } from '../actions/editStatus';
import { Segment, Card, Button, Form, Input, Divider, TextArea } from 'semantic-ui-react';

class Note extends React.Component {
  state = { title: this.props.title, body: this.props.body, id: this.props.id }

  checkPriority = () => {
    const { priority } = this.props;
    return priority ? 'Low Priority' : 'High Priority'
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, title, body } = this.state;
    const { dispatch } = this.props;
    const note = { id, title, body };
    dispatch(updateNote(note));
    dispatch(editStatus());
  }

  editNote = () => {
    const { title, body, dispatch } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          required
          name='title'
          label="Title"
          defaultValue={ title }
          onChange={this.handleChange}
        />
        <Form.Input
          required
          name='body'
          label="Body"
          defaultValue={ body }
          control={TextArea}
          onChange={this.handleChange}
        />
      <Button className='ui primary button' type='submit'>Edit</Button>
      <Divider hidden />
      </Form>
    )
  }

  showNote = () => {
    const { id, title, body, priority, dispatch } = this.props;

    return (
      <Card>
        <Card.Content
          style={ priority ? { backgroundColor: 'yellow' } : { backgroundColor: 'cyan' }}
          >
          Title: { title }
          <Divider />
          { body }
          <Divider />
          <Form.Field
            label={`Change to ${this.checkPriority()}`}
            control='input'
            type='checkbox'
            onClick={() => dispatch(toggleNote(id))}
            />
          <Divider hidden />
          <Button onClick={ () => dispatch(deleteNote(id)) } className='ui red button'>Delete</Button>
          <Button onClick={ () => dispatch(editStatus()) } className='ui green button'>Edit</Button>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const { editStatus } = this.props;
    return (
      <Segment>
        { editStatus ? this.editNote() : this.showNote() }
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { editStatus: state.editStatus }
}

export default connect(mapStateToProps)(Note);
