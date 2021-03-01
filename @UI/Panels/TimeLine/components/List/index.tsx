import { PureComponent } from 'react';
import ListItem from './components/ListItem';
import styles from './list.module.css';

const items = [
  {
    year: '2018',
    value: '15.000,00',
  },
  {
    year: '2015',
    value: '6.000,00',
  },
  {
    year: '2010',
    value: '2.000,00',
  },
  {
    year: '2008',
    value: '800,00',
  },
];

export default class List extends PureComponent {
  render() {
    return (
      <div className={styles.timeline}>
        {items.map(({ year, value }) => (
          <ListItem key={year + value[0]} year={year} value={value} />
        ))}
      </div>
    );
  }
}
