import Modal from 'react-modal';
import { FiXCircle } from'react-icons/fi';

import styles from './styles.module.scss';
interface newTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose }: newTaskModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <FiXCircle size={32} color='#75ADC4' style={{cursor: 'pointer'}} />
      </button>

      <form className={styles.form}>
        <h2>Adicionar nova tarefa</h2>

        <input 
          type="text"
          placeholder="Título"
        />

        <input 
          type="text"
          placeholder="Duração"
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>
    </Modal>
  )
}