import { PureComponent } from 'react';
import { Button } from '@Components';
import styles from './bannerRightButton.module.css';

export default class RightButton extends PureComponent {
  render() {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContent}>
            <h4 className={styles.title}>
              versions of lorem
              <br />
              ipsumletraset sheets
              <br />
              <strong>publishing software like ?</strong>
            </h4>

            <p>
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem IpsumLetraset
            </p>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <Button background="solid">containing lorem ipsum passages</Button>
        </div>
      </div>
    );
  }
}
