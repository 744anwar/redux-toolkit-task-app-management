import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/taskSlice";
import PropTypes from "prop-types";

const EditTask = ({ id, title:initialTitle, description: initialDescription, status:initialStatus }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(initialTitle || "");
  const [description, setDescription] = useState(initialDescription || "");
  const [status, setStatus] = useState(initialStatus || "To Do");
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({id, title, description, status}));
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <div className="absolute bg-white p-4 border rounded-md shadow-lg z-10">
          <h2 className="text-xl font-semibold mb-3 text-indigo-500">
            Edit Task
          </h2>
          <div className="mb-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task Title"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
              required
            />
          </div>
          <div>
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
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-2 rounded-md hover:bg-indigo-700"
              onClick={handleEdit}
            >
              Save
            </button>
            <button
              className="bg-gray-600 text-white py-2 px-2 rounded-md hover:bg-gray-700"
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};


EditTask.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    status:PropTypes.string,
};

export default EditTask;
