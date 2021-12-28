import { FiPlus } from 'react-icons/fi';
import styles from './styles.module.scss'

export function ContentActions() {
  return (
    <section className={styles.section}>
      <div>
        <h4>Suas tarefas do dia</h4>
        <button>
          <FiPlus size={20} /> Nova Tarefa
        </button>
      </div>
    </section>
  )
}