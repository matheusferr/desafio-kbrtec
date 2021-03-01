import { PureComponent } from 'react';
import Image from 'next/image';
import styles from './bannerIconRight.module.css';

export default class RightIcon extends PureComponent {
  render() {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContent}>
            <p>
              to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of{' '}
              <strong>
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </strong>
            </p>

            <p>
              <strong>
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </strong>
            </p>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <h2 className={styles.iconText}>
            specimen book. It has
            <br />
            survived not only
            <br />
            fiver...
          </h2>
          <Image
            src="/business 1.svg"
            alt="Person climbing mountain"
            width={250}
            height="auto"
          />
        </div>
      </div>
    );
  }
}
