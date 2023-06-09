import styles from '@/styles/TodoItem.module.css';
import { useState, useRef  } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import propTypes from 'prop-types';

const TodoItem = ({ itemProp , handleChange, delTodo, setUpdate}) => {
  const [editing, setEditing] = useState(false);
  const editInputRef = useRef(null);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>
          <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }}/>
        </button>
        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }}/>
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
    />
    </li>
  );
};

TodoItem.propTypes = {
   itemProp: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired,
   }).isRequired, 
   handleChange: propTypes.func.isRequired, 
   delTodo: propTypes.func.isRequired, 
   setUpdate: propTypes.func.isRequired
  };

export default TodoItem;
