import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AsyncSelect from "react-select/async";
const Edit = ({ isDefault, setDefault, user, id }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/options")
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
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setDefault(!isDefault);
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
              Edit your name and Sectors you are currently involved in.
            </h1>
            <input
              required
              {...register("name")}
              className="w-full border-2 py-2 px-3"
              type="text"
              name="name"
              id="name"
              defaultValue={user.name}
            />
          </div>
          {options && (
            <div>
              <Controller
                rules={{ required: true }}
                control={control}
                name="sectors"
                render={({ field: { onChange } }) => (
                  <AsyncSelect
                    defaultOptions={options}
                    // defaultValue={{ label: user.sectors.label }}
                    onChange={onChange}
                  />
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
