import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import StickyForm from './components/StickyForm';
import StickyList from './components/StickyList';
import Navbar from './components/Navbar';

const App = () => (
  <Segment basic>
    <Navbar />
    <Header as="h3" textAlign="center">Sticky Note App</Header>
    <StickyForm />
    <StickyList />
  </Segment>
);

export default App;
