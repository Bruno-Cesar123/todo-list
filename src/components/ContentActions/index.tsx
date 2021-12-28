import { FiPlus } from 'react-icons/fi';
import styles from './styles.module.scss'

interface contentActionsProps {
  onOpenNewTaskModal: () => void;
}

export function ContentActions({ onOpenNewTaskModal }: contentActionsProps) {
  return (
    <section className={styles.section}>
      <div>
        <h4>Suas tarefas do dia</h4>
        <button type='button' onClick={onOpenNewTaskModal}>
          <FiPlus size={20} /> Nova Tarefa
        </button>
      </div>
    </section>
  )
}