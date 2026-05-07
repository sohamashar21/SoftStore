import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { itemCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50" style={{ background: 'rgba(250, 250, 250, 0.9)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)' }}>
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>SoftStore</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>Home</Link>
            <Link to="/products" className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>Products</Link>
            <Link to="/about" className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>About</Link>
            <Link to="/contact" className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/cart" className="relative p-2 rounded-full transition-colors" style={{ background: 'var(--bg-secondary)' }}>
              <ShoppingCart size={20} style={{ color: 'var(--text-secondary)' }} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs text-white flex items-center justify-center" style={{ background: 'var(--accent)' }}>
                  {itemCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm hidden sm:block" style={{ color: 'var(--text-secondary)' }}>{user?.name}</span>
                <button onClick={handleLogout} className="btn-soft text-sm">Logout</button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link to="/login" className="btn-soft text-sm">Login</Link>
                <Link to="/register" className="btn-primary-soft text-sm">Sign Up</Link>
              </div>
            )}

            <button 
              className="md:hidden p-2 rounded-lg"
              style={{ background: 'var(--bg-secondary)' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/products" className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }} onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/about" className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }} onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              {!isAuthenticated && (
                <div className="flex flex-col gap-2 pt-2 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                  <Link to="/login" className="btn-soft text-sm text-center" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/register" className="btn-primary-soft text-sm text-center" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}