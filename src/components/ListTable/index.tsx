
import { FiTrash } from 'react-icons/fi';
import { useTasks } from '../../hooks/useTasks';

import styles from './styles.module.scss';

export function ListTable() {
  const { tasks, deleteTask } = useTasks();

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
                <td>{item.duration}h</td>
                <td className={styles.actions}><FiTrash size={20} color='red' onClick={() => deleteTask(item.title)} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}