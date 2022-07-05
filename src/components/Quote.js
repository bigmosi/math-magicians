import React from 'react';
import styles from './Quote.module.css';

const Quote = () => (
  <>
    <div className={styles.container}>
      <p className={styles.text}>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding. -Willian Paul Thurston
      </p>
    </div>
  </>
);

export default Quote;
