import { PureComponent, ReactNode } from 'react';
import styles from './texthighlight.module.css';

type TextHighlightProps = {
  children: ReactNode;
};

export class TextHighlight extends PureComponent<TextHighlightProps> {
  render() {
    const { children } = this.props;

    return <span className={styles.container}>{children}</span>;
  }
}
