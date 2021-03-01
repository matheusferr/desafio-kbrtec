import { PureComponent } from 'react';
import Image from 'next/image';
import styles from './serviceItem.module.css';

export type ServiceItemProps = {
  icon: `talk_1` | `talk_2` | `training` | `presentation` | `seminar`;
  alt: string;
  caption: string;
};

const icons = {
  talk_1: '/talk 1',
  talk_2: '/talk 2',
  training: '/training 1',
  presentation: '/presentation 1',
  seminar: '/seminar 1',
};

export default class ServiceItem extends PureComponent<ServiceItemProps> {
  render() {
    const { icon, alt, caption } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={`${icons[icon]}.svg`}
            alt={alt}
            width={100}
            height="auto"
          />
        </div>

        <strong>{caption}</strong>

        {icon === 'talk_2' && <p>(mentoring)</p>}
      </div>
    );
  }
}
