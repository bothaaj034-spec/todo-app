import React, { useState } from 'react';
import useTodoStore from '../store/todoStore';

const TodoForm = () => {
  const { addTodo } = useTodoStore();
  const [text, setText] = useState('');
  const [category, setCategory] = useState('general');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, category, priority);
      setText('');
      setCategory('general');
      setPriority('medium');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
    >
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-dark mb-1">
            What needs to be done?
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new todo..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-dark mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="general">General</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="shopping">Shopping</option>
              <option value="health">Health</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark mb-1">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={!text.trim()}
          className="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
