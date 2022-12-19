import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Welcome = () => {
  const { name } = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    fetch(`https://task-beta-lovat.vercel.app/users/${name}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
  let content;

  content = (
    <form className="space-y-5 w-full lg:w-2/3 mx-auto">
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
  );

  return (
    <div className="grid  min-h-screen mt-20 ">
      <div>{content}</div>
    </div>
  );
};

export default Welcome;
