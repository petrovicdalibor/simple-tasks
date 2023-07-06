import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
import { Task } from "../data/tasks";

interface Props {
  tasks: Task[];
  onDeleteTask: (task: Task) => void;
}

function CompletedTasks({ tasks, onDeleteTask }: Props) {
  return (
    <>
      <h2>Completed Tasks</h2>
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
                className="btn btn-danger ms-1"
                onClick={() => {
                  onDeleteTask(task);
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
}

export default CompletedTasks;
