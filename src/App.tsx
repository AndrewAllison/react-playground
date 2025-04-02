// src/App.tsx
import { Link, Outlet } from '@tanstack/react-router';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Playground 🧪</h1>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/challenge/01" style={{ marginRight: 12 }}>Challenge 01</Link>
        <Link to="/challenge/02">Challenge 02</Link>
      </nav>
      <Outlet />
    </div>
  );
}
