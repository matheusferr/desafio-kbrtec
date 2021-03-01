import { PureComponent } from 'react';
import Image from 'next/image';
import styles from './bannerYoutube.module.css';

export default class Youtube extends PureComponent {
  render() {
    return (
      <div className={styles.bannerContainer}>
        <h4 className={styles.title}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum:
        </h4>

        <Image
          src="/image 28.png"
          alt="Youtube video frame"
          width={1155}
          height={650}
        />
      </div>
    );
  }
}
