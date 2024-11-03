import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Course Info Hub"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-200">
            New Courses
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Discover the best
            <br className="hidden md:block" />
            tech courses at{' '}
            <span className="inline-block text-blue-600">
              CourseInfoHub
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Find comprehensive details on the top tech courses available, 
            from programming to data science. Your journey to expertise starts here!
          </p>
          <div className="flex items-center">
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/about"
              aria-label="Learn more"
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-600"
            >
              Learn more
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
