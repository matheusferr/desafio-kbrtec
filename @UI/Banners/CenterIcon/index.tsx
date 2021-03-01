import { PureComponent } from 'react';
import Image from 'next/image';
import styles from './bannerCenterIcon.module.css';

export default class CenterIcon extends PureComponent {
  render() {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.iconContainer}>
          <Image
            src="/money 1.svg"
            alt="Coin falling into a hand"
            width={100}
            height="auto"
          />
        </div>

        <h4 className={styles.title}>investimento</h4>

        <h5 className={styles.titleCaption}>
          lorem ipsum is simply dummy text of the print
        </h5>

        <p className={styles.quote}>
          Software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    );
  }
}
