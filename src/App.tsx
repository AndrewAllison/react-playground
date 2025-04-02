import { Link, Outlet } from '@tanstack/react-router';
import './styles/global.scss';
import './App.scss';

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">React Playground 🧪</h1>
        <nav className="app__nav">
          <Link to="/">Home</Link>
          <Link to="/challenge/01">Challenge 01</Link>
          <Link to="/challenge/02">Challenge 02</Link>
        </nav>
      </header>
      
      <main className="app__main">
        <Outlet />
      </main>
      
      <footer className="app__footer">
        <small>Made by Andrew with 💡 for fun & practice</small>
      </footer>
    </div>
  );
}
