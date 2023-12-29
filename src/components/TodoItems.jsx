import ToDo from "./ToDo";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <ToDo
            key={item.name}
            toDoName={item.name}
            toDodate={item.dueDate}
            onDeleteClick={onDeleteClick}
          ></ToDo>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
