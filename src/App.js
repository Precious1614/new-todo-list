import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./component/todo/Todo";
import Register from "./pages/register/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      {/* <Register /> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;
