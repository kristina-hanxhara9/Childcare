/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Puzzle, 
  Smile, 
  Baby, 
  Gamepad2, 
  BookOpen, 
  MapPin, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Sun,
  Cloud,
  Star,
  Pencil
} from 'lucide-react';

// --- Components ---

const WaveDivider = ({ color = "#FFF", position = "bottom", flip = false }: { color?: string, position?: "top" | "bottom", flip?: boolean }) => {
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-none z-10 ${position === "top" ? "top-0 rotate-180" : "bottom-0 translate-y-[1px]"}`}>
      <svg 
        className={`relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] ${flip ? "transform scale-x-[-1]" : ""}`} 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill={color}></path>
      </svg>
    </div>
  );
};

const Balloon = ({ color, x, delay, size = 70 }: { color: string, x: string, delay: number, size?: number }) => {
  const [isPopped, setIsPopped] = useState(false);

  if (isPopped) return null;

  return (
    <motion.div
      initial={{ y: "120vh", x }}
      animate={{ y: "-120vh" }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        delay: delay,
        ease: "linear"
      }}
      className="absolute z-20 cursor-pointer group"
      onClick={() => setIsPopped(true)}
      whileHover={{ scale: 1.1 }}
      style={{ left: x }}
    >
      <div className="relative" style={{ width: size, height: size * 1.2 }}>
        {/* Balloon Body */}
        <div 
          className="w-full h-full rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%] relative overflow-hidden backdrop-blur-sm"
          style={{ 
            backgroundColor: `${color}dd`, // Slight transparency
            boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.1), inset 10px 10px 20px rgba(255,255,255,0.4), 5px 10px 15px rgba(0,0,0,0.1)'
          }}
        >
          {/* Shine/Reflection */}
          <div className="absolute top-[15%] left-[20%] w-[25%] h-[12%] bg-gradient-to-br from-white/80 to-transparent rounded-[50%] rotate-[-45deg] blur-[1px]"></div>
          <div className="absolute bottom-[15%] right-[20%] w-[10%] h-[5%] bg-white/20 rounded-[50%] rotate-[-45deg] blur-[2px]"></div>
        </div>
        
        {/* Knot */}
        <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px]" style={{ borderTopColor: color }}></div>
        
        {/* String */}
        <motion.div 
          className="absolute bottom-[-50px] left-1/2 w-[2px] h-[50px] bg-white/60 origin-top"
          style={{ x: "-50%" }}
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const BuildingBlock = ({ letter, color, rotate, x, y, delay }: { letter: string, color: string, rotate: number, x: string, y: string, delay: number }) => (
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, type: "spring", stiffness: 200 }}
    className={`absolute w-12 h-12 md:w-16 md:h-16 rounded-lg shadow-lg flex items-center justify-center text-white font-display font-bold text-2xl md:text-3xl z-10`}
    style={{ 
      backgroundColor: color, 
      transform: `rotate(${rotate}deg)`,
      left: x,
      top: y
    }}
  >
    <div className="absolute inset-0 border-t-4 border-l-4 border-white/30 rounded-lg"></div>
    <div className="absolute inset-0 border-b-4 border-r-4 border-black/10 rounded-lg"></div>
    {letter}
  </motion.div>
);

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/1234567890" // Replace with actual number
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
    whileHover={{ scale: 1.1, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
  >
    <MessageCircle size={32} fill="white" />
  </motion.a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white/95 backdrop-blur-md relative z-20 pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 p-2 rounded-full">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-orange-500 rounded-t-full transform -translate-y-1"></div>
                  <div className="absolute bottom-0 left-0 w-full h-4 bg-orange-500"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-white rounded-t-full"></div>
                </div>
              </div>
              <span className="font-display text-2xl font-bold text-sky-600">Happy Kids</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
                  {['Home', 'About Us', 'Programs', 'Gallery', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 hover:text-orange-500 font-medium transition-colors decoration-wavy hover:underline"
                >
                  {item}
                </a>
              ))}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-colors"
              >
                Book a Tour
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {['Home', 'About Us', 'Programs', 'Gallery', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-3 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg font-medium decoration-wavy hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full mt-4 bg-orange-500 text-white px-6 py-3 rounded-xl font-bold shadow-md">
                  Book a Tour
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Wavy bottom for navbar */}
      <div className="absolute top-full left-0 w-full overflow-hidden leading-none z-10 pointer-events-none -mt-[2px]">
        <svg className="relative block w-full h-[25px] md:h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};

const CloudAnimation = () => (
  <>
    <motion.div 
      animate={{ x: [0, 50, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 right-10 text-sky-100 opacity-60 pointer-events-none z-0"
    >
      <Cloud size={120} fill="currentColor" stroke="none" />
    </motion.div>
    <motion.div 
      animate={{ x: [0, -40, 0] }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      className="absolute top-32 left-10 text-sky-100 opacity-40 pointer-events-none z-0"
    >
      <Cloud size={90} fill="currentColor" stroke="none" />
    </motion.div>
  </>
);

const Hero = () => {
  return (
    <section id="home" className="relative pt-10 pb-32 overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      {/* Interactive Balloons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full z-20">
         <div className="pointer-events-auto">
            <Balloon color="#FF6B6B" x="5%" delay={0} />
            <Balloon color="#4ECDC4" x="20%" delay={8} />
            <Balloon color="#FFE66D" x="85%" delay={3} />
            <Balloon color="#FF9F43" x="65%" delay={12} />
            <Balloon color="#6C5CE7" x="95%" delay={15} />
         </div>
      </div>

      {/* Sun Animation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 md:left-20 text-yellow-400 z-0 opacity-80"
      >
        <Sun size={80} fill="#FACC15" strokeWidth={1.5} />
      </motion.div>

      {/* Clouds */}
      <CloudAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Text Content - Left Side (5 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-sky-900 leading-tight mb-6">
              Safe, Happy, and <span className="text-orange-500 inline-block">Growing</span> Every Day!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A nurturing environment where your little ones can explore, learn, and make lifelong friends under expert childcare.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-orange-600 transition-colors"
              >
                Book a Tour
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-green-600 transition-colors"
              >
                Enrol Now
              </motion.button>
            </div>
          </motion.div>

          {/* Image Content - Right Side (7 columns) - Slightly Smaller */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-7 flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-yellow-200 rounded-full blur-3xl opacity-30 transform translate-y-10"></div>
            <div className="relative w-full max-w-2xl">
              <img 
                src="/images/childcare-kids.png" 
                alt="Happy children playing" 
                className="relative rounded-[3rem] shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Floating Toys */}
              <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                 className="absolute top-16 -right-2 md:-right-6 text-6xl drop-shadow-lg z-20 hidden md:block"
              >
                 🧸
              </motion.div>
              
              <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-20 -right-4 md:-right-10 text-6xl drop-shadow-lg z-20"
              >
                 🎨
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -left-6 bg-white p-3 md:p-4 rounded-2xl shadow-xl border-b-4 border-sky-100 flex items-center gap-3 max-w-[200px] z-20"
              >
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-500">
                  <Smile size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm md:text-base">Rated 5 Stars</p>
                  <p className="text-xs text-gray-500">by Happy Parents</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
      
      <WaveDivider color="#FFFFFF" />
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, color, delay }: { icon: any, title: string, color: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-row items-center gap-2 md:gap-4 bg-white p-2 md:p-6 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-current transition-all h-full justify-start"
    style={{ borderColor: color }}
  >
    <div className={`p-1.5 md:p-4 rounded-full text-white shadow-md shrink-0`} style={{ backgroundColor: color }}>
      <Icon className="w-4 h-4 md:w-7 md:h-7" />
    </div>
    <h3 className="text-xs md:text-xl font-bold text-gray-800 text-left leading-tight">{title}</h3>
  </motion.div>
);

const WelcomeSection = () => {
  return (
    <section id="about-us" className="py-24 bg-white relative overflow-hidden">
      <CloudAnimation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-sky-900 mb-4 flex items-center gap-3">
                <span>
                  Welcome to <span className="underline decoration-wavy decoration-yellow-400">Our Childcare</span> Centre!
                </span>
                <motion.span
                  animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="inline-block text-3xl md:text-4xl"
                >
                  🧸
                </motion.span>
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                A nurturing place where children learn, play, and grow. We provide a safe haven for your little ones to explore their potential.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <FeatureCard icon={Heart} title="Safe & Caring" color="#F27D26" delay={0.1} />
              <FeatureCard icon={Puzzle} title="Fun Learning" color="#FACC15" delay={0.2} />
              <FeatureCard icon={Smile} title="Loving Staff" color="#EF4444" delay={0.3} />
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative">
              {/* Staff Bubbles */}
              <div className="flex -space-x-6">
                {[
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80"
                ].map((src, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="relative z-10"
                  >
                    <img 
                      src={src} 
                      alt="Staff member" 
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              {/* Decorative stars */}
              <div className="absolute -top-8 right-0 text-yellow-400 animate-pulse">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Gallery */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-display font-bold text-sky-900">Explore Our Environment</h3>
            <p className="text-gray-600 mt-2">Designed for safety, creativity, and fun!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "https://images.pexels.com/photos/5435599/pexels-photo-5435599.jpeg", title: "Sunny Classrooms" },
              { src: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg", title: "Creative Play Area" },
              { src: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg", title: "Outdoor Playground" }
            ].map((item, index) => (
              <motion.a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="group relative overflow-hidden rounded-3xl shadow-lg border-4 border-white block cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-white font-bold text-xl">{item.title}</h4>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <WaveDivider color="#F0F9FF" position="bottom" flip />
    </section>
  );
};

const ProgramCard = ({ title, age, icon: Icon, color, bg, delay, features }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="rounded-3xl text-center relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
  >
    {/* Coloured header band */}
    <div className="relative px-4 pt-6 pb-10 md:px-8 md:pt-8 md:pb-14" style={{ backgroundColor: bg }}>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="mx-auto w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg text-gray-700"
      >
        <Icon className="w-7 h-7 md:w-11 md:h-11" style={{ color }} />
      </motion.div>
      {/* Emoji accent */}
      <div className="absolute top-3 right-3 md:top-4 md:right-4 text-xl md:text-2xl opacity-60">
        {title === 'Infants' ? '🧸' : title === 'Toddlers' ? '🦒' : '🎨'}
      </div>
    </div>

    {/* Content area */}
    <div className="relative z-10 px-4 pb-5 pt-4 md:px-8 md:pb-8 md:pt-6 -mt-4 bg-white rounded-t-3xl">
      <h3 className="text-lg md:text-2xl font-display font-bold text-gray-800 mb-1">{title}</h3>
      <div className="inline-block text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: bg, color }}>
        {age}
      </div>

      {/* Feature list */}
      <ul className="text-left space-y-2 mb-5 md:mb-6">
        {features.map((feat: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
            <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: bg }}>
              <Star className="w-3 h-3" style={{ color }} fill={color} />
            </span>
            {feat}
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-white font-bold py-2.5 px-4 md:py-3 md:px-8 text-sm md:text-base rounded-full shadow-md transition-colors w-full"
        style={{ backgroundColor: color }}
      >
        Learn More
      </motion.button>
    </div>
  </motion.div>
);

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-sky-50 relative overflow-hidden">
      <CloudAnimation />
      {/* Background doodles */}
      <div className="absolute top-10 left-10 z-10">
        <div className="relative scale-75 origin-top-left">
          <BuildingBlock letter="A" color="#EF4444" rotate={-12} x="0" y="0" delay={0.5} />
          <BuildingBlock letter="B" color="#3B82F6" rotate={6} x="45px" y="-25px" delay={0.7} />
          <BuildingBlock letter="C" color="#F59E0B" rotate={-5} x="90px" y="10px" delay={0.9} />
        </div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 -rotate-12">
        <div className="w-32 h-32 border-4 border-orange-400 rounded-lg"></div>
      </div>
      
      {/* Decorative Stars and Pens */}
      <motion.div 
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 text-yellow-400 opacity-60 hidden md:block"
      >
        <Star size={48} fill="currentColor" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-40 left-10 text-pink-400 opacity-60 hidden md:block"
      >
        <Pencil size={48} fill="currentColor" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-sky-900 mb-4">Our Programs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProgramCard
            title="Infants"
            age="0\u20132 Years"
            icon={Baby}
            color="#60A5FA"
            bg="#EFF6FF"
            delay={0.1}
            features={["Sensory play & exploration", "Gentle daily routines", "One-to-one bonding time"]}
          />
          <ProgramCard
            title="Toddlers"
            age="2\u20134 Years"
            icon={Gamepad2}
            color="#F59E0B"
            bg="#FFFBEB"
            delay={0.2}
            features={["Creative arts & music", "Social skills development", "Outdoor adventure play"]}
          />
          <ProgramCard
            title="Preschool"
            age="4\u20136 Years"
            icon={BookOpen}
            color="#10B981"
            bg="#ECFDF5"
            delay={0.3}
            features={["Early reading & writing", "Maths & problem solving", "School readiness programme"]}
          />
        </div>
      </div>
      <WaveDivider color="#FFFFFF" position="bottom" />
    </section>
  );
};

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      name: "Laura M.",
      text: "My child loves it here! The staff is so caring and the activities fantastic! I've seen so much growth in just a few months.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      name: "James P.",
      text: "The best decision we made for our daughter. The environment is safe, clean, and incredibly stimulating for young minds.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      name: "Sarah K.",
      text: "Friendly staff and great communication. I love getting updates about my son's day. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  const next = () => setCurrent((curr) => (curr + 1) % testimonials.length);
  const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-yellow-400 opacity-40">
           <Star size={64} fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-10 text-purple-400 opacity-40">
           <Pencil size={56} className="transform -rotate-45" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Testimonial Slider */}
          <div>
            <div className="flex items-center gap-4 mb-8">
               <div className="text-4xl text-orange-400">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
               </div>
               <h2 className="text-3xl font-display font-bold text-orange-800">What Parents Say!</h2>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8 relative border-2 border-orange-100">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-6 items-center md:items-start"
              >
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <p className="text-lg text-gray-700 italic mb-4">"{testimonials[current].text}"</p>
                  <p className="font-bold text-orange-600">— {testimonials[current].name}</p>
                </div>
              </motion.div>

              <div className="flex justify-center md:justify-end gap-2 mt-6">
                <button onClick={prev} className="p-2 rounded-full bg-white text-orange-500 hover:bg-orange-500 hover:text-white transition-colors shadow-sm">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={next} className="p-2 rounded-full bg-white text-orange-500 hover:bg-orange-500 hover:text-white transition-colors shadow-sm">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative h-[300px] w-full">
             <div className="absolute -inset-4 bg-yellow-100 rounded-[2rem] rotate-2"></div>
             <div className="relative bg-white p-2 rounded-[1.5rem] shadow-lg overflow-hidden h-full w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.24168138927907565!3d51.52873519756608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1645564756836!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="rounded-2xl"
                ></iframe>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-yellow-50 to-orange-50 relative overflow-hidden">
      <CloudAnimation />
      {/* Decorative House Illustration at bottom right */}
      <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-80 pointer-events-none z-0 opacity-100">
         <svg viewBox="0 0 500 300" className="w-full h-full">
            {/* Ground */}
            <path d="M0,250 Q250,200 500,250 L500,300 L0,300 Z" fill="#86EFAC" />
            {/* House */}
            <rect x="300" y="150" width="150" height="120" fill="#FDBA74" />
            <path d="M280,150 L375,80 L470,150 Z" fill="#EF4444" />
            <rect x="330" y="180" width="30" height="30" fill="#93C5FD" stroke="#fff" strokeWidth="4" />
            <rect x="390" y="180" width="30" height="30" fill="#93C5FD" stroke="#fff" strokeWidth="4" />
            <rect x="350" y="220" width="50" height="50" fill="#78350F" />
            {/* Tree */}
            <rect x="150" y="200" width="20" height="60" fill="#78350F" />
            <circle cx="160" cy="180" r="40" fill="#22C55E" />
         </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-orange-800 mb-4">Schedule a Visit</h2>
          <p className="text-lg text-orange-700">Come see our centre in action! We'd love to meet you.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-[2px] rounded-3xl p-8 shadow-xl border border-orange-100/30">
          <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Your Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                placeholder="Jane Smith"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Phone Number</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                placeholder="07123 456789"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                placeholder="jane@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Child's Age</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white">
                <option>Select age...</option>
                <option>Infant (0-2 years)</option>
                <option>Toddler (2-4 years)</option>
                <option>Preschool (4-6 years)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Preferred Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="date" 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                />
              </div>
            </div>
            <div className="flex items-end">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-orange-600 transition-colors"
              >
                Submit Request
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative py-16 pt-24 overflow-hidden" style={{ backgroundColor: '#fff9e6' }}>
      {/* Hand-drawn border top */}
      <div className="absolute top-0 left-0 w-full h-8 bg-repeat-x" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='10' viewBox='0 0 40 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 10 0 20 5 T 40 5' stroke='%23f97316' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 10px'
      }}></div>

      {/* Kid Drawing Background Pattern - More prominent */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="kid-drawings-footer" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
             {/* Sun */}
             <circle cx="40" cy="40" r="20" fill="none" stroke="#facc15" strokeWidth="2" />
             <path d="M40 10 L40 0 M40 70 L40 80 M10 40 L0 40 M70 40 L80 40" stroke="#facc15" strokeWidth="2" />
             {/* House */}
             <path d="M120 120 L140 100 L160 120 L160 160 L120 160 Z" fill="none" stroke="#ef4444" strokeWidth="2" />
             {/* Tree */}
             <path d="M220 160 L220 120 M200 120 Q220 80 240 120 Z" fill="none" stroke="#22c55e" strokeWidth="2" />
             {/* Scribbles */}
             <path d="M20 200 Q 60 240 100 200 T 180 200" fill="none" stroke="#3b82f6" strokeWidth="2" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#kid-drawings-footer)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 font-display text-sky-900">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-full transform -rotate-6">
                <Smile size={24} className="text-white" />
              </div>
              <span className="text-3xl font-bold tracking-tight">Happy Kids</span>
            </div>
            <p className="text-sky-800 max-w-sm font-medium text-lg" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
              Providing a safe, nurturing, and fun environment for your children to grow and learn.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-4 text-orange-600">Quick Links</h4>
            <ul className="space-y-2 text-sky-800 font-medium">
              <li><a href="#home" className="hover:text-orange-500 transition-colors decoration-wavy hover:underline">Home</a></li>
              <li><a href="#about-us" className="hover:text-orange-500 transition-colors decoration-wavy hover:underline">About Us</a></li>
              <li><a href="#programs" className="hover:text-orange-500 transition-colors decoration-wavy hover:underline">Programs</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors decoration-wavy hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4 text-orange-600">Contact Us</h4>
            <ul className="space-y-3 text-sky-800 font-medium">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-orange-500" /> <span>07123 456789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-orange-500" /> <span>hello@happykids.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-orange-500" /> <span>123 Sunshine Lane, London</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-white border-2 border-sky-200 p-2 rounded-full hover:border-orange-400 hover:text-orange-500 transition-all transform hover:scale-110"><Instagram size={20} /></a>
              <a href="#" className="bg-white border-2 border-sky-200 p-2 rounded-full hover:border-orange-400 hover:text-orange-500 transition-all transform hover:scale-110"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 text-center text-sky-600 font-bold relative">
          <div className="absolute top-0 left-0 w-full h-4 bg-repeat-x" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='10' viewBox='0 0 40 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 10 0 20 5 T 40 5' stroke='%23bae6fd' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 10px'
          }}></div>
          © {new Date().getFullYear()} Happy Kids Childcare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-200 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <WelcomeSection />
        <ProgramsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
