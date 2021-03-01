import { PureComponent } from 'react';
import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';
import CompanyList from './components/CompanyList';
import VideoThumbnail from './components/VideoThumbnail';
import styles from './panelCustomers.module.css';

export class Customers extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContent}>
            <div className={styles.content}>
              <div className={styles.titleContainer}>
                <h4 className={styles.title}>Depoimentos</h4>

                <h5 className={styles.titleCaption}>
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                </h5>
              </div>
            </div>

            <div className={styles.content}>
              <VideoThumbnail
                src="/image 39.png"
                alt="Person talking on the phone"
              />
              <VideoThumbnail
                src="/image 40.png"
                alt="Employees in a meeting"
              />
              <VideoThumbnail
                src="/image 41.png"
                alt="Employees in a meeting close up"
              />
            </div>

            <div className={styles.leftContentControlContainer}>
              <div>
                <Icon path={mdiChevronUp} size={2} />
              </div>
              <div>
                <Icon path={mdiChevronDown} size={2} color="black" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.rightContent}>
            <div className={styles.content}>
              <div className={styles.titleContainer}>
                <h4 className={styles.title}>lorem ipsum</h4>

                <h5 className={styles.titleCaption}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium:
                </h5>
              </div>
            </div>

            <div className={styles.content}>
              <CompanyList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
