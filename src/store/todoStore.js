import { create } from 'zustand';

const STORAGE_KEY = 'todos';

const useTodoStore = create((set, get) => ({
  todos: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
  filter: 'all', // all, active, completed
  searchTerm: '',

  addTodo: (text, category = 'general', priority = 'medium') => {
    const newTodo = {
      id: Date.now(),
      text,
      category,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: null,
    };
    const todos = [...get().todos, newTodo];
    set({ todos });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },

  deleteTodo: (id) => {
    const todos = get().todos.filter((todo) => todo.id !== id);
    set({ todos });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },

  toggleTodo: (id) => {
    const todos = get().todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    set({ todos });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },

  updateTodo: (id, updates) => {
    const todos = get().todos.map((todo) =>
      todo.id === id ? { ...todo, ...updates } : todo
    );
    set({ todos });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },

  setFilter: (filter) => set({ filter }),

  setSearchTerm: (searchTerm) => set({ searchTerm }),

  getFilteredTodos: () => {
    const { todos, filter, searchTerm } = get();
    let filtered = todos;

    if (filter === 'active') {
      filtered = filtered.filter((todo) => !todo.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter((todo) => todo.completed);
    }

    if (searchTerm) {
      filtered = filtered.filter((todo) =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  },

  clearCompleted: () => {
    const todos = get().todos.filter((todo) => !todo.completed);
    set({ todos });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },

  getStats: () => {
    const todos = get().todos;
    return {
      total: todos.length,
      completed: todos.filter((t) => t.completed).length,
      active: todos.filter((t) => !t.completed).length,
    };
  },
}));

export default useTodoStore;
