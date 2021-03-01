import { PureComponent } from 'react';
import styles from './dots.module.css';

export default class Dots extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    );
  }
}
