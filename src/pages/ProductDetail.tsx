import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Info, Package, Truck, MessageCircle, Cookie } from 'lucide-react';
import { menu, MenuItem, WHATSAPP_NUMBER } from '../data';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find the product
  let product: MenuItem | null = null;
  for (const category in menu) {
    const found = menu[category].find(item => item.slug === slug);
    if (found) {
      product = found;
      break;
    }
  }

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen">
        <h1 className="text-4xl font-serif mb-6">Product Not Found</h1>
        <Link to="/menu" className="text-[#6B1111] underline">Return to Menu</Link>
      </div>
    );
  }

  const generateWhatsAppLink = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'd love to order the ${product?.name}.`)}`;
  };

  // Compile images: combine primary image with gallery, removing duplicates
  const allImages = [product.image, ...(product.gallery || [])].filter(Boolean) as string[];
  const uniqueImages = [...new Set(allImages)];

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/menu" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#2C1818]/50 hover:text-[#6B1111] transition-colors mb-8">
          <ChevronLeft size={16} /> Back to Menu
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[#F5EFE6] rounded-2xl overflow-hidden border border-[#6B1111]/10">
               {uniqueImages.length > 0 ? (
                 <img src={uniqueImages[0]} alt={product.name} className="w-full h-full object-cover" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-[#2C1818]/30">No Image Available</div>
               )}
            </div>
            
            {/* Gallery (Max 3 thumbnails) */}
            {uniqueImages.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {uniqueImages.slice(1, 4).map((imgUrl, i) => (
                  <div key={i} className="aspect-square bg-[#F5EFE6] rounded-xl overflow-hidden border border-[#6B1111]/10">
                    <img src={imgUrl} alt={`${product?.name} detail ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#2C1818]">{product.name}</h1>
            <p className="text-2xl font-medium text-[#6B1111] mb-6">₹{product.price}</p>
            
            <p className="text-lg text-[#2C1818]/80 leading-relaxed mb-10">
              {product.desc}
            </p>

            <a 
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6B1111] text-[#FDFBF7] px-8 py-4 rounded-full text-center uppercase tracking-widest hover:bg-[#4A0B0B] transition-colors flex items-center justify-center gap-2 mb-12"
            >
              <MessageCircle size={20} />
              Order via WhatsApp
            </a>

            {/* Accordion / Info Blocks */}
            <div className="space-y-6 border-t border-[#6B1111]/10 pt-8">
              
              <div className="bg-[#F5EFE6]/50 p-6 rounded-2xl border border-[#6B1111]/5">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="text-[#6B1111]" size={20} />
                  <h3 className="font-serif text-xl">How to Order</h3>
                </div>
                <p className="text-[#2C1818]/70 text-sm leading-relaxed">
                  Click the button above to WhatsApp us directly. Please place your order at least 48 hours in advance, as everything is baked entirely fresh to order.
                </p>
              </div>

              {product.shippingInfo && (
                <div className="bg-[#F5EFE6]/50 p-6 rounded-2xl border border-[#6B1111]/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck className="text-[#6B1111]" size={20} />
                    <h3 className="font-serif text-xl">Shipping & Pickup</h3>
                  </div>
                  <p className="text-[#2C1818]/70 text-sm leading-relaxed">
                    {product.shippingInfo}
                  </p>
                </div>
              )}

              {product.careInstructions && (
                <div className="bg-[#F5EFE6]/50 p-6 rounded-2xl border border-[#6B1111]/5">
                  <div className="flex items-center gap-3 mb-3">
                    {product.careTitle?.includes("Cookie survival guide") ? (
                      <Cookie className="text-[#6B1111]" size={20} />
                    ) : (
                      <Info className="text-[#6B1111]" size={20} />
                    )}
                    <h3 className="font-serif text-xl">{product.careTitle || "Best Care & Storage"}</h3>
                  </div>
                  <p className="text-[#2C1818]/70 text-sm leading-relaxed whitespace-pre-wrap">
                    {product.careInstructions}
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
