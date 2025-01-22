import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tasklist = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchTasks = async (data = '') => {
    try {
      const response = await fetch(`/api/filterTasks/${data}`);
      const result = await response.json();

      if (response.ok) {
        setTasks(result);
        setError(null);
      } else {
        setTasks([]);
        setError(result.message || 'No tasks found.');
      }
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setTasks([]);
      setError('Failed to fetch tasks.');
    }
  };

  useEffect(() => {
    fetchTasks(); 
  }, []);

  const handleSearchInput = (e) =>{
    setSearchTerm( e.target.value)
  }
  const handleSearch = (e) => {

    if (searchTerm.trim()) {
      fetchTasks(searchTerm.trim());
    } else {
      fetchTasks(); 
    }
  };

  const handleViewMore = (task) => {
    localStorage.setItem('selectedTask', JSON.stringify(task));
    navigate('/taskitem'); 
  };

  return (
      <div className="bg-black min-h-screen text-white">
        <div className="container mx-auto py-4 ">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-serif">Task List</h1>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                name="search"
                id="search"
                value={searchTerm}
                onChange={handleSearchInput}
                className="h-10 rounded-lg border border-gray-600 bg-gray-700 px-3 text-white focus:ring focus:ring-blue-500"
                placeholder="Search by status (e.g., pending, completed)"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </div>
    
          {/* Error Message */}
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
    
          {/* No Tasks Message */}
          {tasks.length === 0 && !error && (
            <div className="text-gray-400 text-center mb-4">No tasks available.</div>
          )}
    
          {/* Task Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="font-serif text-xl mb-2">{task.title}</h2>
                <p className="font-sans mb-1">
                  <strong>Description:</strong> {task.description}
                </p>
                <p className="font-sans mb-1">
                  <strong>Status:</strong> {task.status}
                </p>
                <p className="font-sans mb-1">
                  <strong>Priority:</strong> {task.priority}
                </p>
                <p className="font-sans mb-4">
                  <strong>Date:</strong> {new Date(task.createdAt).toLocaleString()}
                </p>
                <button
                  onClick={() => handleViewMore(task)}
                  className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
                >
                  View More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}  

export default Tasklist;
