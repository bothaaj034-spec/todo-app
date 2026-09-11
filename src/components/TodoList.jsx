import React from 'react';
import useTodoStore from '../store/todoStore';

const TodoList = () => {
  const { getFilteredTodos } = useTodoStore();
  const TodoItem = React.lazy(() => import('./TodoItem'));
  const todos = getFilteredTodos();

  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 text-sm">No todos found. Add one to get started! ✨</p>
        </div>
      ) : (
        todos.map((todo) => (
          <React.Suspense key={todo.id} fallback={<div className="p-3 bg-gray-50 rounded animate-pulse" />}>
            <TodoItem todo={todo} />
          </React.Suspense>
        ))
      )}
    </div>
  );
};

export default TodoList;
