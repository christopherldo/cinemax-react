import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RegisterPageForm } from "../components/RegisterPageForm";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const handleClickOnBackButton = () => {
    return navigate(-1);
  };

  return (
    <main className="w-dvw h-dvh bg-background flex flex-col">
      <div className="flex items-center gap-8 mt-4 px-4 relative">
        <button
          className="absolute size-8 rounded-xl flex justify-center items-center bg-soft cursor-pointer"
          onClick={handleClickOnBackButton}
        >
          <ChevronLeft className="size-6 text-white" />
        </button>
        <p className="w-full text-center font-semibold text-[16px]">Sign Up</p>
      </div>
      <div className="flex flex-1 flex-col w-full max-w-xl px-4 self-center justify-center">
        <div className="flex flex-col items-center">
          <img src="https://picsum.photos/88" alt="" />
          <h1 className="mt-6 font-semibold text-[28px] text-text-main">
            Let’s get started
          </h1>
          <h2 className="pt-2 font-semibold text-text-muted">
            The latest movies are here
          </h2>
        </div>

        <RegisterPageForm />
      </div>
    </main>
  );
};
