import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fetchTodo, setFilterStatus } from "../redux/taskSlice";
import EditTask from "./EditTask";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks || []);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const filterStatus = useSelector((state) => state.tasks.filterStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo()); 
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilterStatus(e.target.value));
  };

  const filteredTasks = tasks.filter(
    (task) => filterStatus === "All" || task.status === filterStatus
  );

  if (loading) {
    return <p>Tasks Loading .......</p>;
  }
  if (error) {
    return <p>there is an error {error} </p>;
  }
  if (!tasks.length) {
    return <p>No task available</p>;
  }

  return (
    <div>
      <div className="">
        <div className="flex justify-between m-2">
          <h2 className="text-lg font-medium p-2">Tasks</h2>
          <div className="flex gap-2">
            <h2 className="text-lg font-medium p-2">Filter:</h2>
            <select
              name=""
              id=""
              value={filterStatus}
              onChange={handleFilterChange}
              className="p-2 border rounded-md focus:outline-none focus:ring-2"
            >
              <option value="All">All</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <ul className="space-y-4">
          {filteredTasks.slice().reverse().map((task) => (
            <li
              key={task.id}
              className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Title: {task.title}{" "}
                </h3>
                {task.description ? (
                  <p className="text-gray-600"> {task.description}</p>
                ) : (
                  <p className="text-gray-600">No description available</p>
                )}
                <p className="mt-1 text-sm font-semibold">
                  Status:{" "}
                  <span className="italic underline">{task.status}</span>{" "}
                </p>
              </div>
              <div className="flex space-x-2">
                <EditTask
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                />
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
