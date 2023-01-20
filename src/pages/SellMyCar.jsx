import React, { useState } from 'react';

const SellMyCar = () => {
    // const [inputValue, setInputValue] = useState("");
  const [addFormData, setAddFormData] = useState({
    carmodel: "",
    location: "",
    price: "",
  });
    const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      };
    const handleAddFormSubmit = async (event) => {
        event.preventDefault();
        // console.log(addFormData);
        const newContact = {
          carmodel: addFormData.carmodel,
          location: addFormData.location,
          price: addFormData.price,
        };
        console.log(newContact);
        // try {
        //   const res = await axios.post(
        //     `${url}/employee/signup`,
    
        //     newContact
        //   );
        //   toast.success("User added successfully");
        //   console.log(res.data);
        //   fetchUsers();
        // } catch (error) {
        //   toast.error(error.response.data?.message);
        //   console.log(error);
        // }
      };
    
    return(
        <div className='p-20'>
            <form
                onSubmit={handleAddFormSubmit}
                className="flex flex-wrap flex-col w-auto items-start gap-2 justify-start pb-8 pt-5 border-2 border-gray-200 rounded-xl shadow-sm px-5 "
              >
                <h1 className='font-bold text-center'>Find Your Vehicle Here</h1>
                <input
                  className="block w-full px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                  name="carmodel"
                  required="required"
                  placeholder="Car Make/Model..."
                  onChange={handleAddFormChange}
                />
                <input
                  className="block w-full px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                  name="location"
                  required="required"
                  placeholder="Location"
                  onChange={handleAddFormChange}
                />
                <input
                  type="text"
                  className=" w-full block px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  name="price"
                  required="required"
                  placeholder="Max Price"
                  onChange={handleAddFormChange}
                />
                {/* <div className="flex gap-1 items-center">
                  <select
                    name="isAdmin"
                    onChange={handleAddFormChange}
                    className="select select-bordered select-md mx-2 max-w-xs"
                  >
                    <option disabled selected>
                      Is Admin?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div> */}
                <button
                  type="submit"
                  className="group py-2.5 pr-7 pl-7 relative right-0 flex justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Search
                </button>
              </form>
        </div>
    )
}
export default SellMyCar;