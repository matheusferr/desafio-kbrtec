import { PureComponent } from 'react';

type StopProps = {
  offset: string;
  stopColor: 'white' | 'blue-500';
};

const stopColors = {
  white: 'stop-white',
  'blue-500': 'stop-blue-500',
};

export default class index extends PureComponent<StopProps> {
  render() {
    const { offset, stopColor } = this.props;

    return <stop offset={offset} className={`${stopColors[stopColor]}`} />;
  }
}
