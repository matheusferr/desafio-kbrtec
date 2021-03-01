import { PureComponent } from 'react';

type SquarePathProps = {
  fill: string;
};

export default class SquarePath extends PureComponent<SquarePathProps> {
  render() {
    const { fill } = this.props;

    return (
      <path
        d="M5.5 1.5 L8.5 4.5 Q9 5 8.5 5.5 L5.5 8.5 Q5 9 4.5 8.5 L 1.5 5.5 Q1 5 1.5 4.5 L4.5 1.5 Q 5 1 5.5 1.5z"
        fill={fill}
      />
    );
  }
}
