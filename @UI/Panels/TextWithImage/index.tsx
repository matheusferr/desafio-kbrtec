import React, { PureComponent } from 'react';
import { Button } from '@Components';
import { TextHighlight, ImageSquare } from './components';
import styles from './panelTextWithImage.module.css';

export class TextWithImage extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContent}>
            <h3 className={styles.title}>
              standard Lorem Ipsum
              <TextHighlight>Excepteur sint occaec</TextHighlight>
              Lorem ipsum dolor sit ame
              <br /> onsectetur adipiscing elit
              <br /> dolore eu fugiat nulla pariatur!
            </h3>

            <p className={styles.textBody}>
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <div className={styles.textButton}>
              <Button className={styles.textButton} background="solid">
                lorem ipsum idolor
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.rightContent}>
            <ImageSquare />
          </div>
        </div>
      </div>
    );
  }
}
