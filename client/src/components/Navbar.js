import React from 'react';
import FilterLink from './FilterLink';
import { Item, Menu } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <Menu>
      <Menu.Item>
        <FilterLink>All</FilterLink>
      </Menu.Item>
      <Menu.Item>
        <FilterLink>High</FilterLink>
      </Menu.Item>
      <Menu.Item>
        <FilterLink>Low</FilterLink>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
