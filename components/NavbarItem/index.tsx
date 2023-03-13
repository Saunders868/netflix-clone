import React from "react";

interface NavbarItemP {
  label: string;
}

const NavbarItem: React.FC<NavbarItemP> = ({
  label
}) => {
  return <div className="text-white cursor-pointer hover:text-gray-300 transition" >{label}</div>;
};

export default NavbarItem;
