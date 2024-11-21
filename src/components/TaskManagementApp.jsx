import AddTask from "./AddTask";
import Tasks from "./Tasks";


const TaskManagementApp = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">Task Management App</h2>
      <AddTask />
      <Tasks />
    </div>
  )
}

export default TaskManagementApp;
