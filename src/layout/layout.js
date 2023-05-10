import { Outlet } from 'react-router-dom';
import Nav from '../nav-bar/components/nav';
import './layout.css';

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1 className='nav-title'>Hate Planner</h1>
      </header>
      <div className='site-container'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;