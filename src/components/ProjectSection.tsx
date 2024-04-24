'use server';
import Link from 'next/link';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectSection = (): JSX.Element => {
  return (
    <div id="projects" className="my-10 w-p flex flex-col xl:my-24">
      <div className="text-center text-4xl my-8 font-cabin underline lg:text-start 2xl:text-5xl">
        Projects
      </div>
      <div
        id="card-container"
        className="font-merriweather flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-5"
      >
        <ProjectCard
          name="React Labyrinth"
          url="https://github.com/oslabs-beta/React-Labyrinth/"
          description="A VS Code Extension that generates a hierarchical tree of React
                components and identifies the component type with a single file
                upload."
          imgName="reactLab"
          //   className="bg-reactLab"
        />
        <ProjectCard
          name="Articon"
          url="https://github.com/Articon-scratch-project/Articon"
          description="An application that allows you to find famous artworks to use as
          reaction images for various emotions and situations."
          imgName="articon"
          //   className="bg-articon"
        />
        <ProjectCard
          name="Co-Sync"
          url="https://github.com/IterationDreamTeam/Co-Sync"
          description="Co-Sync is a SCRUM app. It's main focus is to help teams
          manage their projects and tasks."
          imgName="coSync"
          //   className="bg-coSync"
        />
        <ProjectCard
          name="Personal Bookshelf"
          url="https://github.com/Louka3/personal-bookshelf"
          description="A personal digital library to help users keep track of books
          they've read, enjoyed, or dropped before finishing."
          imgName="personalBookshelf"
          //   className="bg-personalBookshelf"
        />
      </div>
    </div>
  );
};
