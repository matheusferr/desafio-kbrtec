import { PureComponent, ReactNode } from 'react';
import styles from './option.module.css';

type OptionProps = {
  variant: 'contained' | 'outline';
  children?: ReactNode;
};

export default class Option extends PureComponent<OptionProps> {
  render() {
    const { variant, children } = this.props;

    return (
      <div
        className={`${styles.container} ${
          variant === 'contained'
            ? styles.variantContained
            : styles.variantOutline
        }`}
      >
        {children}
      </div>
    );
  }
}
