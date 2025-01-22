import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Taskitem = () => {
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedTask = localStorage.getItem('selectedTask');
    if (savedTask) {
      const taskData = JSON.parse(savedTask);
      setTask(taskData);
      setEditedTask(taskData);
    }
  }, []);

  const handleRemove = async () => {
    try {
      const response = await fetch(`/api/deleteTask/${task._id}`, { method: 'DELETE' });
      if (response.ok) {
        toast.success('Task deleted successfully.');
        navigate('/task-list');
      } else {
        throw new Error('Failed to delete task');
      }
    } catch (err) {
      console.error('Error deleting task:', err);
      toast.error('Failed to delete task.');
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/updateTask/${task._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedTask),
      });
      if (response.ok) {
        const updatedTask = await response.json();
        setTask(updatedTask);
        setIsEditing(false);
        toast.success('Task updated successfully.');
      } else {
        throw new Error('Failed to update task');
      }
    } catch (err) {
      
      toast.error('Internal Server Error!.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({ ...prev, [name]: value }));
  };

  if (!task) {
    return (
      <div className="text-center mt-10 text-red-500">
        No task details available.
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full p-6 bg-gray-800 rounded-lg shadow-md">
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <div className="mb-4">
            <label className="block text-gray-300 font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={editedTask.title}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={editedTask.description}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2" htmlFor="status">
                Status
              </label>
              <select
                name="status"
                id="status"
                value={editedTask.status}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:ring focus:ring-blue-500"
              >
                <option value="pending">Pending</option>
                <option value="In-Progress">In-Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
              >
                Save 
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white py-2 px-6 rounded-lg ml-4 hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="pb-4 mb-4">
            <h1 className="text-2xl font-semibold text-white mb-2">Title</h1>
              <h1 className="text-xl font-bold text-white mb-2">{task.title}</h1>
              <span className="text-sm text-gray-400">
                Status: <span className="font-semibold">{task.status}</span>
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Description</h2>
              <p className="text-gray-400 leading-relaxed">{task.description}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Additional Details
              </h2>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  <strong>Priority:</strong> {task.priority}
                </li>
                <li>
                  <strong>Created At:</strong> {task.createdAt}
                </li>
              </ul>
            </div>
            <div className="mt-8 text-right">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
              >
                Edit Task
              </button>
              <button
                onClick={handleRemove}
                className="bg-red-500 text-white py-2 px-6 rounded-lg ml-4 hover:bg-red-600"
              >
                Delete Task
              </button>
            </div>
          </>
        )}
      </div>
    </div>




  );
};

export default Taskitem;
