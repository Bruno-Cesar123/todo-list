import { useState, useEffect, FormEvent, useContext } from 'react';
import Modal from 'react-modal';
import { FiXCircle } from'react-icons/fi';

import { TasksContext } from '../../TasksContext';

import styles from './styles.module.scss';

interface newTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose }: newTaskModalProps) {
  const { createTask, tasks } = useContext(TasksContext);

  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(0);

  useEffect(() => {
      localStorage.setItem(
        '@TodoList:tasks',
        JSON.stringify(tasks),
      );
    }, [tasks]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    createTask({
      title,
      duration
    })
  }

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

      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Adicionar nova tarefa</h2>

        <input 
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input 
          type="number"
          placeholder="Duração"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>
    </Modal>
  )
}