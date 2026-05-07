import { Check } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '50+', label: 'Premium Brands' },
    { value: '5K+', label: 'Products' },
    { value: '99%', label: 'Satisfaction' },
  ];

  const values = [
    { title: 'Quality First', desc: 'We never compromise on the quality of our products.' },
    { title: 'Minimal Design', desc: 'Every item is carefully curated for modern aesthetics.' },
    { title: 'Sustainable', desc: 'We prioritize eco-friendly and sustainable options.' },
    { title: 'Customer First', desc: 'Your satisfaction is our top priority always.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="py-16 sm:py-24" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About SoftStore</h1>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              We're on a mission to bring minimal, thoughtful design to everyday objects. 
              Founded in 2024, we curate the finest products that blend functionality with elegance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="card-elevated p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop" 
                alt="Our Story"
                className="rounded-2xl soft-shadow"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">Our Story</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                SoftStore began with a simple observation: everyday objects don't need to be boring. 
                We believed that the things we use daily should bring joy and reflect our values of 
                simplicity and quality.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Today, we work with designers and makers from around the world to bring you a 
                carefully curated collection of products that enhance your daily life.
              </p>
              <div className="space-y-3">
                {['Curated selection process', 'Direct relationships with makers', 'Sustainable packaging'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'var(--accent)', color: 'white' }}>
                      <Check size={14} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" style={{ background: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Values</h2>
            <p style={{ color: 'var(--text-secondary)' }}>The principles that guide everything we do</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="card-elevated p-6">
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
