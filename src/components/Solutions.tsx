import { motion } from 'motion/react';
import { CheckCircle2, GraduationCap, Presentation } from 'lucide-react';

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* For Teachers */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-medium text-sm mb-6 border border-emerald-100">
              <Presentation className="w-4 h-4" />
              For Educators
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Spend less time managing, more time teaching.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Lumina automates the tedious parts of teaching so you can focus on what matters most: your students. From grading to course creation, everything is streamlined.
            </p>
            
            <ul className="space-y-4">
              {[
                'Automated grading and instant feedback',
                'Drag-and-drop course builder',
                'Real-time student progress tracking',
                'One-click integrations with Zoom and Google Drive'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000" 
              alt="Teacher using laptop" 
              className="rounded-3xl shadow-xl object-cover h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* For Students */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-indigo-100 to-purple-50 rounded-3xl transform -rotate-3 scale-105 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
              alt="Students collaborating" 
              className="rounded-3xl shadow-xl object-cover h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-6 border border-indigo-100">
              <GraduationCap className="w-4 h-4" />
              For Students
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A learning experience you'll actually enjoy.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No more clunky interfaces or confusing navigation. Lumina provides a clean, intuitive dashboard where you can find everything you need instantly.
            </p>
            
            <ul className="space-y-4">
              {[
                'Personalized learning paths and recommendations',
                'Interactive assignments and quizzes',
                'Built-in study groups and discussion boards',
                'Mobile app for learning on the go'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
