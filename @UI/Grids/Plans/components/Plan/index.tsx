import { PureComponent } from 'react';
import { Check } from '@Components';
import styles from './plan.module.css';

type PlanProps = {
  name: string;
  duration?: string;
  price: string;
};

export default class Plan extends PureComponent<PlanProps> {
  render() {
    const { name, duration, price } = this.props;

    return (
      <div className={styles.container}>
        <Check size={2} />

        <div className={styles.titleContainer}>
          <p className={styles.title}>{name}</p>
          {duration && <p className={styles.duration}>{`(${duration})`}</p>}
        </div>

        <p className={styles.price}>{`R$${price}`}</p>
      </div>
    );
  }
}
