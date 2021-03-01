import { PureComponent } from 'react';
import styles from './divider.module.css';

export default class Step extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    );
  }
}
