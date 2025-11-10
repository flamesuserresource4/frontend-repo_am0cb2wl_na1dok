import Hero from './components/Hero';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import TestimonialsFacilitiesFooter from './components/TestimonialsFacilitiesFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Hero />
      <Programs />
      <Trainers />
      <Pricing />
      <TestimonialsFacilitiesFooter />
    </div>
  );
}
