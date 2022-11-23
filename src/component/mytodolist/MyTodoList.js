import React from "react";
import "../todo/todo.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { act } from "react-dom/test-utils";

const MyTodoList = ({ items, deleteItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title, date, time } = item;

        // let timestamp = item.date;
        // console.log(timestamp);
        // let dte = new Date(timestamp);
        // // let day = dte.getDate();
        // // let month = dte.getMonth() + 1;
        // // let year = dte.getFullYear();
        // let tim = dte.toDateString();
        // // timestamp = dte;
        // let formattedTime = `${tim}`;
        // console.log(formattedTime);

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
