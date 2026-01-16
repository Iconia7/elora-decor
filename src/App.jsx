import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Camera, Sparkles, Flower, 
  Instagram, Phone, ArrowRight, Menu, X, Star, Check, Quote, Minus, Plus, ShieldCheck, MapPin, Info, Layout
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const EloraDecor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [showPolicy, setShowPolicy] = useState(false);
  const [cart, setCart] = useState([]);

  // --- 🎨 CONFIGURATION & THEME (BUSINESS PLAN SYNC) ---
  const WHATSAPP_NUMBER = "254113279716"; 
  const INSTAGRAM_URL = "https://instagram.com/eloradecor_ke";
  // Theme: Blush Nude (#F4E0D9), Champagne Gold (#D4AF37), Soft Sage (#B2AC88) [cite: 84, 136]

  const handleWhatsApp = (message = "Hi Elora Décor, I'd like to make an inquiry.") => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAddOn = (item) => {
    if (cart.find(i => i.id === item.id)) {
      setCart(cart.filter(i => i.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
  };

  const calculateTotal = () => cart.reduce((total, item) => total + item.price, 0);

  // --- 📦 DATA (UPDATED FROM BUSINESS PLAN) ---
  const services = [
    { title: "Balloon Décor", desc: "Organic bunches, mini arches, and garlands. Affordable and reusable.", icon: <Sparkles size={24} />, price: "From KES 3,000" }, // [cite: 66, 75]
    { title: "Ribbon Décor", desc: "Handcrafted satin and paper flowers for a soft, elegant touch.", icon: <Flower size={24} />, price: "From KES 1,500" }, // [cite: 69, 70]
    { title: "Photo Corners", desc: "Fabric backdrops, fairy lights, and props for the perfect Instagram moment.", icon: <Camera size={24} />, price: "From KES 4,500" }, // [cite: 71, 72]
    { title: "Package Deals", desc: "Curated bundles designed specifically for student budgets.", icon: <Heart size={24} />, price: "From KES 3,000" } // [cite: 74, 92]
  ];

  const packages = [
    { name: "Mini Party Package", price: "3,000 – 4,000", features: ["Balloon Bunches", "Ribbon Accents", "Confetti Decor", "Campus Setup"], recommended: false }, // [cite: 75]
    { name: "Standard Campus", price: "5,000 – 7,000", features: ["Balloon Garland (2m)", "Fabric Backdrop", "Fairy Lights", "Setup & Takedown"], recommended: true }, // [cite: 76]
    { name: "Campus Deluxe", price: "8,000 – 10,000", features: ["Full Organic Arch", "Premium Satin Florals", "Custom Event Signage", "Neon Sign Rental"], recommended: false } // [cite: 77]
  ];

  const galleryImages = [
    { url: "https://images-na.ssl-images-amazon.com/images/I/81S19uciTWL._UL500_.jpg", title: "Soft Sage & Gold Balloons" },
    { url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800", title: "Blush Nude Satin Ribbons" },
    { url: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=800", title: "Champagne Gold Photo Booth" },
    { url: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=800", title: "Organic Balloon Arch" }
  ];

  const addOns = [
    { id: 1, name: "Neon 'Happy Birthday' Sign", price: 1500 }, // [cite: 81]
    { id: 2, name: "Event Signage / Welcome Board", price: 1800 }, // [cite: 79]
    { id: 3, name: "Custom Name Backdrop", price: 1200 }, // [cite: 80]
    { id: 4, name: "LED Accent Lighting", price: 1000 }, // [cite: 81]
  ];

  const testimonials = [
    { text: "Elora made my 21st birthday look like a Pinterest board! The colors were exactly what I wanted.", name: "Sarah, Daystar" }, // [cite: 47, 49]
    { text: "Super affordable for the quality. The satin flowers were such a unique touch.", name: "Michelle, Daystar" }, // [cite: 60, 70]
    { text: "Saved my proposal. They set up everything while we were in class. She said yes!", name: "Brian, Daystar" }, // [cite: 49, 140]
  ];

  const faqs = [
    { q: "Do you travel off-campus?", a: "Yes! While focused on Daystar Main Campus, we can travel to nearby areas for a small transport fee." }, // [cite: 40]
    { q: "How do I secure my date?", a: "A 50% non-refundable deposit is required via M-Pesa. Bookings are only confirmed after receipt." }, // [cite: 5, 6]
    { q: "How much time is needed for setup?", a: "Small setups need 1 hour; larger photo booths or arches require 2-3 hours access." }, // [cite: 17]
    { q: "Can I customize the theme?", a: "Absolutely! We specialize in Blush Nude, Sage, and Gold, but we can adapt to any custom theme." } // [cite: 13, 84]
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#4A4A4A] font-sans selection:bg-[#F4E0D9]">
      <Helmet>
        <title>Elora Décor | Styling Moments with Grace</title>
        <meta name="description" content="Affordable and innovative event décor at Daystar University. Balloon garlands, ribbon styling, and photo booths." />
      </Helmet>
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#F4E0D9] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <span className="text-2xl font-serif italic font-bold text-[#2C3E2E]">Elora Décor</span>
            <Flower className="text-[#B2AC88]" size={20} />
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.2em] text-[#B2AC88] uppercase">
            <button onClick={() => scrollToSection('services')}>Services</button>
            <button onClick={() => scrollToSection('gallery')}>Gallery</button>
            <button onClick={() => scrollToSection('pricing')}>Packages</button>
            <button onClick={() => setShowPolicy(true)} className="text-[#D4AF37]">Policy</button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#2C3E2E]"><Menu /></button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-32 px-6 text-center overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F4E0D9]/30 rounded-full blur-[120px] -z-10"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F4E0D9] mb-8 shadow-sm">
            <MapPin size={14} className="text-[#B2AC88]"/>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#B2AC88]">Daystar Main Campus Focus</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-[#2C3E2E] leading-[1.05] mb-8">
            Styling Moments <br/> with <span className="italic text-[#D4AF37]">Grace.</span>
          </h1>
          <p className="text-lg text-[#6B705C] max-w-xl mx-auto mb-12 font-medium">
            Affordable elegance for campus celebrations. We blend creativity and grace into stunning visual moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => handleWhatsApp()} className="bg-[#2C3E2E] text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-[#3D523F] transition-all flex items-center justify-center gap-2">
              Plan My Event <ArrowRight size={18} />
            </button>
            <button onClick={() => window.open(INSTAGRAM_URL)} className="bg-white text-[#2C3E2E] border border-[#F4E0D9] px-10 py-5 rounded-full font-bold hover:bg-[#F4E0D9]/20 transition-all flex items-center justify-center gap-2">
              <Instagram size={20} /> View Portfolio
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#FAF9F6] border border-[#F4E0D9]/50 hover:shadow-lg transition-all group">
              <div className="text-[#B2AC88] mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="font-serif text-xl text-[#2C3E2E] mb-2">{s.title}</h3>
              <p className="text-[#6B705C] text-sm mb-4">{s.desc}</p>
              <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- GALLERY SECTION (MASONRY STYLE) --- */}
      <section id="gallery" className="py-24 px-6 bg-[#FAF9F6] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-[#2C3E2E]">Our Styling Portfolio</h2>
            <p className="text-[#B2AC88] font-bold text-[10px] uppercase tracking-widest mt-2">Instagram-Worthy Aesthetic</p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="relative group rounded-3xl overflow-hidden shadow-sm">
                <img src={img.url} alt={img.title} className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 text-white text-xs font-serif italic">
                  {img.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALCULATOR --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-[#FAF9F6] p-12 rounded-[3rem] border border-[#F4E0D9] shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-[#2C3E2E]">Interactive Estimator</h2>
            <p className="text-[#B2AC88] font-bold text-[10px] uppercase tracking-widest mt-2">Personalize Your Setup</p>
          </div>
          <div className="grid gap-4">
            {addOns.map(addon => (
              <div 
                key={addon.id} onClick={() => toggleAddOn(addon)}
                className={`flex justify-between items-center p-6 rounded-2xl border transition-all cursor-pointer ${cart.find(i => i.id === addon.id) ? 'bg-[#F4E0D9]/20 border-[#D4AF37]' : 'border-white hover:border-[#F4E0D9]'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${cart.find(i => i.id === addon.id) ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-[#F4E0D9]'}`}>
                    {cart.find(i => i.id === addon.id) && <Check size={12} className="text-white" />}
                  </div>
                  <span className="font-medium text-[#2C3E2E]">{addon.name}</span>
                </div>
                <span className="font-serif font-bold text-[#D4AF37]">KES {addon.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-[#F4E0D9] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#B2AC88]">Estimated Add-on Total</p>
              <p className="text-4xl font-serif text-[#2C3E2E]">KES {calculateTotal().toLocaleString()}</p>
            </div>
            <button 
              onClick={() => handleWhatsApp(`Custom Inquire: ${cart.map(c => c.name).join(", ")}`)}
              disabled={cart.length === 0}
              className="bg-[#2C3E2E] text-white px-10 py-4 rounded-full font-bold disabled:opacity-30 transition-all"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </section>

      {/* --- PACKAGES --- */}
      <section id="pricing" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className={`p-12 rounded-[3rem] border flex flex-col ${pkg.recommended ? 'border-[#D4AF37] bg-[#FAF9F6] shadow-xl md:-translate-y-4' : 'border-[#F4E0D9]'}`}>
              {pkg.recommended && <span className="text-[10px] font-bold text-[#D4AF37] mb-4 uppercase tracking-[0.2em]">Campus Favorite</span>}
              <h3 className="text-xl font-bold text-[#2C3E2E] mb-2">{pkg.name}</h3>
              <p className="text-4xl font-serif text-[#D4AF37] mb-8">KES {pkg.price}</p>
              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#6B705C]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B2AC88]"></div> {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleWhatsApp(`Booking: ${pkg.name}`)} className="w-full py-4 rounded-full bg-[#2C3E2E] text-white font-bold">Choose Package</button>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 px-6 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-[#F4E0D9]/30 shadow-sm">
              <Quote size={30} className="text-[#F4E0D9] mx-auto mb-4" />
              <p className="text-[#6B705C] italic text-sm mb-6 leading-relaxed">"{t.text}"</p>
              <span className="text-xs font-bold text-[#2C3E2E] uppercase tracking-widest">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif text-[#2C3E2E] text-center mb-12 italic">Campus Inquiries</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-[#F4E0D9] pb-4">
                <button onClick={() => setActiveFAQ(activeFAQ === i ? null : i)} className="w-full flex justify-between items-center py-2 text-left font-bold text-[#2C3E2E]">
                  {f.q} {activeFAQ === i ? <Minus size={16}/> : <Plus size={16}/>}
                </button>
                <AnimatePresence>
                  {activeFAQ === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="py-4 text-sm text-[#6B705C] leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIENT POLICY --- */}
      <section className="py-24 px-6 bg-[#2C3E2E] text-white rounded-[4rem] mx-6 mb-24 overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-10">
            <ShieldCheck className="text-[#D4AF37]" size={32} />
            <h2 className="text-4xl font-serif">Client Policy Agreement</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-sm text-[#B2AC88] leading-relaxed font-light">
            <div className="space-y-6">
              <p><strong className="text-white uppercase tracking-widest block mb-1">Bookings</strong> A 50% non-refundable deposit is required. Confirmed only after receipt.</p>
              <p><strong className="text-white uppercase tracking-widest block mb-1">Cancellations</strong> Within 48 hours results in deposit forfeiture. One reschedule allowed with 48h notice.</p>
            </div>
            <div className="space-y-6">
              <p><strong className="text-white uppercase tracking-widest block mb-1">Damages</strong> Loss or damage to décor items may be charged to the client.</p>
              <p><strong className="text-white uppercase tracking-widest block mb-1">Takedown</strong> Clients responsible for ensuring venue access at agreed times.</p>
            </div>
          </div>
          <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-4">
            <Info size={20} className="text-[#D4AF37] shrink-0" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4E0D9]">By sending a deposit, you confirm agreement to the full client policy.</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center border-t border-[#F4E0D9]">
        <h2 className="text-3xl font-serif text-[#2C3E2E] italic mb-8 underline decoration-[#D4AF37] underline-offset-8">Elora Décor</h2>
        <div className="flex justify-center gap-6 mb-10">
          <Instagram className="text-[#B2AC88] cursor-pointer hover:text-[#D4AF37]" onClick={() => window.open(INSTAGRAM_URL)} />
          <Phone className="text-[#B2AC88] cursor-pointer hover:text-[#D4AF37]" onClick={() => handleWhatsApp()} />
        </div>
        <p className="text-[9px] font-black tracking-[0.3em] uppercase text-[#B2AC88]">© {new Date().getFullYear()} Styling Moments with Grace</p>
      </footer>

      {/* --- POLICY MODAL --- */}
      <AnimatePresence>
        {showPolicy && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#2C3E2E]/80 backdrop-blur-md flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white p-12 rounded-[3rem] max-w-2xl relative shadow-2xl overflow-y-auto max-h-[80vh]">
              <button onClick={() => setShowPolicy(false)} className="absolute top-8 right-8 text-[#2C3E2E]"><X /></button>
              <h2 className="text-3xl font-serif text-[#2C3E2E] mb-8 flex items-center gap-2 font-black italic"><ShieldCheck className="text-[#D4AF37]"/> Client Policy</h2>
              <div className="space-y-6 text-xs text-[#6B705C] leading-relaxed">
                <p><strong>1. Deposit:</strong> 50% non-refundable deposit via M-Pesa is mandatory to secure your date[cite: 5, 6].</p>
                <p><strong>2. Rescheduling:</strong> Subject to availability; communicate 48 hours in advance[cite: 10]. Event must occur within 30 days[cite: 11].</p>
                <p><strong>3. Takedown:</strong> Time depends on the package booked[cite: 17]. Client ensures venue access[cite: 18].</p>
                <p><strong>4. Marketing:</strong> Elora Décor may take photos of setups for portfolio use unless notified in advance[cite: 26, 27].</p>
              </div>
              <button onClick={() => setShowPolicy(false)} className="mt-8 w-full py-4 bg-[#2C3E2E] text-white rounded-full font-bold uppercase tracking-widest text-[10px]">Acknowledge Agreement</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EloraDecor;