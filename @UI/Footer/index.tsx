import { PureComponent } from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

export class Footer extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={238 * 0.5}
            height={342 * 0.5}
          />

          <div className={styles.copyright}>
            <strong>
              Copyright © 2019 - Avaliação KBRTEC Fevereiro de 2021
            </strong>
            <p>Av. Senador Feijó, 686 - Vila Matias, Santos - SP, 11015-504</p>
          </div>

          <div className={styles.signature}>
            <p>Design by</p>
            <Image
              src="/Group.svg"
              alt="KBRTEC logo"
              width={99.4}
              height={15.53}
            />
          </div>
        </div>
      </div>
    );
  }
}
