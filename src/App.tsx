import { useState, createContext } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

import tasksData from "./data/tasks";
import CompletedTasks from "./components/CompletedTasks";

export interface Task {
  id: number;
  text: string;
  day: string;
  completed: boolean;
  reminder: boolean;
}

export const TaskContext = createContext({
  tasks: tasksData,
  handleDeleteTask: (task: Task) => {},
  handleCompleteTask: (task: Task) => {},
});

function App() {
  const [tasks, setTasks] = useState(tasksData);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const handleDeleteTask = (task: Task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    setCompletedTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  const handleCompleteTask = (task: Task) => {
    setCompletedTasks((prev) => [...prev, task]);
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
      <TaskContext.Provider
        value={{ tasks, handleDeleteTask, handleCompleteTask }}
      >
        <Tasks />
        <CompletedTasks
          tasks={completedTasks}
          onDeleteTask={handleDeleteTask}
        />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
