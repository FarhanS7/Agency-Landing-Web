import React from "react";

const FAQ = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto space-y-4">
          <details className="group border-b border-gray-200 dark:border-gray-700">
            <summary className="flex justify-between items-center py-5 cursor-pointer text-gray-900 dark:text-white font-medium">
              <span>Can I use Landwind in open-source projects?</span>
              <svg
                className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="pb-5 text-gray-500 dark:text-gray-400">
              <p className="mb-2">
                Landwind is an open-source library of interactive components
                built on top of Tailwind CSS.
              </p>
              <p>
                Check out this guide to{" "}
                <a
                  href="#"
                  className="text-purple-600 dark:text-purple-500 hover:underline"
                >
                  get started
                </a>
                .
              </p>
            </div>
          </details>

          <details className="group border-b border-gray-200 dark:border-gray-700">
            <summary className="flex justify-between items-center py-5 cursor-pointer text-gray-900 dark:text-white font-medium">
              <span>Is there a Figma file available?</span>
              <svg
                className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="pb-5 text-gray-500 dark:text-gray-400">
              <p className="mb-2">
                Landwind is designed using Figma, and the designs match the
                components exactly.
              </p>
              <p>
                Explore our{" "}
                <a
                  href="#"
                  className="text-purple-600 dark:text-purple-500 hover:underline"
                >
                  Figma design system
                </a>
                .
              </p>
            </div>
          </details>

          <details className="group border-b border-gray-200 dark:border-gray-700">
            <summary className="flex justify-between items-center py-5 cursor-pointer text-gray-900 dark:text-white font-medium">
              <span>
                What are the differences between Landwind and Tailwind UI?
              </span>
              <svg
                className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="pb-5 text-gray-500 dark:text-gray-400">
              <p className="mb-2">
                Landwind is MIT-licensed and free. Tailwind UI is a paid product
                with more page-level components.
              </p>
              <p className="mb-2">You can use both together without issues.</p>
              <ul className="list-disc pl-5">
                <li>
                  <a
                    href="#"
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    Landwind Pro
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </details>

          <details className="group border-b border-gray-200 dark:border-gray-700">
            <summary className="flex justify-between items-center py-5 cursor-pointer text-gray-900 dark:text-white font-medium">
              <span>What about browser support?</span>
              <svg
                className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="pb-5 text-gray-500 dark:text-gray-400">
              <p className="mb-2">
                Landwind supports all modern browsers including Chrome, Firefox,
                Safari, and Edge.
              </p>
              <p>
                Legacy browser support is limited due to Tailwind's modern CSS
                usage.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
