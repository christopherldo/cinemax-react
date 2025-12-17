import { Link, useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClickOnSignUpButton = () => {
    return navigate("/register");
  };

  return (
    <main className="w-dvw h-dvh bg-background flex justify-center items-center">
      <div className="flex flex-col w-full max-w-xl px-4">
        <div className="flex flex-col items-center">
          <img src="https://picsum.photos/88" alt="" />
          <h1 className="mt-6 font-semibold text-[28px] text-text-main">
            CINEMAX
          </h1>
          <h2 className="pt-2 font-semibold text-text-muted">
            Enter your E-mail to Sign Up
          </h2>
        </div>

        <button
          className="w-full flex justify-center items-center cursor-pointer mt-16 h-14 bg-accent rounded-4xl"
          onClick={handleClickOnSignUpButton}
        >
          <span className="font-medium text-[16px]">Sign Up</span>
        </button>

        <div className="mt-4 h-14 flex justify-center items-center">
          <p className="font-medium text-[16px] text-text-muted">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-accent">
              Login
            </Link>
          </p>
        </div>

        <div className="flex flex-col items-center mt-8">
          <div className="flex flex-col w-full items-center relative">
            <p className="z-1 overflow-hidden -mt-3.5 px-3 bg-background font-medium text-text-muted">
              Or Sign up with
            </p>
            <div className="h-px bg-soft w-full max-w-[255px] absolute" />
          </div>

          <div className="mt-10">
            <img
              className="rounded-full"
              src="https://picsum.photos/69"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};
