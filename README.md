# 📝 Todo App

A modern, feature-rich to-do list application built with React and Tailwind CSS. All your todos are automatically saved to your browser's local storage, so you never lose your tasks!

## ✨ Features

- ✅ **Add, Edit & Delete Todos** - Manage your tasks with ease
- 🏷️ **Categories** - Organize todos by category (General, Work, Personal, Shopping, Health)
- 🎯 **Priority Levels** - Mark todos as Low, Medium, or High priority
- 🔍 **Search Functionality** - Quickly find specific todos
- 📊 **Smart Filtering** - View All, Active, or Completed todos
- 💾 **Local Storage** - All data persists in your browser
- 📈 **Progress Tracking** - Visual progress bar and completion stats
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bothaaj034-spec/todo-app.git
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
todo-app/
��── src/
│   ├── components/
│   │   ├── TodoForm.jsx      # Form to add new todos
│   │   ├── TodoItem.jsx      # Individual todo item component
│   │   ├── TodoList.jsx      # List of todos
│   │   ├── FilterBar.jsx     # Search and filter controls
│   │   └── Stats.jsx         # Statistics and progress
│   ├── store/
│   │   └── todoStore.js      # Zustand state management with local storage
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Tailwind CSS styles
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Zustand** - State management with local storage persistence
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing

## 📝 Usage

### Adding a Todo
1. Enter your task in the input field
2. Select a category from the dropdown
3. Choose a priority level
4. Click "Add Todo" or press Enter

### Managing Todos
- **✓ Complete**: Click the checkbox to mark as done
- **📝 Edit**: Click the pencil icon and press Enter
- **🗑️ Delete**: Click the trash icon to remove

### Filtering & Searching
- Use the **Filter** buttons to view All, Active, or Completed todos
- Use the **Search** box to find todos by text

### Statistics
- View total tasks, completed count, and progress percentage
- Click "Clear Completed" to remove all finished todos

## 💾 Data Persistence

All todos are automatically saved to your browser's `localStorage` under the key `todos`. This means:
- ✅ Your todos persist between browser sessions
- ✅ No backend server needed
- ✅ Data stays on your device
- ✅ Clearing browser cache will delete todos

## 🎨 Customization

### Modify Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  primary: '#3B82F6',    // Main color
  success: '#10B981',    // Success/Low priority
  danger: '#EF4444',     // Danger/High priority
  warning: '#F59E0B',    // Warning/Medium priority
}
```

### Add New Categories
Edit `src/components/TodoForm.jsx` and add options to the category select:
```jsx
<option value="your-category">Your Category</option>
```

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes!

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Bug Reports

If you find a bug, please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

## 📧 Support

For support, questions, or suggestions, feel free to open an issue on GitHub.

---

**Made with ❤️ by AJ Botha**
