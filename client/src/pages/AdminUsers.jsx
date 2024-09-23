import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [editUser, setEditUser] = useState({
    id: "",
    username: "",
    email: "",
    phone: "",
  });
  const {authorizationToken,Api} = useAuth()
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `${Api}/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers:{
            Authorization:authorizationToken
          }
        }
      );
      if (response.ok) {
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = (curUser) => {
    document.getElementById("my_modal_1").showModal();
    setEditUser({
      id: curUser._id,
      username: curUser.username,
      phone: curUser.phone,
      email: curUser.email,
    });
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setEditUser({
      ...editUser,
      [name]: value,
    });
  };

  const handleSubmit = async() => {
    try {
        const response = await fetch(`${Api}/api/admin/users/update`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                Authorization:authorizationToken
            },
            body:JSON.stringify(editUser)
        })
        if(response.ok){
            getAllUsers()
        }
    } catch (error) {
        console.log(error)
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await fetch(`${Api}/api/admin/users`, {
        method: "GET",
          headers:{
            Authorization:authorizationToken
          }
        
      });
      if (response.ok) {
        const data = await response.json();
        setAllUsers(data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((curUser, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {curUser.username}
                  </th>
                  <td className="px-6 py-4">{curUser._id}</td>
                  <td className="px-6 py-4">{curUser.phone}</td>
                  <td className="px-6 py-4">{curUser.email}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        updateUser(curUser);
                      }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        deleteUser(curUser._id);
                      }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
                    value={editUser.id}
                    readOnly
                    required=""
                  />
                    
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={editUser.username}
                    onChange={handleInput}
                    required=""
                  />
                </div>
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={editUser.phone}
                    onChange={handleInput}
                    required=""
                  />
                </div>
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={editUser.email}
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

export default AdminUsers;
