'use server';
import Link from 'next/link';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectSection = (): JSX.Element => {
  return (
    <div id="projects" className="my-10 w-p flex flex-col">
      <div className="text-4xl my-8 font-cabin underline">Projects</div>
      <div
        id="card-container"
        className="grid grid-cols-2 gap-5 font-merriweather"
      >
        <ProjectCard
          name="React Labyrinth"
          url="https://github.com/oslabs-beta/React-Labyrinth/"
          description="A VS Code Extension that generates a hierarchical tree of React
                components and identifies the component type with a single file
                upload."
          imgName="reactLab"
        />
        {/* <ProjectCard
          name="Articon"
          url="https://github.com/Articon-scratch-project/Articon"
          description="An application that allows you to find famous artworks to use as
          reaction images for various emotions and situations."
          imgName="articon"
        />
        <ProjectCard
          name="Co-Sync"
          url="https://github.com/IterationDreamTeam/Co-Sync"
          description="Co-Sync is a SCRUM app. It's main focus is to help teams
          manage their projects and tasks."
          imgName="coSync"
        />
        <ProjectCard
          name="Personal Bookshelf"
          url="https://github.com/Louka3/personal-bookshelf"
          description="A personal digital library to help users keep track of books
          they've read, enjoyed, or dropped before finishing."
          imgName="personalBookshelf"
        /> */}
      </div>
    </div>
  );
};
