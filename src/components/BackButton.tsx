import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="cursor-pointer"
      type="button"
      title="Back button"
      onClick={() => {
        navigate(-1);
      }}
    >
      <ChevronLeft size={32} color="#FFFFFF" />
    </button>
  );
};
