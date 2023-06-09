import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { PlusCircle } from "phosphor-react";

import styles from "./Form.module.css";

export type TaskTypes = {
  id: string;
  title: string;
  isComplete: boolean;
};

type FormProps = {
  tasks: TaskTypes[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
};

export function Form({ tasks, setTasks }: FormProps) {
  const [newTask, setNewTask] = useState("");

  function createNewTask(title: string) {
    return { id: uuid(), title: title, isComplete: false };
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setTasks([createNewTask(newTask), ...tasks]);
    setNewTask("");
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleInput}
        required
      />
      <button type="submit" title="Criar nova tarefa">
        Criar <PlusCircle />
      </button>
    </form>
  );
}