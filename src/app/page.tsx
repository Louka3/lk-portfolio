import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center pt-24">
        <nav className="w-p flex h-12 justify-between items-center mb-14">
          <p className="w-auto text-2xl font-cabin underline">
            Louis Kuczykowski
          </p>
          <ul className="font-bold  text-lg flex justify-end pr-8">
            <li className="mr-8">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="">
              <Link href="#contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
        <div
          id="img-about-container"
          className=" h-auto w-p flex justify-between items-center"
        >
          <Image
            src="/louis.jpg"
            alt="me"
            width={400}
            height={450}
            className="rounded-3xl"
          ></Image>
          <span className="text-xl mr-20 ml-20 w-7/12 font-cabin">
            Hello, I&apos;m Lou. I&apos;m a Software Engineer with a passion for
            learning, reading fantasy novels, and playing video games! <br />
            I started learning to code when I attended Community College, where
            I took some Programming courses that taught me the basics of
            programming and data structures. After that I joined
            Codesmith&apos;s Coding Bootcamp, which really opened me up to the
            world of software development and I&apos;ve been hooked ever since.
            <br />
            Nowadays I&apos;m balancing staying healthy, creating new web
            applications, practicing new technologies I&apos;m unfamiliar with,
            and spending time with my fiancée exploring the Philadelphia area!
            <br />
            Don't hesitate to reach out if you want to talk about anything
            software related or want to collaborate on a project together.
          </span>
        </div>
        <div id="projects" className="my-10 w-p flex flex-col">
          <div className="text-4xl my-8 font-cabin underline">Projects</div>
          <div id="card-container" className="grid grid-cols-2 gap-5">
            <a
              href="https://github.com/oslabs-beta/React-Labyrinth/"
              target="_blank"
            >
              <div className="max-w-xxl bg-reactLab bg-cover bg-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="hover:opacity-80 min-h-60 bg-white opacity-85 h-full w-full p-6 border-2 rounded-lg border-solid border-black">
                  <svg
                    width="46"
                    height="48"
                    viewBox="0 0 98 96"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      fill="#24292f"
                    />
                  </svg>
                  <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    React Labyrinth
                  </h5>
                  <p className="mb-3 font-medium text-xl text-black dark:text-gray-400">
                    A VS Code Extension that generates a hierarchical tree of
                    React components and identifies the component type with a
                    single file upload.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/Articon-scratch-project/Articon"
              target="_blank"
            >
              <div className="max-w-xxl bg-articon bg-cover bg-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="hover:opacity-70  min-h-60 bg-white opacity-80 h-full w-full border-2 border-black p-6 rounded-lg">
                  <svg
                    width="46"
                    height="48"
                    viewBox="0 0 98 96"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      fill="#24292f"
                    />
                  </svg>
                  <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Articon
                  </h5>
                  <p className="mb-3 font-medium text-xl text-black dark:text-gray-400">
                    An application that allows you to find famous artworks to
                    use as reaction images for various emotions and situations.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/IterationDreamTeam/Co-Sync"
              target="_blank"
            >
              <div className="max-w-xxl bg-coSync bg-cover bg-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="hover:opacity-80 min-h-60 bg-white opacity-85 h-full w-full p-6 border-2 border-black rounded-lg">
                  <svg
                    width="46"
                    height="48"
                    viewBox="0 0 98 96"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      fill="#24292f"
                    />
                  </svg>
                  <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Co-Sync
                  </h5>
                  <p className="mb-3 font-medium text-xl text-black dark:text-gray-400">
                    Co-Sync is a SCRUM app. It&apos;s main focus is to help
                    teams manage their projects and tasks.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/Louka3/personal-bookshelf"
              target="_blank"
            >
              <div className="max-w-xxl bg-personalBookshelf bg-cover bg-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="hover:opacity-80 min-h-60 bg-white opacity-85 h-full w-full p-6 border-2 border-black rounded-lg">
                  <svg
                    width="46"
                    height="48"
                    viewBox="0 0 98 96"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      fill="#24292f"
                    />
                  </svg>
                  <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Personal Bookshelf
                  </h5>
                  <p className="mb-3 font-medium text-xl text-black dark:text-gray-400">
                    A personal digital library to help users keep track of books
                    they&apos;ve read, enjoyed, or dropped before finishing.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="contacts" className="my-10 w-p flex flex-col">
          <div className="font-cabin text-4xl mb-8 underline">Contacts</div>
          <ul className="font-bold text-lg flex my-4 w-full list-none p-0">
            <li className=" flex flex-1 items-center min-w-7 max-h-8 w-auto">
              <svg
                width="33"
                height="34"
                viewBox="0 0 98 96"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  fill="#24292f"
                />
              </svg>{' '}
              <a
                href="https://github.com/Louka3"
                target="_blank"
                className="pl-2"
              >
                Louka3
              </a>
            </li>
            <li className=" flex flex-1 items-center max-h-8 w-auto justify-center">
              <Image
                src="/linkedin.png"
                alt="linkedin"
                width={30}
                height={35}
              ></Image>
              <a
                href="https://www.linkedin.com/in/louiskuczykowski/"
                target="_blank"
                className="pl-2"
              >
                Louis Kuczykowski
              </a>
            </li>
            <li className="flex flex-1 max-h-8 w-auto justify-end">
              <span>lkuczykowski@gmail.com</span>
            </li>
          </ul>
        </div>
        <div
          id="footer"
          className="w-full bg-main flex justify-center items-center flex-col"
        >
          {/* <div id="line" className="h-px w-full bg-black"></div> */}
          <div className="h-12 flex justify-center items-center">
            <span className="mr-2">Built with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="66"
              height="67"
              viewBox="0 0 394 80"
            >
              <path
                fill="#000"
                d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
              />
              <path
                fill="#000"
                d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
              />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}
