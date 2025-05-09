import CheckIcon from "../Icons/CheckIcon";
import GlobalIcon from "../Icons/GlobalIcon";
import TransactionsIcon from "../Icons/TransactionsIcon";
import TrustLink from "../Icons/TrustLink";
import UptimeIcon from "../Icons/UptimeIcon";
import UsersIcon from "../Icons/UsersIcon";

export default function FeaturesSection() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* Sub Service 1 */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Work with tools you already use
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>

              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                {[
                  "Continuous integration and deployment",
                  "Development workflow",
                  "Knowledge management",
                ].map((item, index) => (
                  <li key={index} className="flex space-x-3">
                    <CheckIcon />
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="./assets/features/feature-1.png"
              alt="dashboard feature"
            />
          </div>

          {/* Sub Service 2 */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="./assets/features/feature-2.png"
              alt="feature 2"
            />
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                {[
                  "Dynamic reports and dashboards",
                  "Templates for everyone",
                  "Development workflow",
                  "Limitless business automation",
                  "Knowledge management",
                ].map((item, index) => (
                  <li key={index} className="flex space-x-3">
                    <CheckIcon />
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Worldwide Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
              Trusted Worldwide
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your customers.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <TrustLink href="#" text="Explore Legality Guide" />
              <TrustLink href="#" text="Visit the Trust Center" />
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {[
              {
                title: "99.99% uptime",
                desc: "For Landwind, with zero maintenance downtime",
                icon: UptimeIcon,
              },
              {
                title: "600M+ Users",
                desc: "Trusted by over 600 million users around the world",
                icon: UsersIcon,
              },
              {
                title: "100+ countries",
                desc: "Have used Landwind to create functional websites",
                icon: GlobalIcon,
              },
              {
                title: "5+ Million",
                desc: "Transactions per day",
                icon: TransactionsIcon,
              },
            ].map(({ title, desc, icon: Icon }, index) => (
              <div key={index}>
                <Icon />
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  {title}
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
