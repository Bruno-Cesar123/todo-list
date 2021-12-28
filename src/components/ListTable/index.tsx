import { FiTrash } from 'react-icons/fi';

import styles from './styles.module.scss';

export function ListTable() {
  return (
    <section className={styles.section}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nome da tarefa</th>
            <th>Duração</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Aprender Node</td>
            <td>02:00</td>
            <td className={styles.status}>Executando</td>
            <td className={styles.actions}><FiTrash size={20} color='red' /></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Aprender python</td>
            <td>02:00</td>
            <td className={styles.status}>Executando</td>
            <td className={styles.actions}><FiTrash size={20} color='red' /></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Aprender java</td>
            <td>02:00</td>
            <td className={styles.status}>Executando</td>
            <td className={styles.actions}><FiTrash size={20} color='red' /></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}