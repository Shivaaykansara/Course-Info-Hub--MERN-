import { useEffect, useState } from "react";

const AdminCourses = () => {
    const [allCourses,setAllCourses] = useState([])
    const [editCourse, setEditCourse] = useState({
      id: "",
      name: "",
      category: "",
      price: "",
    });

    const updateCourse = (curCourse) => {
      document.getElementById("my_modal_1").showModal();
      setEditCourse({
        id: curCourse._id,
        name: curCourse.name,
        category: curCourse.category,
        price: curCourse.price,
      });
    };
  
    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setEditCourse({
        ...editCourse,
        [name]: value,
      });
    };
  
    const handleSubmit = async() => {
      try {
          const response = await fetch(`http://localhost:5000/api/admin/courses/update`,{
              method:'PATCH',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(editCourse)
          })
          if(response.ok){
              getAllCourses()
          }
      } catch (error) {
          console.log(error)
      }
    };

    const deleteCourse = async(id)=>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/coursesInfo/delete/${id}`,{
                method:'DELETE',
                
            })
            if(response.ok){
                getAllCourses()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getAllCourses = async()=>{
        try {
            const response = await fetch('http://localhost:5000/api/admin/coursesInfo',{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                const data = await response.json()
                setAllCourses(data.courses)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllCourses()
    },[])
  return (
    <div>
      <div className="w-full max-w-4xl p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Our Courses
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {allCourses.map((curCourse,index)=>{

                return(
                <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-24 h-20 "
                      src={curCourse.image}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {curCourse.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {curCourse.category}
                    </p>
                  </div>
                  <div className="inline-flex  gap-4 text-base font-semibold text-gray-900 dark:text-white">
                    <span>{curCourse.price}</span>
                    <button onClick={() => {
                        updateCourse(curCourse);
                      }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                    <button onClick={()=>{deleteCourse(curCourse._id)}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
                  </div>
                  
                </div>
              </li>)
            })}
          </ul>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    UserId
                  </label>
                <input
                    type="text"
                    name="id"
                    id="id"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={editCourse.id}
                    readOnly
                    required=""
                  />
                    
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={editCourse.name}
                    onChange={handleInput}
                    required=""
                  />
                </div>
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={editCourse.category}
                    onChange={handleInput}
                    required=""
                  />
                </div>
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={editCourse.price}
                    onChange={handleInput}
                    required=""
                  />
                </div>
              </div>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AdminCourses;
