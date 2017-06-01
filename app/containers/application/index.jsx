import React, { cloneElement } from 'react';
import Navigation from 'components/navigation';
import styles from './styles';

const Application = ({ children }) => (
  <div className={ styles.layout }>
    <main className={ styles.wrapper }>
      <Navigation />
      {cloneElement(children)}
    </main>
  </div>
);

export default Application;
