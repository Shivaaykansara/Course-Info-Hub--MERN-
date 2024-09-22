import { NavLink } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        
        
        <NavLink to='/admin/users' className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://plus.unsplash.com/premium_photo-1683972509783-da5a74795bb3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0 text-center">
            
            <p
              className="inline-block mb-3 text-4xl font-bold leading-5 "
            >
              Users
            </p>
            
          </div>
        </NavLink>
        <NavLink to='/admin/contacts' className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0 text-center">
            
            <p
              className="inline-block mb-3 text-4xl font-bold leading-5 "
            >
              Contacts
            </p>
            
          </div>
        </NavLink>
        <NavLink to='/admin/coursesInfo' className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0 text-center">
            
            <p
              className="inline-block mb-3 text-4xl font-bold leading-5 "
            >
              Courses
            </p>
            
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminHome;
