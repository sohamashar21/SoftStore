import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, Truck, Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="animate-fade-in">
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block text-sm font-medium px-3 py-1 rounded-full animate-pulse" style={{ background: 'var(--bg-secondary)', color: 'var(--accent)' }}>
                ✨ New Collection 2026
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Minimal essentials for{' '}
                <span style={{ color: 'var(--accent)' }}>modern living</span>
              </h1>
              <p className="text-lg max-w-md" style={{ color: 'var(--text-secondary)' }}>
                Curated selection of premium products designed to simplify your daily routine with elegance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary-soft inline-flex items-center gap-2">
                  Shop Now <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="btn-soft inline-flex items-center gap-2">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-3xl overflow-hidden soft-shadow hover:shadow-xl transition-shadow duration-300" style={{ background: 'var(--bg-secondary)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop" 
                  alt="Hero Product"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 card-elevated p-4 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--accent)', color: 'white' }}>
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">4.9 Rating</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>2k+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
              { icon: Shield, title: 'Secure Payment', desc: '100% protected checkout' },
              { icon: TrendingUp, title: 'Premium Quality', desc: 'Sourced from top brands' },
              { icon: Star, title: 'Easy Returns', desc: '30-day return policy' },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer" style={{ background: 'var(--bg-primary)' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110" style={{ background: 'var(--accent)', color: 'white' }}>
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Featured Products</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Handpicked favorites from our collection</p>
            </div>
            <Link to="/products" className="btn-soft hidden sm:flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/products" className="btn-soft inline-flex items-center gap-2">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&auto=format&fit=crop', count: 12 },
              { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop', count: 8 },
              { name: 'Accessories', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop', count: 15 },
            ].map((cat, i) => (
              <Link 
                key={i} 
                to="/products"
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden card-elevated"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all" />
                <div className="absolute bottom-6 left-6 text-white group-hover:bottom-8 transition-all">
                  <h3 className="text-xl font-semibold">{cat.name}</h3>
                  <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">{cat.count} products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated p-8 sm:p-12 rounded-3xl text-center hover:shadow-xl transition-shadow" style={{ background: 'var(--bg-secondary)' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay in the loop</h2>
            <p className="max-w-md mx-auto mb-6" style={{ color: 'var(--text-secondary)' }}>
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="input-soft flex-1"
              />
              <button type="submit" className="btn-primary-soft whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}