'use client';
import React, { useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  imgName: string;
}

export const ProjectSplit = (props: any): JSX.Element => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectName, setProjectName] = useState<string>();
  const [projectSummary, setProjectSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('../api/projects');
        const data = await response.json();
        setProjects(data.projects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects data:', error);
        setLoading(false);
      }
    };
    fetchProjects();
    console.log('Fetching data...');
  }, []);
  useEffect(() => {
    if (!loading && projects.length > 0) {
      console.log(projects);
      const summary = projects.filter(
        (project) => project.name === 'React Labyrinth'
      );
      setProjectName(props.projectName);
      setProjectSummary(summary[0].description);
    }
  }, [projects, loading]);

  const Spinner = () => (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="my-20 border border-black flex min-w-full text-center items-center h-64 align-middle">
      <div className=" min-w-[50%] font-mulish text-6xl">
        {loading ? 'Loading...' : projectName}
      </div>
      <div className=" text-lg min-h-full flex items-center font-mulish">
        <p>{loading ? 'Loading...' : projectSummary}</p>
      </div>
    </div>
  );
};
