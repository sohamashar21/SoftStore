import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Electronics', 'Home', 'Accessories', 'Clothing'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="animate-fade-in">
      <section className="py-12 sm:py-16" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">All Products</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Browse our complete collection of premium items</p>
        </div>
      </section>

      <section className="py-6 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)', background: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'btn-primary-soft' 
                    : 'btn-soft'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <p style={{ color: 'var(--text-secondary)' }}>Showing {filteredProducts.length} products</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>No products found in this category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
