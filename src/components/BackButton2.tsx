import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackButton2Props {
  pageTitle?: string;
}

export const BackButton2 = ({ pageTitle }: BackButton2Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center relative">
      <button
        className="cursor-pointer absolute left-4 bg-soft size-8 rounded-xl flex justify-center items-center"
        type="button"
        title="Back button"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ChevronLeft className="text-text-main size-6" />
      </button>
      <span className="text-[16px] font-semibold text-text-main">
        {pageTitle}
      </span>
    </div>
  );
};
