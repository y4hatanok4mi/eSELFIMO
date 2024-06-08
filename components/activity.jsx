import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../components/main.css';
import modIcon from './Resource/book.png';
import camIcon from './Resource/phone.png';
import actIcon from './Resource/activity.png';
import userIcon from './Resource/user.png';

const ActivityPage = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (!taskInput) {
      alert('Please enter a task.');
      return;
    }
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };

  const handleEditTask = (index) => {
    const newTask = prompt('Edit your task:', tasks[index]);
    if (newTask !== null && newTask !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTask;
      setTasks(updatedTasks);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const navigate = useNavigate();

  const handleNavigateToMod = () => {
    navigate('/modules');
  };
  const handleNavigateToCam = () => {
    navigate('/cam');
  };
  const handleNavigateToProf = () => {
    navigate('/profile');
  };
  const handleNavigateToAct = () => {
    navigate('/activity');
  };

  return (
    <div className="Main-BG">
      <header className="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <div className="main-logo">
              <a className="navbar-brand" onClick={handleNavigateToMod} style={{cursor: 'pointer'}}>
                <span className="highlight">e</span>SELFI<span className="highlight">Mo</span>
              </a>
            </div>
            <div className="navbar-center">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" onClick={handleNavigateToMod} style={{cursor: 'pointer'}}>
                    <img className="iconitem" src={modIcon} alt="Module" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={handleNavigateToCam} style={{cursor: 'pointer'}}>
                    <img className="iconitem" src={camIcon} alt="Module" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={handleNavigateToAct} style={{cursor: 'pointer'}}>
                    <img className="iconitem" src={actIcon} alt="Module" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={handleNavigateToProf} style={{cursor: 'pointer'}}>
                    <img className="iconitem" src={userIcon} alt="Module" />
                  </a>
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2 search-bar" type="search" placeholder="Circumference" aria-label="Search" />
            </form>
          </nav>
        </div>
      </header>

      <div className="task-container">
        <div className="task-list">
          <h2>Tasks</h2>
          <ul className="tasks">
            {tasks.map((task, index) => (
              <li key={index}>
                <span>{task}</span>
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button className="delete" onClick={() => handleDeleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="task-input">
          <h2>Add a Task</h2>
          <input type="text" id="taskInput" placeholder="Enter your task here..." value={taskInput} onChange={handleInputChange} />
          <button className="task-btn" onClick={handleAddTask}>Add Task</button>
        </div>
      </div>

      <div className="footer">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="modules.html">
              <img className="iconitem" src={modIcon} alt="Module" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="cam.html">
              <img className="iconitem" src={camIcon} alt="Module" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="activity.html">
              <img className="iconitem" src={actIcon} alt="Module" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="profile.html">
              <img className="iconitem" src={userIcon} alt="Module" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActivityPage;
