import { PureComponent } from 'react';
import styles from './profileText.module.css';

export class ProfileText extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>
          Meu nome é <strong>lorem ipsum</strong>
        </h4>

        <h5 className={styles.subHead}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum
        </h5>

        <p className={styles.textBody}>
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker
        </p>

        <strong>more recently with desktop</strong>
      </div>
    );
  }
}
