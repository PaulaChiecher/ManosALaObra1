function App() {
  return (
    <div className="app-container">
      <h1>Lista de Tareas de Paula 📝</h1>

      <div className="input-section">
        <input type="text" placeholder="Escribe una tarea..." />
        <button>ADD</button>
      </div>

      <ul className="task-list">
        <li className="task-item">
          <input type="checkbox" />
          <span>Tarea de ejemplo</span>
          <button className="delete-btn">🗑️</button>
        </li>
      </ul>
    </div>
  )
}

export default App

