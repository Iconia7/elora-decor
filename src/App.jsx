import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Camera, Sparkles, Flower, 
  Instagram, Phone, ArrowRight, Menu, X, Star, Check,Quote, Minus, Plus, Calculator
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const EloraDecor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
 
  // --- ⚙️ CONFIGURATION (EDIT HERE) ---
  // Format: Country code + Number (e.g., 254712345678)
  const WHATSAPP_NUMBER = "254115332870"; 
  const INSTAGRAM_URL = "https://instagram.com/eloradecor_ke"; // Replace with real link

  // --- 🔧 FUNCTIONALITY ---
  const handleWhatsApp = (message = "Hi Elora Décor, I'd like to make an inquiry.") => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInstagram = () => {
    window.open(INSTAGRAM_URL, '_blank');
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const testimonials = [
    { text: "Elora made my 21st birthday look like a Pinterest board! The colors were exactly what I wanted.", name: "Sarah, 4th Year" },
    { text: "Super affordable for the quality. The satin flowers were such a unique touch.", name: "Michelle, 2nd Year" },
    { text: "Saved my proposal. They set up everything while we were in class. She said yes!", name: "Brian, 3rd Year" },
  ];

  const faqs = [
    { q: "Do you travel off-campus?", a: "Yes! We primarily serve the campus area, but we can travel to nearby hostels or towns (Juja, Thika, etc.) for a small transport fee." },
    { q: "How do I pay?", a: "We require a 50% deposit via M-Pesa to secure your date. The remaining balance is paid on the day of the event after setup." },
    { q: "How much time do you need to set up?", a: "For small setups (rooms), we need about 1 hour. For larger events or photo booths, please allow us 2-3 hours access to the venue." },
    { q: "Can I customize the colors?", a: "Absolutely! All packages come with your choice of colors. Just let us know your theme when booking." }
  ];

  // --- 📦 DATA ---
  const services = [
    {
      title: "Balloon Artistry",
      desc: "Organic garlands, elegant bunches, and mini arches that pop.",
      icon: <Sparkles size={24} />,
      price: "From KES 3,000"
    },
    {
      title: "Satin & Ribbon",
      desc: "Handcrafted satin flowers and paper ribbon décor for a soft touch.",
      icon: <Flower size={24} />,
      price: "From KES 1,500"
    },
    {
      title: "Photo Booths",
      desc: "Instagram-worthy backdrops with props for the perfect selfie.",
      icon: <Camera size={24} />,
      price: "From KES 4,500"
    },
    {
      title: "Room Styling",
      desc: "Surprise setup for birthdays, proposals, or dorm celebrations.",
      icon: <Heart size={24} />,
      price: "From KES 2,500"
    }
  ];

  const packages = [
    {
      name: "The Mini",
      price: "3,500",
      features: ["1 Bubble Balloon", "Small Satin Flower Bouquet", "Card & Confetti", "Delivery (Campus)"],
      recommended: false
    },
    {
      name: "The Elora Special",
      price: "6,500",
      features: ["Balloon Garland (2m)", "Backdrop Stand", "Neon Sign Rental", "Full Setup & Takedown"],
      recommended: true
    },
    {
      name: "The Grand",
      price: "10,000",
      features: ["Full Organic Arch", "Photo Booth Station", "Proposal/Birthday Props", "Premium Satin Florals"],
      recommended: false
    }
  ];

  // --- ANIMATIONS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  // --- 🛒 CALCULATOR STATE ---
  const [cart, setCart] = useState([]);
  
  const addOns = [
    { id: 1, name: "Neon 'Happy Birthday' Sign", price: 1500 },
    { id: 2, name: "Extra Balloon Garland (1m)", price: 2000 },
    { id: 3, name: "Polaroid Camera Rental (10 films)", price: 2500 },
    { id: 4, name: "Custom Welcome Board", price: 1800 },
    { id: 5, name: "Transport (Within Campus)", price: 500 },
  ];

  const toggleAddOn = (item) => {
    if (cart.find(i => i.id === item.id)) {
      setCart(cart.filter(i => i.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCustomQuote = () => {
    const itemsList = cart.map(i => i.name).join(", ");
    const total = calculateTotal();
    const msg = `Hi Elora! I calculated a custom package on your site: ${itemsList}. Est Total: KES ${total}. Is this available?`;
    handleWhatsApp(msg);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-gray-800 font-sans selection:bg-rose-200">

      {/* --- SEO CONFIGURATION --- */}
    <Helmet>
      <title>Elora Décor | Affordable Campus Event Styling & Balloons</title>
      <meta name="description" content="Transform your campus events with Elora Décor. We offer affordable balloon artistry, satin flowers, photo booths, and room styling for birthdays & proposals." />
      <meta name="keywords" content="Elora Decor, campus events, balloon garlands Kenya, student decor, proposal setup, birthday styling, satin flowers, photo booth, affordable decor" />
      
      {/* Social Media Previews (WhatsApp/Instagram) */}
      <meta property="og:title" content="Elora Décor | Beautiful Moments on a Budget" />
      <meta property="og:description" content="Planning a birthday or proposal? Get premium styling, balloons, and photo booths starting from KES 1,500." />
      <meta property="og:image" content="https://images.unsplash.com/photo-1530103862676-de3c9a59af38?auto=format&fit=crop&q=80&w=1200" />
      <meta property="og:url" content="https://elora-decor.vercel.app/" />
      <meta property="og:type" content="website" />
    </Helmet>
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="text-2xl font-serif italic font-bold text-rose-950">Elora Décor</span>
            <Flower className="text-rose-400" size={20} />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-rose-500 transition">OUR STORY</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-rose-500 transition">SERVICES</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-rose-500 transition">PACKAGES</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-rose-500 transition">FAQ</button>
          </div>

          <button 
            onClick={() => handleWhatsApp("Hi! I'm interested in booking Elora Décor for an event.")}
            className="hidden md:block bg-rose-950 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-rose-800 transition shadow-lg shadow-rose-900/20"
          >
            Book Now
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-800 p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-rose-100 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-6 gap-6 text-center text-lg font-serif text-rose-900">
                <button onClick={() => scrollToSection('about')}>Our Story</button>
                <button onClick={() => scrollToSection('services')}>Services</button>
                <button onClick={() => scrollToSection('pricing')}>Packages</button>
                <button onClick={() => scrollToSection('faq')}>FAQ</button>
                <button 
                  onClick={() => handleWhatsApp("Hi! I'd like to book via WhatsApp.")}
                  className="bg-rose-950 text-white w-full py-4 rounded-full text-base font-sans font-bold shadow-lg"
                >
                  Book via WhatsApp
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/50 rounded-full blur-[80px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-100 shadow-sm mb-6">
              <Star size={14} className="text-yellow-500 fill-yellow-500"/>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Campus Event Styling</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-rose-950 leading-[1.1] mb-6">
              Beautiful moments don't <br/> have to be <span className="italic text-rose-500">expensive.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              We specialize in creating soft, elegant, and thoughtfully styled décor that transforms campus events into memorable experiences.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => handleWhatsApp("Hi Elora! I want to plan an event. Can you help?")}
                className="bg-rose-950 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-800 transition shadow-xl shadow-rose-950/20 flex items-center justify-center gap-2 group"
              >
                Plan My Event <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <button 
                onClick={handleInstagram}
                className="bg-white text-rose-950 border border-rose-200 px-8 py-4 rounded-full font-medium hover:bg-rose-50 transition flex items-center justify-center gap-2"
              >
                <Instagram size={18} /> View Portfolio
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
          className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="h-64 bg-rose-50 rounded-2xl overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1755704282718-1afe3790082b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxldmVudCUyMGJhbGxvbnN8ZW58MHx8MHx8fDA%3D" alt="Balloons" className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/>
          </div>
          <div className="h-64 bg-rose-50 rounded-2xl overflow-hidden relative group md:mt-12">
             <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800" alt="Event" className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/>
          </div>
          <div className="h-64 bg-rose-50 rounded-2xl overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1759579059917-3277455b1e2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGV2ZW50JTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D" alt="Flowers" className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/>
          </div>
          <div className="h-64 bg-rose-50 rounded-2xl overflow-hidden relative group md:mt-12">
             <img src="https://images.unsplash.com/photo-1763553113332-800519753e40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBzdHlsaW5nfGVufDB8fDB8fHww" alt="Styling" className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/>
          </div>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-950 mb-4">Curated Styling Services</h2>
            <p className="text-gray-500">Everything you need for that perfect aesthetic.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                onClick={() => handleWhatsApp(`Hi, tell me more about your ${item.title} service.`)}
                className="p-8 rounded-3xl bg-[#FDFCF8] border border-rose-50 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
                <p className="text-rose-500 font-bold text-sm flex items-center gap-1">
                  {item.price} <ArrowRight size={14}/>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE CALCULATOR --- */}
      <section className="py-20 px-6 bg-rose-50/50">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-rose-100">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <span className="text-rose-500 text-xs font-bold tracking-widest uppercase">Customize Your Vibe</span>
              <h2 className="text-3xl font-serif text-rose-950 mt-2">Build your own add-ons</h2>
              <p className="text-gray-500 mt-2 text-sm">Select extras to see an estimated price.</p>
            </div>

            <div className="space-y-4">
              {addOns.map((item) => {
                const isSelected = cart.find(i => i.id === item.id);
                return (
                  <motion.div 
                    key={item.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleAddOn(item)}
                    className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'border-rose-500 bg-rose-50 shadow-md' 
                        : 'border-gray-100 hover:border-rose-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected ? 'border-rose-500 bg-rose-500 text-white' : 'border-gray-300'
                      }`}>
                        {isSelected && <CheckIcon />}
                      </div>
                      <span className={`font-medium ${isSelected ? 'text-rose-900' : 'text-gray-600'}`}>{item.name}</span>
                    </div>
                    <span className="font-bold text-gray-800">KES {item.price}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Total Bar */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Estimated Extra Total</p>
                <p className="text-4xl font-serif text-rose-950">KES {calculateTotal().toLocaleString()}</p>
              </div>
              <button 
                onClick={handleCustomQuote}
                disabled={cart.length === 0}
                className={`px-8 py-4 rounded-full font-bold transition flex items-center gap-2 ${
                  cart.length > 0 
                    ? 'bg-rose-950 text-white hover:bg-rose-800 shadow-lg' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Book This Selection <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto bg-rose-950 rounded-[3rem] overflow-hidden text-white relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-20 relative z-10">
              <span className="text-rose-300 text-xs font-bold tracking-widest uppercase mb-2 block">Our Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Where elegance meets affordability.</h2>
              <p className="text-rose-100/80 mb-8 leading-relaxed">
                At Elora Décor, we specialize in transforming simple student spaces into magical experiences. 
                Whether it's a birthday, a proposal, or a club event, we add that gentle touch of beauty that makes the moment feel special.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <h4 className="text-3xl font-serif text-rose-300">50+</h4>
                  <p className="text-xs text-rose-100/60 uppercase mt-1">Events Styled</p>
                </div>
                <div className="w-px bg-rose-800"></div>
                <div className="text-center">
                  <h4 className="text-3xl font-serif text-rose-300">100%</h4>
                  <p className="text-xs text-rose-100/60 uppercase mt-1">Student Love</p>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800" 
                alt="Decoration" className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-500 text-xs font-bold tracking-widest uppercase">Student Friendly</span>
            <h2 className="text-3xl md:text-4xl font-serif text-rose-950 mt-2">Packages designed for you</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl border relative ${pkg.recommended ? 'bg-rose-50 border-rose-200' : 'bg-white border-gray-100'}`}
              >
                {pkg.recommended && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-sm text-gray-500 font-medium">KES</span>
                  <span className="text-4xl font-serif text-rose-950 ml-1">{pkg.price}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                        <CheckIcon />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleWhatsApp(`Hi Elora! I am interested in the ${pkg.name} package for KES ${pkg.price}.`)}
                  className={`w-full py-3 rounded-full font-bold text-sm transition ${pkg.recommended ? 'bg-rose-950 text-white hover:bg-rose-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  Choose {pkg.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (NEW) --- */}
      <section className="py-20 px-6 bg-[#FDFCF8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-rose-950">Campus Love</h2>
            <p className="text-gray-500 mt-2">What students are saying about us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-rose-50 shadow-sm relative"
              >
                <Quote size={40} className="text-rose-100 absolute top-4 left-4" />
                <p className="text-gray-600 italic relative z-10 mb-6 pt-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center text-rose-700 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-rose-950 text-sm">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (NEW) --- */}
      <section id="faq" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-rose-950">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-6 bg-[#FDFCF8] hover:bg-rose-50/30 transition text-left"
                >
                  <span className="font-bold text-gray-800">{faq.q}</span>
                  {activeFAQ === idx ? <Minus size={20} className="text-rose-500"/> : <Plus size={20} className="text-gray-400"/>}
                </button>
                <AnimatePresence>
                  {activeFAQ === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="bg-white px-6 pb-6 text-gray-500 text-sm leading-relaxed"
                    >
                      <div className="pt-2">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#FDFCF8] py-20 border-t border-rose-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-950 mb-6">Ready to make it beautiful?</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Let's chat about your event! DM us on Instagram or message us directly on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => handleWhatsApp("Hi! I have a question about your services.")}
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20bd5a] transition flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
            >
               <Phone size={20}/> Chat on WhatsApp
            </button>
            <button 
              onClick={handleInstagram}
              className="bg-white text-rose-950 border border-rose-200 px-8 py-4 rounded-full font-bold hover:bg-rose-50 transition flex items-center justify-center gap-2"
            >
              <Instagram size={18} /> Follow on Instagram
            </button>
          </div>
          
          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Elora Décor. All rights reserved.</p>
            <p>Designed with <Heart size={10} className="inline text-rose-400 mx-1"/> for Campus Students</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Check Icon Component
const CheckIcon = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default EloraDecor;