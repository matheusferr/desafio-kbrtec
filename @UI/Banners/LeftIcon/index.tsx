import { PureComponent } from 'react';
import Image from 'next/image';
import styles from './bannerLeftIcon.module.css';

export default class LeftIcon extends PureComponent {
  render() {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.iconContainer}>
            <Image
              src="/business 4.svg"
              alt="Person climbing mountain"
              width={100}
              height="auto"
            />
          </div>

          <h4 className={styles.iconText}>
            containing Lorem
            <br /> Ipsum passages
          </h4>
        </div>

        <div className={styles.rightContainer}>
          <p className={styles.rightContent}>
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem IpsumLetraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
    );
  }
}
