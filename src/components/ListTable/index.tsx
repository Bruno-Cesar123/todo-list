
import { useContext } from 'react';
import { FiTrash } from 'react-icons/fi';
import { TasksContext } from '../../TasksContext';

import styles from './styles.module.scss';

export function ListTable() {
  const { tasks } = useContext(TasksContext);

  return (
    <section className={styles.section}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nome da tarefa</th>
            <th>Duração</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => {
            return (
              <tr key={item.title}>
                <td><input type="checkbox" /></td>
                <td>{item.title}</td>
                <td>{item.duration}</td>
                <td className={styles.actions}><FiTrash size={20} color='red' /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}