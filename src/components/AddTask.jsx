import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid4(),
      title,
      description,
      status,
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-indigo-500">
        Add New Task
      </h2>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
          name="description"
          id="desc"
          placeholder="Task Description"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <select
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          name="status-select"
          id="select"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">Add Task</button>
    </form>
  );
};

export default AddTask;
