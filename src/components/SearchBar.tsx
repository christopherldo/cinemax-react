import { Filter, Search } from "lucide-react";

interface SearchBarProps {
  q: string;
  setQ: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

export const SearchBar = ({ q, setQ, placeholder }: SearchBarProps) => {
  return (
    <div className="px-4 mt-4">
      <div className="w-full max-w-5xl h-10 rounded-3xl bg-soft flex items-center self-center gap-2 px-4">
        <Search color="#92929D" size={16} />
        <input
          type="text"
          name="q"
          id="searchInput"
          className="flex-1 -mt-px"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
        />
        <button
          type="button"
          title="Filter the content"
          className="flex gap-2 min-w-10 cursor-pointer"
        >
          <div className="w-px h-4 bg-dark-grey" />
          <div className="flex-1 flex justify-center">
            <Filter color="#FFFFFF" size={16} />
          </div>
        </button>
      </div>
    </div>
  );
};
