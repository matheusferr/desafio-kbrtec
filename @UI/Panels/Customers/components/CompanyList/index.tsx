import { PureComponent } from 'react';
import CompanyItem from './components/CompanyItem';
import styles from './companyList.module.css';

export default class CompanyList extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <CompanyItem value="image 34" alt="Globo" />
          <CompanyItem value="g1-logo-1 1" alt="G1" />
        </div>
        <div className={styles.content}>
          <CompanyItem value="image 35" alt="UOL" />
          <CompanyItem value="bandnews-logo 1" alt="BandNews" />
          <CompanyItem value="n56ygq-logos-08 1" alt="Vendamais" />
        </div>
        <div className={styles.content}>
          <CompanyItem value="cbn-logo 1" alt="CBN" />
          <CompanyItem value="image 36" alt="O Globo" />
          <CompanyItem value="image 37" alt="Época Negócios" />
        </div>
      </div>
    );
  }
}
