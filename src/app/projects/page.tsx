import { Navbar } from '@/components/Home/Navbar';

export default function Projects({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  return (
    <>
      <main className="w-[80%] flex min-h-screen flex-col items-center pt-24">
        <h1 className="project-headers">Project Name: {searchParams.name}</h1>
        <p id="summary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          dolorum veritatis ipsum est repellendus expedita itaque magnam dolore
          nulla accusamus assumenda repellat vel atque possimus. Laboriosam
          iusto ipsum saepe commodi?
        </p>
        <div id="tech-stack-container" className="flex flex-col items-center">
          <h2 className="project-headers">Tech Stack</h2>
          maybe put little rectangles with the tech name in them here
        </div>
        <div id="image-of-the-project" className="h-80 w-96 border">
          large image of the site
        </div>
        <div id="project-goal">
          <h2 className="project-headers">Goals of the project</h2>
        </div>
        <div className="problems-that-occured">
          <h2 className="project-headers">
            Development Difficulties or Issues
          </h2>
        </div>
      </main>
    </>
  );
}
