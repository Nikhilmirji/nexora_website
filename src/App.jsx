import LightRays from './components/LightRays';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sponsors from './components/Sponsors';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Recruitment from './components/Recruitment';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-bg-dark">
      {/* WebGL LightRays Background - fixed, fullscreen, behind everything */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00f0ff"
          raysSpeed={0.6}
          lightSpread={1.2}
          rayLength={2.5}
          pulsating={true}
          fadeDistance={1.2}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.02}
          distortion={0.3}
        />
      </div>

      {/* Content layer above background */}
      <div className="relative z-10 w-full">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Sponsors />
          <FAQs />
          <Contact />
          <Recruitment />
        </main>
      </div>
    </div>
  );
}

export default App;
