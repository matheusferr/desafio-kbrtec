import { PureComponent } from 'react';
import { Button } from '@Components';
import CheckList from './components/CheckList';
import styles from './panelVersions.module.css';

const firstList = [
  'On the other hand, we denounce',
  'With righteous indignation',
  'Dislike men who are so beguiled',
  'Demoralized by the charms of pleasure',
];

const secondList = [
  'Tenetur a sapiente delectus',
  'Taque earum rerum hic',
  'Beguiled and demoralized',
];

const thirdList = [
  'Pleasure and praising pain was born',
  'Nnisi ut aliquid ex ea commodi consequatur',
  'Undertakes laborious physical exercise',
  'Pleasure that',
  'Et harum quidem rerum',
  'Nam libero tempore, cum soluta nobis ',
];

export class Versions extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContent}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>
                versions of lorem
                <br /> ipsumletraset sheets
              </h3>

              <h4 className={styles.titleCaption}>publishing software like</h4>
            </div>

            <div className={styles.content}>
              <p className={styles.text}>
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem IpsumLetraset
              </p>

              <p className={styles.text}>
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem IpsumLetraset
              </p>

              <CheckList data={firstList} />

              <p className={styles.listText}>Tenetur a sapient</p>
            </div>

            <div className={styles.content}>
              <h5 className={styles.titleCaption}>
                1914 translation by h. rackham
              </h5>

              <CheckList data={secondList} />
            </div>
            <div className={styles.content}>
              <h5 className={styles.titleCaption}>
                richard mcclintock, a latin:
              </h5>

              <p className={styles.text}>
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem IpsumLetraset
              </p>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.rightContent}>
            <div className={styles.titleContainer}>
              <h4 className={styles.title}>
                versions of lorem
                <br /> ipsumletraset sheets
              </h4>

              <h5 className={styles.titleCaption}>
                Awill uncover many red alteration
                <br /> in some form, by injected
              </h5>
            </div>

            <div className={styles.content}>
              <CheckList data={thirdList} />
            </div>

            <div className={styles.content}>
              <p className={styles.text}>
                <strong>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                </strong>{' '}
                from 45 BC, making it over 2000 years old. Richard McClintock
              </p>

              <p className={styles.text}>
                <strong>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                </strong>{' '}
                reproduced below for those interested. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested.Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for &apos;lorem ipsum&apos; will uncover many web sites still in
                their infancy.
              </p>

              <p className={styles.text}>
                <strong>
                  You are going to use a passage of Lorem Ipsum, you need to be
                  sure
                </strong>{' '}
                there isn&apos;t anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators
              </p>
            </div>

            <div className={styles.content}>
              <h5 className={styles.titleCaption}>
                is simply dummy text simply
                <br /> dummy text of the printing
                <br /> and typesetting industry.
                <br /> Lorem Ipsum
              </h5>
            </div>

            <div className={styles.content}>
              <Button background="solid">it is a long establish</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
