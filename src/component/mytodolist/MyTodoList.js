import React from "react";
import "../todo/todo.css";
import { FaRegTrashAlt } from "react-icons/fa";
// import { act } from "react-dom/test-utils";

const MyTodoList = ({ items, deleteItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title, date, time } = item;

        return (
          <div className="output" key={id}>
            <div className="myList">
              <h4>{title}</h4>
              <p>
                {date} by {time}
              </p>
            </div>

            <button className="output-btn" onClick={() => deleteItem(id)}>
              <FaRegTrashAlt />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MyTodoList;
