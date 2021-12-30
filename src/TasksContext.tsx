import { createContext, useState, useEffect, ReactNode } from 'react';

interface Task {
  title: string;
  duration: number;
}

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  createTask: (task: Task) => void;
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storagedTasks = localStorage.getItem(
      '@TodoList:tasks',
    );

    if (storagedTasks) {
      return JSON.parse(storagedTasks);
    }

    return [];
  });

  function createTask(task: Task) {
    const newTask = [...tasks, task];
    setTasks(newTask)

    localStorage.setItem('@TodoList:tasks', JSON.stringify(newTask))
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  )
}