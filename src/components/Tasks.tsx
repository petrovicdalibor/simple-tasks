import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { useContext } from "react";
import { TaskContext } from "../App";

const Tasks = () => {
  const { tasks, handleDeleteTask, handleCompleteTask } =
    useContext(TaskContext);

  return (
    <>
      <h2>Current Tasks</h2>
      <ul className="list-group mt-4">
        {tasks.map((task) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={task.text}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{task.text}</div>
              {task.day}
            </div>
            <div>
              <button
                className="btn btn-success"
                onClick={() => {
                  handleCompleteTask(task);
                }}
              >
                <FaCheck />
              </button>
              <button
                className="btn btn-danger ms-1"
                onClick={() => {
                  handleDeleteTask(task);
                }}
              >
                <FaTrashAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
