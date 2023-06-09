import styles from './App.module.css'
import { Header } from './components/Header';
import { Form, TaskTypes } from './components/Form';

import "./global.css";
import { useState } from 'react';
import { TaskList } from './components/TaskList';


export function App() {

  const [tasks, setTasks] = useState<TaskTypes[]>([]);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Form tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </main>
      </div>
    </div>
  )
}
