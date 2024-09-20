import { useAuth } from "../store/auth";

const Courses = () => {
  const { courses } = useAuth();
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {courses.map((curCourse) => (
          <div key={curCourse._id} className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={curCourse.image }
              className="object-cover w-full h-64"
              alt={curCourse.name}
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title={curCourse.category}
                >
                  {curCourse.category }
                </a>
              </p>
              <a
                href="/"
                aria-label="Category"
                title={curCourse.name}
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {curCourse.name}
              </a>
              <p className="mb-2 text-gray-700">
                {curCourse.description}
              </p>
              <a
                href={`/courses/${curCourse.id}`}
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Get Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
