import React from 'react';
import { useAudio } from './hooks/useAudio';
import { MusicControl } from './components/MusicControl';
import { Hero } from './components/Hero';
import { ChurchSection } from './components/ChurchSection';
import { PhotoCarousel } from './components/PhotoCarousel';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {  MusicWrapper } from './components/MusicWrapper';
function App() {
  const { isPlaying, toggleMusic } = useAudio('music/cancion.mp3', );
  
  // Control de módulos - cambiar a false para ocultar secciones
  const showChurchSection = true;
  const showPartySection = true;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <MusicWrapper />
      <MusicControl isPlaying={isPlaying} onToggle={toggleMusic} />
      
      <Hero />
      
      <ChurchSection show={showChurchSection} />
      
      
      
      <PhotoCarousel />
      

      
      <ContactSection />
      
      <Footer />
    </div>
  );
}

export default App;