'use server';
import Link from 'next/link';

export const Navbar = (): JSX.Element => {
  return (
    <nav className="w-p flex h-12 justify-between items-center mb-14">
      <p className="w-auto text-2xl font-cabin underline">Louis Kuczykowski</p>
      <ul className="font-bold  text-xl flex justify-end pr-8">
        <li className="mr-8">
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};