// src/components/layout/Navbar/Navbar.tsx
import { Link } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ to, children, className = '' }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`px-4 py-2 hover:text-blue-500 transition-colors ${className}`}
  >
    {children}
  </Link>
);

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            MyApp
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;