import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schemas/authSchema";

type FormData = z.infer<typeof schema>;

export const RegisterPageForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = () => {
    navigate("/");
  };

  return (
    <form
      className="mt-16 flex flex-col w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-8">
        <Input
          label="Full Name"
          type="text"
          {...register("fullName")}
          errors={errors.fullName}
        />

        <Input
          label="Email Address"
          type="email"
          {...register("email")}
          errors={errors.email}
        />

        <Input
          label="Password"
          type="password"
          {...register("password")}
          errors={errors.password}
        />

        <Input
          label="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          errors={errors.confirmPassword}
        />

        <div className="flex flex-col">
          <label className="flex items-center gap-1 text-text-muted font-medium text-xs">
            <input
              className="size-6 rounded-3xl border border-soft placeholder:text-text-main placeholder:font-medium px-4"
              type="checkbox"
              {...register("agreeToTerms", {
                required: "You must agree to the terms if you want to proceed.",
              })}
            />
            I agree to the{" "}
            <Link to="/terms" className="text-accent">
              Terms and Services
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-accent">
              Privacy Policy
            </Link>
          </label>
          {errors.agreeToTerms && (
            <span className="text-red-500 px-2">
              {errors.agreeToTerms.message}
            </span>
          )}
        </div>
      </div>

      <button
        className="w-full flex justify-center items-center cursor-pointer mt-16 h-14 bg-accent rounded-4xl"
        type="submit"
      >
        <span className="font-medium text-[16px]">Sign Up</span>
      </button>
    </form>
  );
};
