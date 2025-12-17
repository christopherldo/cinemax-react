import { Eye, EyeClosed } from "lucide-react";
import { useState, type HTMLInputTypeAttribute } from "react";
import type { FieldError } from "react-hook-form";

interface InputProps {
  type: HTMLInputTypeAttribute;
  label: string;
  errors?: FieldError;
}

export const Input = ({
  type = "text",
  label,
  errors,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div className="relative mt-2">
        <input
          {...rest}
          type={showPassword && type === "password" ? "text" : type}
          placeholder=""
          className="peer h-[61px] w-full rounded-3xl border border-soft px-4 outline-none transition-all focus:border-primary placeholder:text-transparent text-text-muted"
        />

        <label
          className="bg-background px-1 absolute left-4 top-1/2 -translate-y-1/2 cursor-text text-text-main transition-all 
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
          peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary
          peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none"
        >
          {label}
        </label>

        {type === "password" && (
          <div className="absolute right-4 top-1/2 mt-1 -translate-y-1/2">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </button>
          </div>
        )}
      </div>

      {errors && (
        <span className="text-sm text-red-500 px-4 mt-1">{errors.message}</span>
      )}
    </div>
  );
};
