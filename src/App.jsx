import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import Stats from './components/Stats';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">📝 Todo App</h1>
          <p className="text-gray-600">Stay organized and productive with your personal task manager</p>
        </div>

        {/* Stats */}
        <div className="mb-6">
          <Stats />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Add Todo Form */}
          <TodoForm />

          {/* Filter Bar */}
          <FilterBar />

          {/* Todo List */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-dark mb-4">Tasks</h2>
            <TodoList />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>💾 Your todos are automatically saved to your browser's local storage</p>
        </div>
      </div>
    </div>
  );
}

export default App;
