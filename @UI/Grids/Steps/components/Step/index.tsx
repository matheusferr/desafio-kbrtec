import { PureComponent } from 'react';
import Divider from './components/Divider';
import styles from './step.module.css';

type StepProps = {
  number: number;
  caption: string;
};

export default class Step extends PureComponent<StepProps> {
  render() {
    const { number, caption } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.numberContainer}>
          <strong>{`.${number}`}</strong>
        </div>
        {caption}
        {number !== 4 && number !== 7 && <Divider />}
      </div>
    );
  }
}
