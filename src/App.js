import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react";
import AddTask from './components/AddTask';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// const name = "";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState(
    [
      {id: 1, text: "Shopping", day: "Monday", reminder: true},
      {id: 2, text: "Read", day: "Wednesday", reminder: false},
      {id: 3, text: "Read", day: "Tuesday", reminder: true}
  ]);

  // Add Task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random()* 1000)+1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  };
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id ));  
  };

  // Toggle Reminder
  const toggleReminder = (id) =>{
    console.log(id);
    setTasks(
     tasks.map((task) => 
      task.id === id ? {...task, reminder : 
      !task.reminder } : task  
     )
    )
  }

  // Toggle showAdd Task
  const toggleAddTask = () =>{
    setShowAddTask(!showAddTask);
  }

  return (    
    <div className="container"> 
      <Header onAddTask={toggleAddTask} showAddTask={showAddTask} />  
      { showAddTask && <AddTask onAdd={addTask} /> }   
      
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleReminder} /> :
       'No tasks' }       
    </div>
  );
}

export default App;
