import Image from 'next/image';
// import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { AboutSection } from '../components/AboutSection';
import { ProjectSection } from '../components/ProjectSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center pt-24">
        <Navbar />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
