import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, avatar }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-md shadow-xl max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6">
        <img src={avatar} alt={name} className="w-16 h-16 rounded-full mr-4 border-2 border-pink-500" />
        <div>
          <h3 className="text-2xl font-semibold text-pink-400">{name}</h3>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>
      <p className="text-white text-lg leading-relaxed">{content}</p>
      <div className="mt-6 flex justify-end">
        <svg className="w-8 h-8 text-pink-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
    </motion.div>
  );
};

export default Testimonial;

