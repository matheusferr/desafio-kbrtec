import { PureComponent } from 'react';
import Dots from './components/Dots';
import styles from './listItem.module.css';

type ListItemProps = {
  year: string;
  value: string;
};

export default class ListItem extends PureComponent<ListItemProps> {
  render() {
    const { year, value } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <Dots />

          <h3 className={styles.year}>{year}</h3>
        </div>
        <div className={styles.value}>
          <p>Lorem ipsum dolor</p>
          <strong>{`R$ ${value}`}</strong>
        </div>
      </div>
    );
  }
}
