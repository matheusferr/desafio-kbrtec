import { PureComponent } from 'react';
import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiThumbUp, mdiThumbDown } from '@mdi/js';
import styles from './bannerProsCons.module.css';

export default class ProsCons extends PureComponent {
  render() {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.iconContainer}>
          <Image
            src="/business 4.svg"
            alt="Person climbing mountain"
            width={100}
            height="auto"
          />
        </div>

        <div className={styles.titleContainer}>
          <h4 className={styles.title}>
            Lorem Ipsum is simply dummy text of THE
          </h4>

          <p className={styles.titleCaption}>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account
          </p>
        </div>

        <h5 className={styles.question}>THE OF simply dummy text of THE?</h5>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Icon className={styles.okIcon} path={mdiThumbUp} size={2} />
            <p className={styles.cardText}>
              consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            </p>
          </div>

          <div className={styles.card}>
            <Icon className={styles.badIcon} path={mdiThumbDown} size={2} />
            <p className={styles.cardText}>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will
            </p>
          </div>
        </div>
      </div>
    );
  }
}
