import React from "react";
import { Link } from "react-router-dom";

const LoadData = ({ user, setDefault, isDefault }) => {
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
      <div className="flex justify-center pt-4 gap-5">
        <Link
          className="max-w-[200px]  bg-green-500 rounded py-2 px-3"
          to={"/"}
        >
          Go To Home
        </Link>
        <button
          className="max-w-[200px]  bg-red-500 rounded py-2 px-3"
          onClick={() => setDefault(!isDefault)}
        >
          Edit Data
        </button>
      </div>
    </div>
  );
};

export default LoadData;
