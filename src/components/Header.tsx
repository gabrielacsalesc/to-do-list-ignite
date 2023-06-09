import styles from "./Header.module.css";

import TodoLogo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="Logotipo do Todo" />
    </header>
  );
}