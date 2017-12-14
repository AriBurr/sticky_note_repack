import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react'
import Note from './Note';
import { getNotes } from '../actions/notes';
import axios from 'axios';

class StickyList extends React.Component {

  componentDidMount() {
    this.props.dispatch(getNotes());
  }

  render () {
    const { notes, filter} = this.props;

    const filtered = (notes, filter ) => {
      switch (filter) {
        case 'All':
        return notes
        case 'Low':
        return notes.filter( n => !n.priority )
        case 'High':
        return notes.filter( n => n.priority )
      }
    }

    return (
      <Card.Group itemsPerRow={4}>
        { filtered(notes, filter).map( n => <Note key={n.id}{...n} />) }
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes, filter: state.filter }
}

export default connect(mapStateToProps)(StickyList);
