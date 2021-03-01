import { PureComponent } from 'react';
import Plan from './components/Plan';
import styles from './plans.module.css';

const planList = [
  {
    name: 'Formação como Coach',
    price: '7.000',
    duration: '8 dias',
  },
  {
    name: 'Formação em Coaching Express',
    price: '8.000',
  },
  {
    name: 'Formação em Oratória e Curso de Palestrante',
    price: '2.497',
  },
  {
    name: 'Uma formação em consultoria em gestão',
    price: '4.000',
    duration: '16 horas',
  },
  {
    name: 'Programas de formação e treinamento corporativo',
    price: '3.500',
    duration: '16 horas',
  },
];

export default class Plans extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <h5 className={styles.title}>
          Noodel text, and a search for &apos;lorem ipsum&apos; will uncover
          many web
        </h5>

        <div className={styles.plansContainer}>
          {planList.map(({ name, price, duration }, i) => (
            <Plan
              key={i * name.length}
              name={name}
              price={price}
              duration={duration}
            />
          ))}
        </div>
      </div>
    );
  }
}
