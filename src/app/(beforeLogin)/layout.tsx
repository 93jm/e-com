import { ReactNode } from 'react';
import * as styles from '@/app/(beforeLogin)/_component/main.css';

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
