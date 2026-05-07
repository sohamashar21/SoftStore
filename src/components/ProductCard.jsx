import { Plus } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart()

  return (
    <div 
      className="card-elevated p-4 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div 
        className="aspect-square rounded-lg mb-4 overflow-hidden flex items-center justify-center"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}>
          {product.category}
        </span>
        <h3 className="font-semibold text-base">{product.name}</h3>
        <p className="text-sm line-clamp-2" style={{ color: 'var(--text-secondary)' }}>{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-semibold" style={{ color: 'var(--accent)' }}>${product.price}</span>
          <button 
            onClick={() => addToCart(product)}
            className="p-2 rounded-full transition-all hover:scale-110"
            style={{ background: 'var(--accent)', color: 'white' }}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
