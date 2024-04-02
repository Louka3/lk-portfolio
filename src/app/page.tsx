import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <nav className="w-p flex h-auto justify-end mb-14">
          <ul className="w-11/12 flex justify-end pr-8">
            <li className="mr-8">About</li>
            <li className="mr-8">Projects</li>
            <li className="">Contacts</li>
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
          <span className="text-xl mr-20 ml-20 w-7/12 font-montserrat">
            Hello, I'm Lou. I'm a Software Engineer with a passion for learning,
            reading fantasy novels, and playing video games. <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Obcaecati consectetur doloremque deleniti aperiam vero ad sequi
            magni esse nostrum eligendi. Porro illum voluptate pariatur nisi in
            ea molestiae neque placeat. <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime consectetur culpa nam dignissimos neque optio debitis, magnam
            nobis ducimus quae rerum placeat quibusdam quos molestias ab
            suscipit laudantium est ut? ea molestiae neque placeat. <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div id="projects" className="my-10 w-p">
          <div className="text-4xl my-3 font-cabin">Projects</div>
          <div
            id="card-container"
            className="grid grid-cols-2 gap-5 font-mooli"
          >
            <div className="max-w-xxl bg-reactLab bg-cover bg-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="hover:opacity-80 bg-white opacity-85 h-full w-full p-6 border-2 rounded-lg border-solid border-black">
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
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    React Labyrinth
                  </h5>
                </a>
                <p className="mb-3 font-normal text-black dark:text-gray-400">
                  A VS Code Extension that generates a hierarchical tree of
                  React components and identifies the component type with a
                  single file upload.
                </p>
                <a
                  href="https://github.com/oslabs-beta/React-Labyrinth/"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  See our guideline
                  <svg
                    className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-xxl bg-articon bg-cover bg-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="hover:opacity-80 bg-white opacity-80 h-full w-full border-2 border-black p-6 rounded-lg">
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
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Articon
                  </h5>
                </a>
                <p className="mb-3 font-normal text-black dark:text-gray-400">
                  An application that allows you to find famous artworks to use
                  as reaction images for various emotions and situations.
                </p>
                <a
                  href="https://github.com/Articon-scratch-project/Articon"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  See our guideline
                  <svg
                    className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-xxl bg-coSync bg-cover bg-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="hover:opacity-80 bg-white opacity-85 h-full w-full p-6 border-2 border-black rounded-lg">
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
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Co-Sync
                  </h5>
                </a>
                <p className="mb-3 font-normal text-black dark:text-gray-400">
                  Co-Sync is a SCRUM app. It's main focus is to help teams
                  manage their projects and tasks.
                </p>
                <a
                  href="https://github.com/IterationDreamTeam/Co-Sync"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  See our guideline
                  <svg
                    className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-xxl bg-personalBookshelf bg-cover bg-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="hover:opacity-80 bg-white opacity-85 h-full w-full p-6 border-2 border-black rounded-lg">
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
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Personal Bookshelf
                  </h5>
                </a>
                <p className="mb-3 font-normal text-black dark:text-gray-400">
                  A personal digital library to help users keep track of books
                  they've read, enjoyed, or dropped before finishing.
                </p>
                <a
                  href="https://github.com/Louka3/personal-bookshelf"
                  className="inline-flex font-medium items-center text-blue-600 hover:underline"
                >
                  See our guideline
                  <svg
                    className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
