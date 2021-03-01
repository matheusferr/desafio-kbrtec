import { PureComponent } from 'react';
import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiPlay } from '@mdi/js';
import styles from './videoThumbnail.module.css';

type VideoThumbnailProps = {
  src: string;
  alt: string;
};

export default class VideoThumbnail extends PureComponent<VideoThumbnailProps> {
  render() {
    const { src, alt } = this.props;

    return (
      <div className={styles.container}>
        <Image src={src} alt={alt} width={303} height={203} />
        <Icon className={styles.icon} path={mdiPlay} size={3} />
      </div>
    );
  }
}
