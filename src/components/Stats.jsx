import React from 'react';
import useTodoStore from '../store/todoStore';

const Stats = () => {
  const { getStats, clearCompleted } = useTodoStore();
  const stats = getStats();
  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm opacity-90">Total Tasks</p>
          <p className="text-3xl font-bold">{stats.total}</p>
        </div>
        <div>
          <p className="text-sm opacity-90">Completed</p>
          <p className="text-3xl font-bold">{stats.completed}</p>
        </div>
        <div>
          <p className="text-sm opacity-90">Progress</p>
          <p className="text-3xl font-bold">{completionRate}%</p>
        </div>
      </div>

      <div className="w-full bg-white/20 rounded-full h-2 mb-4">
        <div
          className="bg-white h-2 rounded-full transition-all duration-300"
          style={{ width: `${completionRate}%` }}
        />
      </div>

      <button
        onClick={clearCompleted}
        disabled={stats.completed === 0}
        className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Stats;
