import { PureComponent } from 'react';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import styles from './check.module.css';

type CheckProps = {
  size: number;
};

export class Check extends PureComponent<CheckProps> {
  render() {
    const { size } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Icon className={styles.icon} path={mdiCheck} size={size} />
        </div>
      </div>
    );
  }
}
