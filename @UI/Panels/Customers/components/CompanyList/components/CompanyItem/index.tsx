import { PureComponent } from 'react';
import Image from 'next/image';
import styles from './companyListItem.module.css';

type CheckListItemProps = {
  value: string;
  alt: string;
};

export default class CheckListItem extends PureComponent<CheckListItemProps> {
  render() {
    const { value, alt } = this.props;

    return (
      <div className={styles.container}>
        <Image
          src={`/${value}.svg`}
          alt={`${alt} logo`}
          width={80}
          height="auto"
        />
      </div>
    );
  }
}
