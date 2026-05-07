import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="animate-fade-in min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'var(--bg-secondary)' }}>
            <ShoppingBag size={48} style={{ color: 'var(--text-muted)' }} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Looks like you haven't added anything yet</p>
          <Link to="/products" className="btn-primary-soft inline-flex items-center gap-2">
            Start Shopping <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card-elevated p-4 sm:p-6 flex gap-4 sm:gap-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0" style={{ background: 'var(--bg-secondary)' }}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}>
                        {item.category}
                      </span>
                      <h3 className="font-semibold mt-2">{item.name}</h3>
                      <p className="text-sm hidden sm:block" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 rounded-lg transition-colors hover:bg-red-50"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        style={{ background: 'var(--bg-secondary)' }}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        style={{ background: 'var(--bg-secondary)' }}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-lg font-semibold" style={{ color: 'var(--accent)' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="card-elevated p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Tax</span>
                  <span className="font-medium">${(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span style={{ color: 'var(--accent)' }}>${(total * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <button className="btn-primary-soft w-full mb-3">
                Proceed to Checkout
              </button>
              
              <button 
                onClick={clearCart}
                className="btn-soft w-full text-red-500"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/products" className="btn-soft inline-flex items-center gap-2">
            <ArrowRight size={18} className="rotate-180" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
