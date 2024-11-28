'use client';
import Link from 'next/link';

export const Navbar = (): JSX.Element => {
  return (
    <nav className="z-50 w-full top-0 bg-white fixed flex h-24 justify-center items-center mb-5 md:mb-8 lg:mb-10 px-12">
      <div
        id="nav-content"
        className="w-[85%] flex justify-between items-center "
      >
        <p className="w-auto text-sm font-cabin md:underline md:text-base lg:text-3xl">
          Louis Kuczykowski
        </p>
        <ul className="font-bold text-xs flex justify-end pr-8 md:text-base lg:text-2xl">
          <li className="mr-2 hover:underline md:mr-4 lg:mr-8">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-2 hover:underline md:mr-4 lg:mr-8">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
