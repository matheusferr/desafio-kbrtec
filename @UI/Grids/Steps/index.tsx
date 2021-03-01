import { PureComponent } from 'react';
import { Button } from '@Components';
import Step from './components/Step';
import styles from './steps.module.css';

const steps = [
  'Sed ut perspiciatis unde omnis iste natus error ',
  'mistaken idea of denouncing',
  'or again is there anyone who loves',
  'ursues or desires to obtain pain of itself',
  'ursues or desires to obtain pain of itself',
  'Sed ut perspiciatis unde omnis iste natus error',
  'mistaken idea of denouncing',
];

export default class Steps extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>etapas da inscrição</h4>
        <div className={styles.stepContainer}>
          {steps.map((step, i) => (
            <Step key={i * step.length} number={i + 1} caption={step} />
          ))}
          <div className={styles.stepSignUpContainer}>
            <Button background="solid">inscreva-se</Button>
          </div>
        </div>
      </div>
    );
  }
}
