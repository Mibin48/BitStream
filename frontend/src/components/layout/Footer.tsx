import { Link } from 'react-router-dom';
import { Code2, MessageSquare, Hash } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';


const Footer = () => {
  return (
    <footer className="border-t-[4px] border-black bg-white pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                className="w-12 h-12"
              >
                <path
                  d="M50,15 A25,25 0 1,0 50,65 A25,25 0 1,0 50,15 Z M35,40 A25,25 0 1,0 35,90 A25,25 0 1,0 35,40 Z M65,40 A25,25 0 1,0 65,90 A25,25 0 1,0 65,40 Z"
                  fill="white"
                  stroke="black"
                  strokeWidth="8"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-black text-3xl tracking-tighter uppercase">BitStream</span>
            </div>

            <p className="text-lg font-bold text-gray-500 leading-relaxed max-w-sm">
              The high-performance protocol for the decentralized web. Built for engineers.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-green-400 border-[2.5px] border-black px-4 py-1.5 rounded-xl inline-block shadow-[4px_4px_0_0_#000]">
                <span className="font-black text-black text-[10px] tracking-widest uppercase">Open Source</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs mb-6 uppercase tracking-[0.2em] text-gray-400">Resources</h4>
            <div className="space-y-4">
              {[
                { name: 'Documentation', href: '/docs' },
                { name: 'Core Features', href: '/features' },
                { name: 'Pricing Plans', href: '/pricing' },
                { name: 'Engineering Blog', href: '/blog' }
              ].map(link => (
                <Link key={link.name} to={link.href} className="block text-base font-black text-gray-600 hover:text-purple-600 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs mb-6 uppercase tracking-[0.2em] text-gray-400">Company</h4>
            <div className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Contact Team', href: '/contact' },
                { name: 'Legal / Privacy', href: '#' },
                { name: 'Status Page', href: '#' }
              ].map(link => (
                <Link key={link.name} to={link.href} className="block text-base font-black text-gray-600 hover:text-purple-600 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs mb-6 uppercase tracking-[0.2em] text-gray-400">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Code2, color: 'bg-purple-600' },
                { icon: MessageSquare, color: 'bg-green-500' },
                { icon: Hash, color: 'bg-cyan-400' }
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-12 h-12 ${s.color} border-[3px] border-black rounded-2xl flex items-center justify-center hover:-translate-y-1 hover:-translate-x-1 transition-all shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000]`}
                >
                  <s.icon size={22} strokeWidth={3} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t-[3px] border-black flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-black text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} BitStream Protocol. Distributed System.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-300">
            <span className="hover:text-black cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-black cursor-pointer transition-colors">Security Registry</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
