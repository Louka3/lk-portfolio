'use server';
import Image from 'next/image';

export const AboutSection = (): JSX.Element => {
  return (
    <div
      id="img-about-container"
      className="mt-20 h-auto w-p flex flex-col justify-center items-center xl:grid xl:grid-cols-3"
    >
      <div className="col-span-1">
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src="/louis.jpg"
            alt="me"
            width={450}
            height={500}
            className="rounded-3xl   lg:max-h-[28rem] lg:max-w-[24rem] xl:max-w-[24rem] 2xl:max-h-[34rem] 2xl:max-w-[30rem] 3xl:min-w-[25rem] 4xl:min-w-[28rem]"
          ></Image>
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <div className="text-sm leading-6 font-montserrat md:text-xl md:leading-9 md:px-5 lg:px-24 xl:leading-[1.6rem] xl:text-[1rem] 2xl:text-[1.2rem] 2xl:leading-[1.8rem] 3xl:leading-[2.5rem] 4xl:leading-[3.5rem]">
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
