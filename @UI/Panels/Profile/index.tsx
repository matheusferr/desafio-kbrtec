import React, { PureComponent } from 'react';
import { ProfileCard, ProfileText } from './components';
import styles from './panelProfile.module.css';

export class Profile extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <ProfileCard />
        </div>

        <div className={styles.rightContainer}>
          <ProfileText />
        </div>
      </div>
    );
  }
}
