import Modal from 'react-modal';

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
      <h1>testeee</h1>
    </Modal>
  )
}