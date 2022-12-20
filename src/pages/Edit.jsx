import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import AsyncSelect from "react-select/async";
const Edit = () => {
  const { name } = useParams();
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://task-production-4088.up.railway.app/options")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
    watch,
  } = useForm({
    defaultValues: {},
  });
  const onSubmit = (user) => {
    fetch(`https://task-production-4088.up.railway.app/users/${name}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          navigate(`/${user.name}`);
        }
      });
    reset();
  };

  return (
    <div className="  min-h-screen py-8 px-5 lg:px-32">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 w-full lg:w-2/3 mx-auto"
        >
          <div className="space-y-5">
            <h1 className="font-medium text-xl text-center">
              Please enter your name and pick the Sectors you are currently
              involved in.
            </h1>
            <input
              required
              {...register("name")}
              className="w-full border-2 py-2 px-3"
              type="text"
              name="name"
              id="name"
              defaultValue={name}
            />
          </div>
          {options && (
            <div>
              <Controller
                rules={{ required: true }}
                control={control}
                name="sectors"
                render={({ field: { onChange } }) => (
                  <AsyncSelect defaultOptions={options} onChange={onChange} />
                )}
              />
            </div>
          )}
          <div className="flex gap-2 items-center">
            <input required type="checkbox" name="" id="" />
            <p>Agree to terms and condition</p>
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-1/4 mx-auto bg-blue-700 text-white py-2 px-3 rounded cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Edit;
