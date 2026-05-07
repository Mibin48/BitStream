import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, MessageSquare, Hash } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t-[3px] border-black bg-gray-50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-purple-500 border-[2.5px] border-black rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">B</span>
              </div>
              <span className="font-black text-2xl">BitStream</span>
            </div>
            <p className="text-sm font-semibold text-gray-600 leading-relaxed">
              MIT Licensed. Built for the Decentralized Web.
            </p>
            <div className="bg-green-500 border-[2px] border-black px-3 py-1.5 rounded-lg inline-block"
              style={{ boxShadow: '3px 3px 0 0 #0F172A' }}>
              <span className="font-black text-white text-[9px] tracking-wider uppercase">Open Source</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-sm mb-3 uppercase">Resources</h4>
            <div className="space-y-2">
              {[
                { name: 'Docs', href: '/docs' },
                { name: 'Features', href: '/features' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'About', href: '/about' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map(link => (
                <Link key={link.name} to={link.href} className="block text-sm font-semibold text-gray-600 hover:text-black">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-sm mb-3 uppercase">Connect</h4>
            <div className="flex gap-2">
              {[
                { icon: Code2, color: 'bg-purple-500' },
                { icon: MessageSquare, color: 'bg-green-500' },
                { icon: Hash, color: 'bg-cyan-500' }
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-10 h-10 ${s.color} border-[2px] border-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform`}
                  style={{ boxShadow: '0 3px 0 0 #0F172A' }}
                >
                  <s.icon size={18} strokeWidth={2.5} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t-[2px] border-black text-center">
          <p className="text-xs font-semibold text-gray-500">
            © {new Date().getFullYear()} BitStream Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
