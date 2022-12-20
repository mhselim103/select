import React from "react";

const LoadData = ({ user, setDefault, isDefault }) => {
  console.log(user);
  return (
    <div>
      <form className="space-y-5 w-full lg:w-2/3 mx-auto px-5">
        <div className="space-y-5">
          <h1 className="">Your Name</h1>
          {user && user.name && (
            <input
              readOnly
              value={user.name}
              className="w-full border-2 py-2 px-3"
              type="text"
              name="name"
              id="name"
            />
          )}
          <h1>Selected Sector</h1>
          {user && user.sectors.label && (
            <input
              readOnly
              value={user.sectors.label}
              className="w-full border-2 py-2 px-3 text-blue-700"
              type="text"
            />
          )}
        </div>
      </form>
      <div className="flex justify-center pt-4">
        <button
          className="w-[200px]  bg-green-500 rounded py-2 px-3"
          onClick={() => setDefault(!isDefault)}
        >
          Edit Data
        </button>
      </div>
    </div>
  );
};

export default LoadData;
