import { DynamicIcon, dynamicIconImports } from "lucide-react/dynamic";
import { NavLink } from "react-router-dom";

interface NavBarLinkProps {
  to: string;
  icon: keyof typeof dynamicIconImports;
  label: string;
}

export const NavBarLink = ({ to, icon, label }: NavBarLinkProps) => {
  return (
    <li>
      <NavLink to={to}>
        {({ isActive }) => (
          <div
            className={`w-auto px-4 h-10 flex justify-center items-center gap-1 rounded-2xl ${
              isActive && "bg-soft"
            }`}
          >
            <DynamicIcon
              name={icon}
              color={isActive ? "#12CDD9" : "#92929D"}
              size={24}
            />
            {isActive && (
              <span className="text-accent font-medium block">{label}</span>
            )}
          </div>
        )}
      </NavLink>
    </li>
  );
};
