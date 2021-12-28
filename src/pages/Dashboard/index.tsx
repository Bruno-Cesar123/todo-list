import { ContentActions } from '../../components/ContentActions';
import { Header } from '../../components/Header';
import { ListTable } from '../../components/ListTable';
import styles from './styles.module.scss';

export function Dashboard() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ContentActions />
        <ListTable />
      </main>
    </>
  )
}