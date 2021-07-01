import React from 'react'
import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

const Todo = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")
    ));
    
    const deleteTask = (id) => {
        localStorage.setItem("tasks", JSON.stringify(tasks.filter((task) => task.id !== id)));
        setTasks(tasks.filter((task) => task.id !== id))
        console.log("here");

      }
    
      const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id===id
        ? { ...task, reminder:!task.reminder } : task))
      }
    
      const addTask = (task) => {
        const id = Math.floor(Math.random()* 10000 )+1
        const newTask = {id, ...task}
        console.log("aici:");
        console.log([...tasks,newTask]);
        setTasks([...tasks,newTask])
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

      }
    
    return (
      <div className="to-do-container">
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          {showAddTask ? (<AddTask onAdd={addTask}/>) : ''}
          {tasks.length>0 ? 
              (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
              : ('No Tasks to Show')}
      </div>
    )
}

export default Todo
