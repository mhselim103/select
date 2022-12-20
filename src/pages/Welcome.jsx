import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Edit from "./Edit";
import LoadData from "./loadData";

const Welcome = () => {
  const { name } = useParams();
  const [user, setUser] = useState();
  const [isDefault, setDefault] = useState(true);
  useEffect(() => {
    fetch(`https://task-production-4088.up.railway.app/users/${name}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  // console.log(user);

  return (
    <div className="grid  min-h-screen mt-20 ">
      <div>
        {isDefault && (
          <LoadData user={user} isDefault={isDefault} setDefault={setDefault} />
        )}
        {!isDefault && <Edit />}
      </div>
    </div>
  );
};

export default Welcome;
