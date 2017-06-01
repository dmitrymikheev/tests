import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { paths } from 'helpers/routes';
import styles from './styles';

const Navigation = () => (
    <Navbar className={ styles.panel }>
      <Navbar.Header>
        <Navbar.Brand>
          Test
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );

export default Navigation;
