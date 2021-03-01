import { PureComponent } from 'react';
import CheckListItem from './components/CheckListItem';
import styles from './checkList.module.css';

type CheckListProps = {
  data: string[];
};

export class CheckList extends PureComponent<CheckListProps> {
  render() {
    const { data } = this.props;

    return (
      <div className={styles.container}>
        {data.map((item, i) => (
          <CheckListItem key={i * item.length} value={item} />
        ))}
      </div>
    );
  }
}
