import { PureComponent } from 'react';
import Image from 'next/image';
import styles from './bannerCompanyLogo.module.css';

export default class BannerWithLogo extends PureComponent {
  render() {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.iconContainer}>
            <Image
              src="/logo_with_outline.svg"
              alt="Logo"
              width={150}
              height="auto"
            />
          </div>

          <h2 className={styles.iconText}>
            Lorem Ipsum
            <br />
            Lorem Ipsum to make
            <br />
            type book
          </h2>
        </div>

        <div className={styles.rightContainer}>
          <p className={styles.rightContent}>
            <span>Lorem Ipsum</span> to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className={styles.rightDetail} />
      </div>
    );
  }
}
