import Image from 'next/image';
// import Link from 'next/link';
import { Navbar } from '../components/Home/Navbar';
import { AboutSection } from '../components/Home/AboutSection';
import { ProjectSection } from '../components/Project/ProjectSection';
import { ContactSection } from '../components/Home/ContactSection';
import { Footer } from '../components/Home/Footer';
import RootLayout from './layout';

export default function Home() {
  return (
    <>
      {/* <RootLayout> */}
      <main className="w-min-[85%] flex min-h-screen flex-col items-center pt-24">
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* </RootLayout> */}
    </>
  );
}
