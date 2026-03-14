import { motion } from 'motion/react';
import { ArrowRight, PlayCircle, Users, BookOpen, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-8 border border-indigo-100"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
            Impetus is live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8"
          >
            Focus on learning, <br className="hidden md:block" />
            <span className="text-[#513af7]">
              Impetus handle the rest.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The modern learning management system that empowers educators to teach and students to thrive, without the administrative friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group">
              Start for free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-all border border-slate-200 flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5 text-indigo-600" />
              Watch demo
            </button>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-slate-200/60 bg-white/50 backdrop-blur-sm p-2 shadow-2xl shadow-indigo-100/50">
            <div className="rounded-xl overflow-hidden border border-slate-100 bg-white">
              {/* Mock Dashboard Header */}
              <div className="h-12 border-b border-slate-100 flex items-center px-4 gap-4 bg-slate-50/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="h-6 w-64 bg-white rounded-md border border-slate-200 mx-auto flex items-center px-2">
                  <div className="h-3 w-32 bg-slate-100 rounded-sm" />
                </div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="p-6 grid grid-cols-12 gap-6 h-[400px]">
                {/* Sidebar */}
                <div className="col-span-3 space-y-4 border-r border-slate-100 pr-6 hidden md:block">
                  <div className="h-8 w-24 bg-slate-100 rounded-md mb-8" />
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-slate-200" />
                      <div className="h-4 w-full bg-slate-100 rounded" />
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="col-span-12 md:col-span-9 space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="h-6 w-48 bg-slate-800 rounded-md mb-2" />
                      <div className="h-4 w-32 bg-slate-200 rounded-md" />
                    </div>
                    <div className="h-10 w-32 bg-indigo-600 rounded-lg" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
                      { icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                      { icon: Award, color: 'text-amber-500', bg: 'bg-amber-50' },
                    ].map((stat, i) => (
                      <div key={i} className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                        <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center mb-3`}>
                          <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        </div>
                        <div className="h-6 w-16 bg-slate-800 rounded-md mb-1" />
                        <div className="h-3 w-24 bg-slate-200 rounded-md" />
                      </div>
                    ))}
                  </div>

                  <div className="h-48 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div className="h-4 w-32 bg-slate-200 rounded-md mb-4" />
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-full bg-white rounded-md border border-slate-100" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
