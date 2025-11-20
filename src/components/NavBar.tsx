import { NavBarLink } from "./NavBarLink";

export const NavBar = () => {
  return (
    <nav>
      <ul className="h-18 bg-dark fixed bottom-0 w-full flex gap-4 justify-center items-center">
        <NavBarLink to="/" icon="home" label="Home" />
        <NavBarLink to="/search" icon="search" label="Search" />
        <NavBarLink to="/download" icon="download" label="Download" />
        <NavBarLink to="/profile" icon="user" label="Profile" />
      </ul>
    </nav>
  );
};
