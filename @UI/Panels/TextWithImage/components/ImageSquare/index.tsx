import { PureComponent } from 'react';
import SquarePath from './components/SquarePath';
import Stop from './components/Stop';
import styles from './imagesquare.module.css';

export class ImageSquare extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <svg className={styles.image} viewBox="1 1 8 8">
          <pattern
            id="image"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <image href="/image1.png" x="0" y="0" height="10" width="10" />
          </pattern>
          <SquarePath fill="url(#image)" />
        </svg>

        <svg viewBox="1 1 8 8">
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="blue-500" />
            <Stop offset="100%" stopColor="white" />
          </linearGradient>
          <SquarePath fill="url(#grad1)" />
        </svg>
      </div>
    );
  }
}
