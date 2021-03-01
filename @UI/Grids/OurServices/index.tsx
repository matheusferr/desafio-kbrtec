import { PureComponent } from 'react';
import ServiceItem, { ServiceItemProps } from './components/ServiceItem';
import styles from './ourServices.module.css';

const firstList: ServiceItemProps[] = [
  {
    icon: 'training',
    alt: 'Person presenting a pie graph',
    caption: 'Palestras',
  },
  {
    icon: 'talk_1',
    alt: 'Person talking to other four people',
    caption: 'Treinamentos e Workshops',
  },
  {
    icon: 'presentation',
    alt: 'Person teaching',
    caption: 'Programas de Formação',
  },
  {
    icon: 'seminar',
    alt: 'Person presenting a line graph',
    caption: 'Consultoria de Gestão',
  },
  {
    icon: 'talk_2',
    alt: 'Person talking to a single person',
    caption: 'Atendimento Individual',
  },
];

export default class OurServices extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>A like Aldus PageMaker including</h4>

        <div className={styles.itemContainer}>
          {firstList.map(({ icon, alt, caption }) => (
            <ServiceItem
              key={icon + caption.length}
              icon={icon}
              alt={alt}
              caption={caption}
            />
          ))}
        </div>

        <div />
      </div>
    );
  }
}
