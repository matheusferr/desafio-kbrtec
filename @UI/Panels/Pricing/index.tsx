import { PureComponent } from 'react';
import { CheckList } from '@Components';
import Option from './components/Option';
import styles from './panelPricing.module.css';

const firstList = [
  'Roots in a piece of classical Latin literature from 45 BC, making it over',
  'Many variations of passages of Lorem Ipsum available',
  'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
];

export class Pricing extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContent}>
            <div className={styles.content}>
              <Option variant="contained">
                <h5 className={styles.optionTitle}>
                  Lorem Ipsum has been the industry&apos;s
                </h5>
                <h4 className={styles.optionPrice}>R$24.997,00</h4>
              </Option>
            </div>

            <div className={styles.content}>
              <h4 className={styles.title}>Lorem Ipsum is therefore</h4>

              <p className={styles.text}>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s,
              </p>

              <p className={styles.text}>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard
              </p>

              <p className={styles.text}>
                Remaining essentially unchanged. It was popularised in the 1960s
                with the <strong>release of Letraset</strong> sheets containing
                Lorem Ipsum passages, and more
              </p>
            </div>

            <div className={styles.content}>
              <h4 className={styles.title}>
                Roots in a piece of classical Latin literature from
              </h4>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.rightContent}>
            <div className={styles.content}>
              <Option variant="outline">
                <p className={styles.optionTitle}>ou</p>
                <h4 className={styles.optionPrice}>R$15.000,00</h4>
                <p className={styles.optionTitle}>
                  Ipsum has been the industry&apos;fi standard dummy text ever
                  since the 15000.
                </p>
              </Option>
            </div>

            <div className={styles.content}>
              <h5 className={styles.title}>
                Web sites still in their infancy. Various versions have evolved
                over the years, sometimes
              </h5>
            </div>

            <div className={styles.content}>
              <CheckList data={firstList} />
            </div>

            <div className={styles.content}>
              <h4 className={styles.title}>
                The theory of ethics, very popular during the Renaissance.
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
