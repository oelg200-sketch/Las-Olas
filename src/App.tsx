import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ocean-50 font-body">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
