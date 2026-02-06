import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext/useAuth";
import { toast } from "react-toastify";

interface Inputs {
  email: string;
  password: string;
}

export const LoginPageForm = () => {
  const navigate = useNavigate();
  const { handleLoginWithPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await handleLoginWithPassword(data.email, data.password);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message);
      } else {
        toast(`An unknown error occurred.`);
      }
    }
  };

  return (
    <form
      className="mt-16 flex flex-col w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-8">
        <Input
          label="Email Address"
          type="email"
          {...register("email", {
            required: "Email is required.",
          })}
          errors={errors.email}
        />

        <Input
          label="Password"
          type="password"
          {...register("password", {
            required: "Password is required.",
          })}
          errors={errors.password}
        />
      </div>

      <div className="mt-2 flex justify-end items-center">
        <Link to="/reset-password" className="font-semibold text-accent">
          Forgot Password?
        </Link>
      </div>

      <button
        className="w-full flex justify-center items-center cursor-pointer mt-16 h-14 bg-accent rounded-4xl"
        type="submit"
      >
        <span className="font-medium text-[16px]">Login</span>
      </button>
    </form>
  );
};
