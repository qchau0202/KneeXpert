import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { QrCode, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react"

// Screenshot imports
import systemScreenshot1 from './assets/kneexpert-screenshot-1.jpg';
import systemScreenshot2 from './assets/kneexpert-screenshot-2.jpg';
import systemScreenshot3 from './assets/kneexpert-screenshot-3.jpg';
import systemScreenshot4 from './assets/kneexpert-screenshot-4.jpg';
import systemScreenshot5 from './assets/kneexpert-screenshot-5.jpg';
import systemScreenshot6 from './assets/kneexpert-screenshot-6.jpg';
import systemScreenshot7 from './assets/kneexpert-screenshot-7.jpg';
import systemScreenshot8 from './assets/kneexpert-screenshot-8.jpg';
import systemScreenshot9 from './assets/kneexpert-screenshot-9.jpg';
import kneexpertGithub from './assets/kneexpert-github.png';
import ownerPortfolio from './assets/owner-portfolio.png';
import projectPoster from './assets/kneexpert-poster.png';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

// ==========================================
// SIDEBAR (Notion Style)
// ==========================================
const FloatingSidebar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'carousel', 'poster', 'footer'];
      // Check which section is currently in the middle of the viewport
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Introduction' },
    { id: 'carousel', label: 'System Screenshots' },
    { id: 'poster', label: 'Project Poster' }, // Added this line
    // { id: 'footer', label: 'Credits' },
  ];

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 group flex flex-col gap-6 py-8">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="flex items-center gap-4 cursor-pointer relative"
        >
          {/* Collapsed Indicator Lines */}
          <div 
            className={`h-[3px] rounded-full transition-all duration-300 ${
              activeSection === item.id 
                ? 'w-6 bg-primary shadow-[0_0_6px_rgba(0,103,218,0.5)]' 
                : 'w-3 bg-gray-300 group-hover:bg-gray-400'
            }`}
          />
          {/* Zoom-out Text Labels */}
          <span 
            className={`absolute left-10 whitespace-nowrap transition-all duration-300 origin-left ${
              activeSection === item.id ? 'text-primary font-medium' : 'text-gray-500 hover:text-black'
            } opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto`}
          >
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
};

// ==========================================
// SECTION 1: Hero
// ==========================================
const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Welcome to <span className="text-primary underline">KneeXpert</span>
        </h1>
        <p className="text-md md:text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          An artificial intelligence system designed for precise knee joint analysis and diagnosis, using dual-modality X-ray & MRI architectures.
        </p>

        {/* Demo Video Container */}
        <div className="w-full max-w-4xl mx-auto aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-100 relative flex items-center justify-center">
          <video src="/KneeXpert-demo.mp4" controls autoPlay loop muted className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 2: Carousel
// ==========================================
const CarouselSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null); 
  
  const tabs = ['All', 'Analysis', 'Diagnosis', 'System'];

  const slidesData = [
    { id: 1, src: systemScreenshot1, title: 'Dashboard', category: 'Analysis' },
    { id: 2, src: systemScreenshot2, title: 'Patient Management', category: 'Diagnosis' },
    { id: 3, src: systemScreenshot3, title: 'Diagnostic Workspace', category: 'System' },
    { id: 4, src: systemScreenshot4, title: 'Patient Reports', category: 'Analysis' },
    { id: 5, src: systemScreenshot5, title: 'Patient Records', category: 'System' },
    { id: 6, src: systemScreenshot6, title: 'Anomaly Detection', category: 'Diagnosis' },
    { id: 7, src: systemScreenshot7, title: 'Output 1', category: 'Analysis' },
    { id: 8, src: systemScreenshot8, title: 'Output 2', category: 'System' },
    { id: 9, src: systemScreenshot9, title: 'Output 3', category: 'Diagnosis' },
  ];

  const filteredSlides = activeTab === 'All' 
    ? slidesData 
    : slidesData.filter(slide => slide.category === activeTab);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <section id="carousel" className="min-h-screen flex flex-col items-center justify-center py-24 bg-[#f7f5f2] px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          System Screenshots
        </h1>
      <div className="bg-white rounded-xl shadow-xl w-full max-w-6xl p-8 md:p-14 relative ml-0 md:ml-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center px-4 md:px-12">
          <button className="custom-prev absolute left-0 z-10 p-2 text-gray-400 hover:text-black transition-colors disabled:opacity-30">
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
            key={activeTab} 
          >
            {filteredSlides.map((slide) => (
              <SwiperSlide key={slide.id} className="pb-4">
                <div 
                  onClick={() => setSelectedImage(slide)}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer group"
                >
                  <div className="h-48 w-full bg-gray-100 overflow-hidden">
                    <img 
                      src={slide.src} 
                      alt={slide.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-black mb-1 group-hover:text-primary transition-colors">{slide.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-next absolute right-0 z-10 p-2 text-gray-400 hover:text-black transition-colors disabled:opacity-30">
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-12 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} strokeWidth={1.5} />
          </button>

          <div className="relative max-w-6xl w-full max-h-full flex flex-col items-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()} 
            />
            <div className="text-center mt-4 bg-black/50 py-2 px-6 rounded-full text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// ==========================================
// SECTION 3: Poster
// ==========================================
const PosterSection = () => {
  return (
    <section id="poster" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-white text-center">
      <div className="mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Project Poster
        </h1>
        <p className="text-md md:text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          A comprehensive overview of the KneeXpert architecture, methodology, and diagnostic results.
        </p>
        
        {/* Poster Image Container */}
        <div className="w-full bg-gray-50 rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-100 p-2 md:p-6 flex justify-center items-center">
          <img 
            src={projectPoster} 
            alt="KneeXpert Project Poster" 
            className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 4: Footer
// ==========================================
const FooterSection = () => {
  return (
    <footer id="footer" className="bg-[#f7f5f2] text-white pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pb-8 mb-6">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className='flex items-center'>
            <img src="./kneexpert-nobg.png" className="h-10"/>
            <h3 className="text-2xl font-bold text-primary">KneeXpert</h3>
          </div>
          <p className="text-gray-500 text-sm max-w-md pl-2">
            Showcasing medical AI implementations and system architecture.
          </p>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-white p-2 rounded-lg">
              {/* <QrCode className="w-16 h-16 text-black" /> */}
              <img src={ownerPortfolio} className="w-16 h-16"/>
            </div>
            <span className="text-xs text-gray-500 mt-2">Contact Owner</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-2 rounded-lg">
              {/* <QrCode className="w-16 h-16 text-black" /> */}
              <img src={kneexpertGithub} className="w-16 h-16"/>
            </div>
            <span className="text-xs text-gray-500 mt-2">Github</span>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} @KneeXpert. All rights reserved.</p>
      </div>
    </footer>
  );
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================
function App() {
  return (
    <div className="font-sans antialiased text-black selection:bg-primary selection:text-white relative">
      <FloatingSidebar />
      <HeroSection />
      <CarouselSection />
      <PosterSection />
      <FooterSection />
      <Analytics/>
    </div>
  );
}

export default App;