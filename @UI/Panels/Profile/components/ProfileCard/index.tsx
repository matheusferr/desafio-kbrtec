import { PureComponent } from 'react';
import Image from 'next/image';
import SocialIcon from './components/SocialIcon';
import styles from './profileCard.module.css';

export class ProfileCard extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Image
          src="/selfie.png"
          alt="Profile picture"
          width={459}
          height={542}
        />

        <div className={styles.iconContainer}>
          <SocialIcon icon="facebook" />
          <SocialIcon icon="instagram" />
          <SocialIcon icon="twitter" />
        </div>
      </div>
    );
  }
}
