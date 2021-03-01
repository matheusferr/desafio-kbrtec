import { PureComponent } from 'react';
import Image from 'next/image';
import { Button } from '@Components';
import styles from './header.module.css';

export class Header extends PureComponent {
  render() {
    return (
      <header className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={238 * 0.4}
            height={342 * 0.4}
          />
        </div>

        <div className={styles.buttonContainer}>
          <Button background="gradient" className={styles.textButton}>
            mais informações
          </Button>

          <div className={styles.menuButton}>
            <div className={styles.menuButtonRow1} />
            <div className={styles.menuButtonRow2} />
            <div className={styles.menuButtonRow3} />
          </div>
        </div>
      </header>
    );
  }
}
