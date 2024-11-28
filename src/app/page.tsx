import Image from 'next/image';
// import Link from 'next/link';
import { Navbar } from '../components/Home/Navbar';
import { AboutSection } from '../components/Home/AboutSection';
import { ProjectSection } from '../components/Project/ProjectSection';
import { ContactSection } from '../components/Home/ContactSection';
import { Footer } from '../components/Home/Footer';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center pt-24">
        <Navbar />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        {/* <Footer /> */}
      </main>
    </>
  );
}
