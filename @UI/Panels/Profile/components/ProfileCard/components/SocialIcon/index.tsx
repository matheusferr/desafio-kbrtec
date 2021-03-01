import { PureComponent } from 'react';
import Icon from '@mdi/react';
import { mdiInstagram, mdiFacebook, mdiTwitter } from '@mdi/js';
import styles from './socialIcon.module.css';

type SocialIconProps = {
  icon: 'facebook' | 'instagram' | 'twitter';
};

const socialNetworks: { [key: string]: string } = {
  facebook: mdiFacebook,
  instagram: mdiInstagram,
  twitter: mdiTwitter,
};

export default class SocialIcon extends PureComponent<SocialIconProps> {
  render() {
    const { icon } = this.props;

    return (
      <div className={styles.container}>
        <Icon path={socialNetworks[icon]} size={1.5} color="#FFF" />
      </div>
    );
  }
}
