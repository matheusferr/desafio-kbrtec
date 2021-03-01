import { PureComponent } from 'react';
import { Button } from '@Components';
import styles from './bannerCenterButton.module.css';

export default class CenterButton extends PureComponent {
  render() {
    return (
      <div className={styles.bannerContainer}>
        <Button background="solid">standard lorem ipsum</Button>
      </div>
    );
  }
}
