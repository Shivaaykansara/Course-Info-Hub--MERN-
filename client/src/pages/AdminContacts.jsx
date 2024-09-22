import { useEffect, useState } from "react";

const AdminContacts = () => {
    const [contacts,setContacts] = useState([])

    const deleteContact = async(id)=>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
                method:'DELETE',
                
            })
            if(response.ok){
                getContacts()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getContacts = async()=>{
        try {
            const response = await fetch('http://localhost:5000/api/admin/contacts',{
                method:"GET",
                
            })
            if(response.ok){
                const data = await response.json()
                setContacts(data.contacts)
                console.log(contacts)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getContacts()
    },[])
  return (
    <div>
      <div className="grid gap-4 lg:mx-20 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {contacts.map((curContact,index)=>{
            return(
                <div key={index} className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <h5 className="mb-2 font-bold leading-5">{curContact.username}</h5>
              <h6 className="mb-2 font-extralight leading-5">{curContact.email}</h6>
              <p className="mb-3 text-sm text-gray-900">
                {curContact.message}
              </p>
            </div>
            <button
              onClick={()=>{deleteContact(curContact._id)}}
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Delete
            </button>
          </div>
            )
            
        })}
      </div>
    </div>
  );
};

export default AdminContacts;
