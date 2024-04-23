'use server';
import Image from 'next/image';

export const AboutSection = (): JSX.Element => {
  return (
    <div
      id="img-about-container"
      className=" h-auto w-p flex flex-col justify-center items-center lg:grid lg:grid-cols-3"
    >
      <div className="col-span-1">
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src="/louis.jpg"
            alt="me"
            width={450}
            height={500}
            className="rounded-3xl "
          ></Image>
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <div className="text-sm leading-6 md:text-xl md:leading-9 xl:leading-10 xl:text-[1.6rem] font-montserrat md:px-5 lg:px-24 max-h-[500px] ">
          <p className="pt-2 lg:pt-0">
            Hello, I&apos;m Lou. I&apos;m a Software Engineer with a passion for
            learning, reading fantasy novels, and playing video games!
          </p>
          <p>
            I started learning to code when I attended Community College, where
            I took some Programming courses that taught me the basics of
            programming and data structures. After that I joined
            Codesmith&apos;s Coding Bootcamp, which really opened me up to the
            world of software development and I&apos;ve been hooked ever since.
          </p>
          <p>
            Don&apos;t hesitate to reach out if you want to talk about anything
            software related or want to collaborate on a project together.
          </p>
        </div>
      </div>
    </div>
  );
};
