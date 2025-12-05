import { NavBarLink } from "./NavBarLink";

export const NavBar = () => {
  return (
    <nav className="flex lg:flex-col fixed h-18 bg-background bottom-0 w-full lg:h-full lg:w-auto lg:left-0 lg:px-4 lg:pt-20">
      <ul className="flex gap-4 mx-auto justify-center items-center lg:flex-col lg:justify-start lg:flex-1 lg:[&>*:last-child]:hidden">
        <NavBarLink to="/" icon="home" label="Home" />
        <NavBarLink to="/search" icon="search" label="Search" />
        <NavBarLink to="/download" icon="download" label="Download" />
        <NavBarLink to="/profile" icon="user" label="Profile" />
      </ul>
      <div className="hidden pb-4 lg:flex">
        <NavBarLink to="/profile" icon="user" label="Profile" />
      </div>
    </nav>
  );
};
