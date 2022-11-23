import React, { useState, useEffect } from "react";
import "./todo.css";

import MyTodoList from "../mytodolist/MyTodoList";

const getLocalStorage = () => {
  let listedItems = localStorage.getItem("listedItems");
  if (listedItems) {
    return JSON.parse(localStorage.getItem("listedItems"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputedtext, SetInputedtext] = useState("");
  const [inputeddate, setInputeddate] = useState();
  const [inputedtime, setInputedTime] = useState("");
  const [listedItems, setListedItems] = useState(getLocalStorage());

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputedtext) {
      alert("your todo?");
    }
    if (!inputeddate || !inputedtime) {
      alert("your todo?");
    } else {
      //   setListedItems("");
      let timestamp = inputeddate;
      console.log(timestamp);
      let dte = new Date(timestamp);
      let newDate = dte.toDateString();
      let formattedTime = `${newDate}`;
      console.log(formattedTime);

      const newTodoItems = {
        // id: new Date().getTime(),
        id: Math.floor(Math.random() * 10000) + 1,
        title: inputedtext,
        date: formattedTime,
        time: inputedtime,
      };
      setListedItems([...listedItems, newTodoItems]);
      SetInputedtext("");
      setInputeddate("");
      setInputedTime("");
      console.log(newTodoItems);
      console.log(inputeddate);
      // console.log(timestamp);
    }
  }
  const deleteItem = (id) => {
    setListedItems(listedItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("listedItems", JSON.stringify(listedItems));
  }, [listedItems]);

  return (
    <div className="showcase">
      <div className="showcase-content">
        <h2>My TO-DO List</h2>
        <div className="showcase-right">
          {/* <button>add</button> */}
          <form className="form-card" onSubmit={handleSubmit}>
            <div className="form-content">
              <label>Task</label>
              <input
                type="text"
                name=""
                placeholder="Add Task"
                value={inputedtext}
                onChange={(e) => SetInputedtext(e.target.value)}
              />
            </div>
            <div className="form-content">
              <div className="form-date-time">
                <div className="form-date">
                  <label>Date</label>
                  <input
                    type="date"
                    name=""
                    id=""
                    value={inputeddate}
                    onChange={(e) => setInputeddate(e.target.value)}
                  />
                </div>
                <div className="form-date">
                  <label htmlFor="">Time</label>
                  <input
                    type="time"
                    name=""
                    id=""
                    value={inputedtime}
                    onChange={(e) => setInputedTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="save-btn">
              Save Task
            </button>
          </form>
        </div>
        <div className="todo-output">
          <MyTodoList items={listedItems} deleteItem={deleteItem} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
