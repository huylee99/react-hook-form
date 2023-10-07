import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      gender: "",
      bio: "",
      policy: false,
      email: "",
      status: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit(data => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        message: "Password and confirm password must be the same",
      });

      return;
    }

    if (data.gender === "") {
      setError("gender", {
        message: "This field is required",
        type: "required",
      });

      return;
    }
    alert(JSON.stringify(data));
    reset();
  });

  console.log(errors);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="py-20">
        <form onSubmit={onSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block text-left mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: true,
                minLength: 1,
              })}
              className="w-full rounded-md px-3 py-2"
            />

            {errors.name?.type === "required" && <Error message={"This field is required"} />}
          </div>
          <div className="gap-2 mb-2">
            <label className="block text-left mb-1">Gender</label>
            <div className="flex items-center space-x-8">
              <div className="flex items-center gap-2">
                <input type="radio" value={"female"} {...register("gender")} id="female" />
                <label htmlFor="female">Female</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" value={"male"} {...register("gender")} id="male" />
                <label htmlFor="male">Male</label>
              </div>
            </div>

            {errors.gender?.type === "required" && <Error message={"This field is required"} />}
          </div>
          <div className="mb-2">
            <label htmlFor="bio" className="block text-left mb-1">
              Bio
            </label>
            <textarea
              {...register("bio", {
                required: true,
                minLength: 1,
              })}
              className="w-full rounded-md px-3 py-2 resize-none"
            />
            {errors.bio && <Error message={"This field is required"} />}
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="mb-1 block text-left">
              Email
            </label>
            <input
              type="text"
              className="w-full rounded-md px-3 py-2"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && <Error message={"This field is required"} />}
          </div>
          <div className="mb-2">
            <label htmlFor="status" className="block text-left mb-1">
              Status
            </label>
            <select
              {...register("status", {
                required: true,
              })}
              className="w-full rounded-md px-3 py-2"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            {errors.status?.type === "required" && <Error message={"This field is required"} />}
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-left mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
              })}
              className="w-full rounded-md px-3 py-2"
            />
            {errors.password?.type === "required" && <Error message={"This field is required"} />}
          </div>
          <div className="mb-2">
            <label htmlFor="confirmPassword" className="block text-left mb-1">
              Confirm password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
              })}
              className="w-full rounded-md px-3 py-2"
            />
            {errors.confirmPassword?.type === "required" && <Error message={"This field is required"} />}
            {errors.confirmPassword && <Error message={errors.confirmPassword.message} />}
          </div>

          <div className="mb-4 flex items-center gap-2">
            <input
              type="checkbox"
              name="policy"
              id="policy"
              {...register("policy", {
                required: true,
              })}
            />
            <label htmlFor="policy" className="block text-left">
              I agree to the policy
            </label>
          </div>

          <button type="submit" className="w-full bg-zinc-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const Error = ({ message }) => {
  return (
    <p
      role="alert"
      style={{
        color: "red",
        textAlign: "left",
      }}
    >
      {message}
    </p>
  );
};

export default App;
