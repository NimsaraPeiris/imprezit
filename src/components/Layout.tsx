import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { AnimatedCursor } from './AnimatedCursor';

export function Layout() {
  return (
    <div className="cursor-none">
      <Navbar />
      <Outlet />
      <AnimatedCursor />
    </div>
  );
}
