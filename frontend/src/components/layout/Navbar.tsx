import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const location = useLocation();

  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (current) => {
      const diff = current - lastScrollY;
      
      // Ignore tiny jitter (under 10px) to prevent flickering
      if (Math.abs(diff) < 10) return;

      const isAtTop = current < 100;
      const isScrollingUp = diff < 0;

      if (isAtTop || isScrollingUp) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
      setLastScrollY(current);
    });
    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Docs', href: '/docs' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isNavVisible ? 0 : -120 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div
        className="bg-white border-[3px] border-black px-6 py-3 flex justify-between items-center backdrop-blur-sm bg-white/95"
        style={{
          borderRadius: '100px',
          boxShadow: '0 8px 0 0 #0F172A'
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-purple-500 border-[2.5px] border-black flex items-center justify-center rounded-lg">
            <span className="text-white font-black text-lg">B</span>
          </div>
          <span className="font-black text-xl tracking-tight hidden sm:block">BitStream</span>
        </Link>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(item => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-1.5 font-bold text-sm rounded-full transition-all border-[2.5px] ${
                  isActive
                    ? 'bg-purple-500 text-white border-black shadow-[0_2px_0_0_#0F172A] -translate-y-[2px]'
                    : 'text-gray-700 hover:text-black hover:bg-gray-50 border-transparent hover:border-black/10'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden md:block font-bold text-sm text-gray-700 hover:text-black transition-colors px-2">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 border-[2.5px] border-black px-6 py-2.5 rounded-full font-black text-sm text-white hover:bg-green-600 transition-all flex items-center justify-center active:scale-95 group"
            style={{ boxShadow: '0 4px 0 0 #0F172A' }}
          >
            Sign up <ArrowRight size={16} strokeWidth={4} className="ml-1.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
