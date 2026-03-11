import { motion } from 'motion/react';
import { BookOpen, Users, BarChart3, Clock, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Intuitive Course Builder',
    description: 'Create engaging, interactive courses in minutes with our drag-and-drop builder. No coding required.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    description: 'Track student progress, identify at-risk learners, and measure course effectiveness with real-time data.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Clock,
    title: 'Automated Grading',
    description: 'Save hours of administrative work with automated quizzes, rubrics, and instant feedback tools.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Everything you need
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful features, simple design
          </h3>
          <p className="text-lg text-slate-600">
            We've stripped away the complexity of traditional LMS platforms to give you exactly what you need to teach and learn effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
