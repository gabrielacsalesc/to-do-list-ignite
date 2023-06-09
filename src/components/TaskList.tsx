import { Check, ClipboardText, Trash } from "phosphor-react";
import { TaskTypes } from "./Form";

import styles from "./TaskList.module.css";

type TaskListProps = {
  tasks: TaskTypes[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
};

export function TaskList({ tasks, setTasks }: TaskListProps) {
  const taskCount = tasks.length;
  const taskCompleteCount = tasks.reduce((count, task) => task.isComplete ? count + 1 : count, 0);

  function toggleTaskCompletion(task: TaskTypes) {
    return { ...task, isComplete: !task.isComplete };
  }

  function handleTaskComplete(id: string) {
    setTasks(tasks.map(task => task.id === id ? toggleTaskCompletion(task) : task));
  }

  function handleTaskDelete(id: string) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function renderTaskStatistics() {
    return (
      <div className={styles.completedTask}>
        <p>
          Tarefas criadas <span>{taskCount}</span>
        </p>
        <p>
          Concluídas{" "}
          {taskCount > 0 ? (
            <span>
              {taskCompleteCount} de {taskCount}
            </span>
          ) : (
            <span>{taskCount}</span>
          )}
        </p>
      </div>
    );
  }

  function renderTaskList() {
    return (
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.task}>
            <button
              onClick={() => handleTaskComplete(task.id)}
              className={
                task.isComplete ? styles.btnComplete : styles.btnIncomplete
              }
            >
              <Check weight="bold" />
            </button>
            <span
              className={
                task.isComplete ? styles.taskComplete : styles.taskIncomplete
              }
            >
              {task.title}
            </span>
            <button
              onClick={() => handleTaskDelete(task.id)}
              className={styles.btnDelete}
            >
              <Trash weight="light" />
            </button>
          </li>
        ))}
      </ul>
    );
  }

  function renderEmptyTaskMessage() {
    return (
      <div className={styles.isEmptyList}>
        <ClipboardText weight="light" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong> <br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    );
  }

  return (
    <>
      {renderTaskStatistics()}
      {taskCount > 0 ? renderTaskList() : renderEmptyTaskMessage()}
    </>
  );
}