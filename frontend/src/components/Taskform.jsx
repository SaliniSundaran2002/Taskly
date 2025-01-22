import React, { useState } from 'react';
import { toast} from 'react-toastify';

const Taskform = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const handlSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      status,
      priority,
      date,
    };
    try {
      const res = await fetch('/api/addTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      if (res.ok) {
        toast.success('Task added successfully!');
        console.log('Task added');
      } else {
        toast.error('Task already added.');
        console.error('Failed to add task');
      }
    } catch (error) {
      toast.error('Error adding Task');
      console.error('Error adding Task');
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-bold text-white mb-6">Add Task</h1>
        <form onSubmit={handlSubmit}>
          <div className="mb-4">
            <label htmlFor="taskname" className="block text-gray-300 font-medium mb-2">
              Task Title:
            </label>
            <input
              type="text"
              id="taskname"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-12 px-4 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="desc" className="block text-gray-300 font-medium mb-2">
              Task Description:
            </label>
            <textarea
              id="desc"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-24 px-4 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-300">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="" disabled selected>
                Choose a Level
              </option>
              <option value="pending">Pending</option>
              <option value="in-process">In-Process</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-300">Priority</label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="" disabled selected>
                Choose a Level
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="taskdate" className="block text-gray-300 font-medium mb-2">
              Task Date:
            </label>
            <input
              type="date"
              id="taskdate"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-12 px-4 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Taskform;
