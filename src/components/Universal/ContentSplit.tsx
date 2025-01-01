'use client';
import React, { useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  imgName: string;
}

export const ContentSplit = (props: any): JSX.Element => {
  const [data, setData] = useState<Project[]>([]);
  const [label, setLabel] = useState<string>();
  const [details, setDetails] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('../api/projects');
        const data = await response.json();
        setData(data.projects);
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
    if (!loading && data.length > 0) {
      console.log(data);
      const summary = data.filter(
        (project) => project.name === 'React Labyrinth'
      );
      setLabel(props.projectName);
      setDetails(summary[0].description);
    }
  }, [data, loading]);

  return (
    <div className="my-20 border-black flex min-w-full text-center items-center h-64 align-middle">
      <div className=" min-w-[50%] font-mulish text-6xl">
        {loading ? 'Loading...' : label}
      </div>
      <div className=" text-lg min-h-full flex items-center font-mulish px-16 ">
        <p>{loading ? 'Loading...' : details}</p>
      </div>
    </div>
  );
};
