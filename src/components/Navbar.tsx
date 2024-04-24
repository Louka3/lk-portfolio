'use server';
import Link from 'next/link';

export const Navbar = (): JSX.Element => {
  return (
    <nav className="w-p flex h-12 justify-between items-center mb-5 md:mb-8 lg:mb-10">
      <p className="w-auto text-sm font-cabin md:underline md:text-base lg:text-2xl">
        Louis Kuczykowski
      </p>
      <ul className="font-bold text-xs flex justify-end pr-8 md:text-base lg:text-xl">
        <li className="mr-2 hover:underline md:mr-4 lg:mr-8">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:underline">
          <Link href="#contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};
