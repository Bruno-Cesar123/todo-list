import { ReactNode } from 'react';
import { ContentActions } from '../../components/ContentActions';
import { Header } from '../../components/Header';
import { ListTable } from '../../components/ListTable';
import styles from './styles.module.scss';

interface DashboardProps {
  children: ReactNode;
}

export function Dashboard({ children }: DashboardProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
        <ListTable />
      </main>
    </>
  )
}