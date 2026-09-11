import React from 'react';
import useTodoStore from '../store/todoStore';

const FilterBar = () => {
  const { filter, setFilter, searchTerm, setSearchTerm, getStats } = useTodoStore();
  const stats = getStats();

  const filters = [
    { id: 'all', label: 'All', count: stats.total },
    { id: 'active', label: 'Active', count: stats.active },
    { id: 'completed', label: 'Completed', count: stats.completed },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 space-y-3">
      <div>
        <label className="block text-sm font-medium text-dark mb-1">
          Search
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search todos..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-dark mb-2">
          Filter
        </label>
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === f.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-dark hover:bg-gray-200'
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
