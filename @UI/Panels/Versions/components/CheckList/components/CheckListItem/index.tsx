import { PureComponent } from 'react';
import { Check } from '@Components';
import styles from './checkListItem.module.css';

type CheckListItemProps = {
  value: string;
};

export default class CheckListItem extends PureComponent<CheckListItemProps> {
  render() {
    const { value } = this.props;

    return (
      <div className={styles.container}>
        <Check size={1} />
        <p>{value}</p>
      </div>
    );
  }
}
