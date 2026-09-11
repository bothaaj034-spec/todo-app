import React from 'react';
import useTodoStore from '../store/todoStore';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, updateTodo } = useTodoStore();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(todo.text);

  const handleSaveEdit = () => {
    if (editText.trim()) {
      updateTodo(todo.id, { text: editText });
      setIsEditing(false);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-danger';
      case 'medium':
        return 'border-l-warning';
      case 'low':
        return 'border-l-success';
      default:
        return 'border-l-primary';
    }
  };

  return (
    <div
      className={`animate-slide-in flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border-l-4 ${getPriorityColor(
        todo.priority
      )} hover:shadow-md transition-shadow`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary cursor-pointer"
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSaveEdit}
          onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit()}
          autoFocus
          className="flex-1 px-2 py-1 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      ) : (
        <div className="flex-1">
          <p
            className={`text-sm font-medium ${
              todo.completed
                ? 'line-through text-gray-400'
                : 'text-dark'
            }`}
          >
            {todo.text}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
              {todo.category}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded ${
                todo.priority === 'high'
                  ? 'bg-danger/20 text-danger'
                  : todo.priority === 'medium'
                  ? 'bg-warning/20 text-warning'
                  : 'bg-success/20 text-success'
              }`}
            >
              {todo.priority}
            </span>
          </div>
        </div>
      )}

      <div className="flex gap-1">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1 text-primary hover:bg-primary/10 rounded transition-colors"
          title="Edit"
        >
          ✏️
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-1 text-danger hover:bg-danger/10 rounded transition-colors"
          title="Delete"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
