import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    setSubmitted(true);
    reset();
  };
  return (
    <>
      <div className="w-full h-screen bg-slate-300">
        <div className="flex flex-wrap items-center justify-center w-full ">
          {!submitted ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md mt-14"
            >
              <h1 className="mb-5 font-sans font-extrabold "> Sign In Form </h1>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  User Name
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=" Username"
                  {...register("name", {
                    required: "true",
                    minLength: {
                      value: 5,
                      message: " UserName is shorter than 5 letters",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-xs italic text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-6 ">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "true",
                    pattern: {
                      value: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
                      message: "Valid Email Pattern Required",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-xs italic text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-8">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "true",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                  autoComplete="new-password"
                />
                {errors.password && (
                  <p className="text-xs italic text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mb-10">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  autoComplete=" newpassword"
                />
                {errors.confirmPassword && (
                  <p className="text-xs italic text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="px-4 py-2 font-bold text-white rounded bg-amber-800 hover:bg-amber-600 focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="flex items-center text-lg text-green-800 mt-72 ">
              <h1>Form submitted successfully!</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
