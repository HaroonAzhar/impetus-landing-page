import { motion } from 'motion/react';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Lumina</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#solutions" className="text-slate-600 hover:text-indigo-600 transition-colors">Solutions</a>
            <a href="#testimonials" className="text-slate-600 hover:text-indigo-600 transition-colors">Testimonials</a>
            <div className="flex items-center gap-4 ml-4">
              <button className="text-slate-600 hover:text-indigo-600 font-medium">Log in</button>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#features" className="block text-slate-600 font-medium py-2">Features</a>
          <a href="#solutions" className="block text-slate-600 font-medium py-2">Solutions</a>
          <a href="#testimonials" className="block text-slate-600 font-medium py-2">Testimonials</a>
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full text-center text-slate-600 font-medium py-2 border border-slate-200 rounded-lg">Log in</button>
            <button className="w-full bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
