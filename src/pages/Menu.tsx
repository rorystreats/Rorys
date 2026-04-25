import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menu } from '../data';

const categories = [
  { id: 'cookies', label: 'NYC-Style Cookies' },
  { id: 'cheesecakes', label: 'Cheesecakes' },
  { id: 'tiramisu', label: 'Tiramisu' },
  { id: 'tins', label: 'Manhattan Size' },
  { id: 'seasonal', label: 'Seasonal' },
  { id: 'festive', label: 'Festive & Custom' },
];

export default function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Menu</h1>
          <p className="text-[#2C1818]/70 uppercase tracking-widest text-sm">Perfect for any craving</p>
        </div>

        <div className="space-y-24">
          {categories.map((cat) => {
            const items = menu[cat.id];
            if (!items) return null;

            return (
              <section key={cat.id} id={cat.id}>
                <div className="mb-10 text-center">
                  <h2 className="text-3xl font-serif text-[#6B1111]">{cat.label}</h2>
                  <div className="w-24 h-px bg-[#6B1111]/20 mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {items.map((item, idx) => (
                    <Link 
                      to={`/product/${item.slug}`} 
                      key={item.slug}
                      className="group block bg-[#FDFBF7] border border-[#6B1111]/10 rounded-2xl p-6 hover:shadow-lg hover:border-[#6B1111]/30 transition-all"
                    >
                      <div className="flex gap-4">
                        <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-[#F5EFE6]">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                          ) : item.gallery && item.gallery.length > 0 ? (
                            <img src={item.gallery[0]} alt={item.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs text-[#2C1818]/30">No Image</div>
                          )}
                        </div>
                        <div className="flex flex-col flex-1 justify-between">
                          <div>
                            <h3 className="font-serif text-xl mb-1 group-hover:text-[#6B1111] transition-colors">{item.name}</h3>
                            <p className="text-[#2C1818]/70 text-sm line-clamp-2">{item.desc}</p>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <span className="font-serif font-medium">₹{item.price}</span>
                            <span className="text-xs uppercase tracking-widest text-[#6B1111] flex items-center gap-1 group-hover:gap-2 transition-all">
                              View <ChevronRight size={14} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
