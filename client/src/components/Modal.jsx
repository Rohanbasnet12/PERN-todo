import React, { useState } from "react";
import { useFormik } from "formik";
import { schema } from "../schema/schema";

const Modal = ({ mode, setShowModal }) => {
  const editMode = mode === "edit" ? true : false;

  // UseState to Save the Changes
  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date(),
  });

  const onSubmit = async (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  // Destructure formik helpers and state values
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        title: "",
        progress: "",
      },
      validationSchema: schema,
      onSubmit,
    });

  return (
    <div className="overlay absolute top-0 left-0 flex items-center justify-center w-full h-full bg-slate-700/30">
      <div className="modal lg:w-[500px] md:w-[800px] sm:container bg-white p-12 rounded-3xl">
        <div className="form-title-container relative">
          <button
            id="close"
            className="absolute top-[-35px] right-[-30px]"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <i className="fa-solid fa-xmark text-2xl hover:scale-110"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-4xl font-bold py-4 py-8">
            Let's {mode} Your Task
          </h1>
          <div className="username">
            <label htmlFor="username">Title</label>
            <div className="border-b-2 border-zinc-600">
              <input
                type="text"
                maxLength={30}
                value={values.title}
                id="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full outline-none"
              />
            </div>
            {errors.title && touched.title && (
              <div className="error">
                <p className="text-red-500 pt-1">{errors.title}</p>
              </div>
            )}
          </div>
          <div className="email pt-6">
            <label htmlFor="email">Drag to select your current Progress</label>
            <div>
              <input
                type="range"
                min={0}
                max={100}
                value={values.progress}
                id="progress"
                name="progress"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full"
              />
            </div>
            {errors.progress && touched.progress && (
              <div className="error">
                <p className="text-red-500 pt-1">{errors.progress}</p>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white font-medium text-xl rounded-md py-2 my-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
