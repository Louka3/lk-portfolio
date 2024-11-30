import { Navbar } from '@/components/Home/Navbar';

export default function Projects({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center pt-24">
        <h1>Project Name: {searchParams.name}</h1>
      </main>
    </>
  );
}
