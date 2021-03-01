import { PureComponent, ReactNode } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  className?: string;
  background: 'solid' | 'gradient';
  children?: ReactNode;
};

const backgroundVariants = {
  solid: styles.solid,
  gradient: styles.gradient,
};

export class Button extends PureComponent<ButtonProps> {
  render() {
    const { children, className, background } = this.props;

    return (
      <div
        className={`${styles.container} ${backgroundVariants[background]} ${className}`}
      >
        {children}
      </div>
    );
  }
}
