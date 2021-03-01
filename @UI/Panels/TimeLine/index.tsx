import { PureComponent } from 'react';
import List from './components/List';
import styles from './panelTimeLine.module.css';

export class TimeLine extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContent}>
            <h3 className={styles.title}>
              type specimen book. it
              <br /> has survived
            </h3>

            <p className={styles.leftText}>
              Lorem Ipsum dolor to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <p className={styles.leftText}>
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.rightContent}>
            <div className={styles.titleContainer}>
              <h4 className={styles.title}>
                Mecently with desktop publishing software like:
              </h4>
            </div>
            <List />
          </div>
        </div>
      </div>
    );
  }
}
