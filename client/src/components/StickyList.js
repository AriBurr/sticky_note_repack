import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react'
import Note from './Note';

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

const StickyList = ({ notes, filter }) => {
  return (
    <Card>
      { filtered(notes, filter).map( n => <Note key={n.id}{...n} />) }
    </Card>
  )
}

const mapStateToProps = (state) => {
  return { notes: state.notes, filter: state.filter }
}

export default connect(mapStateToProps)(StickyList);
