import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./scenes/Games/Games";
import Users from "./scenes/Users/Users";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./components/Tasks/TaskForm";
import TaskList from "./components/Tasks/TaskList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          {/* <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
