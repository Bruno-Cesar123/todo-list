import { useState } from 'react';
import Modal from 'react-modal';
import { NewTaskModal } from './components/NewTaskModal';
import { ContentActions } from './components/ContentActions';
import { Dashboard } from './pages/Dashboard';
import { TasksProvider } from './TasksContext';

import './styles/global.scss';

Modal.setAppElement('#root');

function App() {
  const [isNewTaskModalOpen, setIsNewTaskMoalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskMoalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskMoalOpen(false);
  }
  return (
    <TasksProvider>
      <Dashboard>
        <ContentActions onOpenNewTaskModal={handleOpenNewTaskModal} />
      </Dashboard>
      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onRequestClose={handleCloseNewTaskModal}
      />
    </TasksProvider>
  );
}

export default App;
