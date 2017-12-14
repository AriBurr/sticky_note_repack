import React from 'react';
import { Segment } from 'semantic-ui-react';
import StickyForm from './components/StickyForm';
import StickyList from './components/StickyList';
import Navbar from './components/Navbar';

const App = () => (
  <Segment basic>
    <Navbar />
    <StickyForm />
    <StickyList />
  </Segment>
);

export default App;
