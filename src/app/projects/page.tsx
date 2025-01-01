'use client';
import { Navbar } from '@/components/Home/Navbar';
import { ContentSplit } from '@/components/Universal/ContentSplit';
import { useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  imgName: string;
}

export default function Projects({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  const [projectName, setProjectName] = useState<string>('');
  const [projectSummary, setProjectSummary] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('../api/projects');
        const data = await response.json();
        setProjectData(data.projects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data data:', error);
        setLoading(false);
      }
    };
    fetchProjects();
    console.log('Fetching data...');
  }, []);

  useEffect(() => {
    if (!loading && projectData.length > 0) {
      const summary = projectData.filter(
        (project) => project.name === 'React Labyrinth'
      );
      setProjectName(searchParams.name);
      setProjectSummary(summary[0].description);
    }
  }, [projectData, loading]);

  return (
    <>
      <main className="w-[80%] flex min-h-screen flex-col items-center pt-24 font-mulish">
        {/* <h1 className="project-headers">{searchParams.name}</h1>
        <p id="summary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          dolorum veritatis ipsum est repellendus expedita itaque magnam dolore
          nulla accusamus assumenda repellat vel atque possimus. Laboriosam
          iusto ipsum saepe commodi?
        </p> */}
        {/* <ContentSplit
          projectName={'React Labyrinth'}
          projectSummary={'summary'}
        /> */}
        <div className="mt-10 flex flex-col min-w-full text-center items-center align-middle">
          <div className="h-20 text-6xl">
            {loading ? 'Loading...' : searchParams.name}
          </div>
          <div className=" text-lg min-w-full flex items-center px-16 py-8">
            <p>{loading ? 'Loading...' : projectSummary}</p>
          </div>
        </div>
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
