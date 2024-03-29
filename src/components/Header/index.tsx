import todoLogo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  const isNewTitleTaskEmpty = title.length === 0;

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit} >
        <input placeholder="Adicione uma nova tarefe" onChange={onChangeTitle} value={title} />

        <button type="submit" disabled={isNewTitleTaskEmpty}>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>

    </header>
  )
}